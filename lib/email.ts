import { Resend } from "resend";
import { SITE } from "@/content/site";

export type ReservationPayload = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  notes?: string;
};

function buildHtml(p: ReservationPayload) {
  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#ffffff;font-family:Inter,Helvetica,Arial,sans-serif;color:#0f0d0b;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#ffffff;">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#f6f6f5;border:1px solid rgba(15,13,11,0.10);border-radius:14px;overflow:hidden;">
        <tr><td style="padding:32px 32px 0 32px;">
          <div style="font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#6f6a62;">έμπερς · Embers Kitchen</div>
          <h1 style="margin:18px 0 8px 0;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1;color:#0f0d0b;font-weight:400;">
            New reservation request
          </h1>
          <p style="margin:6px 0 0 0;color:#6f6a62;font-size:14px;">
            ${escape(p.guests.toString())} ${p.guests === 1 ? "guest" : "guests"} · ${escape(formatDate(p.date))} · ${escape(p.time)}
          </p>
        </td></tr>

        <tr><td style="padding:24px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid rgba(15,13,11,0.10);">
            ${row("Guest", p.name)}
            ${row("Phone", `<a href="tel:${escape(p.phone)}" style="color:#0f0d0b;text-decoration:underline;">${escape(p.phone)}</a>`)}
            ${row("Email", `<a href="mailto:${escape(p.email)}" style="color:#0f0d0b;text-decoration:underline;">${escape(p.email)}</a>`)}
            ${row("Party", `${escape(p.guests.toString())} ${p.guests === 1 ? "guest" : "guests"}`)}
            ${row("Date", escape(formatDate(p.date)))}
            ${row("Time", escape(p.time))}
            ${p.occasion ? row("Occasion", escape(p.occasion)) : ""}
            ${p.notes ? row("Notes", escape(p.notes).replace(/\n/g, "<br>")) : ""}
          </table>
        </td></tr>

        <tr><td style="padding:0 32px 32px 32px;">
          <div style="margin-top:24px;padding:18px;background:#ebebea;border-radius:10px;border:1px solid rgba(15,13,11,0.12);">
            <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#6f6a62;">Reply</div>
            <p style="margin:8px 0 0 0;font-size:14px;color:#0f0d0b;">
              Confirm by replying to <a href="mailto:${escape(p.email)}" style="color:#0f0d0b;text-decoration:underline;">${escape(p.email)}</a> or calling <a href="tel:${escape(p.phone)}" style="color:#0f0d0b;text-decoration:underline;">${escape(p.phone)}</a>.
            </p>
          </div>
        </td></tr>

        <tr><td style="padding:18px 32px;background:#ffffff;border-top:1px solid rgba(15,13,11,0.08);">
          <div style="font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#6f6a62;">
            ${escape(SITE.address.full)} · ${escape(SITE.phone)}
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string) {
  return `<tr><td style="padding:14px 0;border-bottom:1px solid rgba(15,13,11,0.08);">
    <div style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#6f6a62;">${escape(label)}</div>
    <div style="margin-top:4px;font-size:15px;color:#0f0d0b;">${value}</div>
  </td></tr>`;
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00");
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[c]!);
}

export async function sendReservation(p: ReservationPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const html = buildHtml(p);
  const subject = `Reservation · ${p.name} · ${formatDate(p.date)} ${p.time} · ${p.guests} ${p.guests === 1 ? "guest" : "guests"}`;

  if (!apiKey) {
    console.warn(
      "[reservations] RESEND_API_KEY not set — logging reservation instead of emailing.",
    );
    console.log({ to: SITE.reservationsInbox, subject, payload: p });
    return { ok: true, dev: true as const };
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: "Embers Reservations <onboarding@resend.dev>",
    to: [SITE.reservationsInbox],
    replyTo: p.email,
    subject,
    html,
  });

  if (error) {
    console.error("[reservations] resend error", error);
    return { ok: false as const, error: error.message };
  }
  return { ok: true as const, id: data?.id };
}
