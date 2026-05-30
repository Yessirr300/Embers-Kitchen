import { NextResponse } from "next/server";
import { z } from "zod";
import { sendReservation, type ReservationPayload } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  phone: z.string().min(5).max(30),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time"),
  guests: z.number().int().min(1).max(20),
  occasion: z.string().max(40).optional(),
  notes: z.string().max(600).optional(),
  // Honeypot — should always be empty.
  company: z.string().max(0).optional(),
});

const hits = new Map<string, { n: number; ts: number }>();

function ratelimit(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > 60_000) {
    hits.set(ip, { n: 1, ts: now });
    return false;
  }
  rec.n += 1;
  rec.ts = now;
  return rec.n > 5;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (ratelimit(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const { company, ...payload } = parsed.data;
  void company; // honeypot

  const res = await sendReservation(payload as ReservationPayload);
  if (!res.ok) {
    return NextResponse.json({ ok: false, error: res.error ?? "Email failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
