"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Minus,
  Plus,
  Calendar,
  Clock,
  Users,
  Mail,
  Phone as PhoneIcon,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Step = 0 | 1 | 2 | 3 | 4;

type FormState = {
  guests: number;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  occasion: string;
  notes: string;
};

const TIMES_LUNCH = ["12:30", "13:00", "13:30", "14:00", "14:30"];
const TIMES_DINNER = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

const OCCASIONS = ["—", "Birthday", "Anniversary", "Business", "Date", "Celebration", "Other"];

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function isSunday(iso: string) {
  return new Date(iso + "T00:00").getDay() === 0;
}

export function ReservationForm() {
  const [step, setStep] = useState<Step>(0);
  const [form, setForm] = useState<FormState>({
    guests: 2,
    date: todayISO(),
    time: "",
    name: "",
    email: "",
    phone: "",
    occasion: "—",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  const canNext = (() => {
    if (step === 0) return form.guests >= 1 && form.date && !isSunday(form.date);
    if (step === 1) return Boolean(form.time);
    if (step === 2)
      return form.name.length >= 2 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) && form.phone.length >= 5;
    if (step === 3) return true;
    return false;
  })();

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, company: honeypot }),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Something went wrong");
      setDone(true);
      setStep(4);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to send");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative border-t border-b border-hairline py-10 md:py-12">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-8">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex-1">
            <div
              className={cn(
                "h-px transition-colors duration-500",
                step >= i ? "bg-ink" : "bg-hairline",
              )}
            />
            <div
              className={cn(
                "mt-2 text-[10px] uppercase tracking-[0.18em] font-[var(--font-mono)] transition-colors",
                step === i ? "text-ink" : step > i ? "text-ink" : "text-muted",
              )}
            >
              0{i + 1} · {["When", "Time", "You", "Notes"][i]}
            </div>
          </div>
        ))}
      </div>

      {/* Honeypot */}
      <div className="hidden">
        <label>
          Company
          <input
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {step === 0 && (
            <Step0 form={form} update={update} />
          )}
          {step === 1 && (
            <Step1 form={form} update={update} />
          )}
          {step === 2 && (
            <Step2 form={form} update={update} />
          )}
          {step === 3 && (
            <Step3 form={form} update={update} />
          )}
          {step === 4 && done && (
            <Confirmation form={form} />
          )}
        </motion.div>
      </AnimatePresence>

      {error && (
        <div className="mt-4 rounded-md bg-paper-deep border border-ink/25 text-ink px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {step < 4 && (
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1) as Step)}
            data-cursor
            disabled={step === 0}
            className="inline-flex items-center gap-2 text-muted hover:text-ink disabled:opacity-30 disabled:pointer-events-none font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em]"
          >
            <ChevronLeft size={14} /> Back
          </button>

          {step < 3 ? (
            <Button
              onClick={() => canNext && setStep((s) => Math.min(3, s + 1) as Step)}
              disabled={!canNext}
              size="lg"
              magnetic
            >
              Continue <ChevronRight size={14} />
            </Button>
          ) : (
            <Button onClick={submit} disabled={submitting} size="lg" magnetic>
              {submitting ? "Sending…" : "Confirm Reservation"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

function Step0({ form, update }: { form: FormState; update: <K extends keyof FormState>(k: K, v: FormState[K]) => void }) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <Label icon={<Users size={14} />}>Guests</Label>
        <div className="mt-4 flex items-center gap-6">
          <button
            data-cursor
            onClick={() => update("guests", Math.max(1, form.guests - 1))}
            className="h-12 w-12 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-paper hover:border-ink transition-colors grid place-items-center"
          >
            <Minus size={16} />
          </button>
          <div className="font-[var(--font-display)] text-7xl italic tabular-nums text-ink w-24 text-center">
            {form.guests}
          </div>
          <button
            data-cursor
            onClick={() => update("guests", Math.min(20, form.guests + 1))}
            className="h-12 w-12 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-paper hover:border-ink transition-colors grid place-items-center"
          >
            <Plus size={16} />
          </button>
        </div>
        <p className="mt-3 text-muted text-xs">
          Parties of 8+ — please call directly.
        </p>
      </div>

      <div>
        <Label icon={<Calendar size={14} />}>Date</Label>
        <input
          type="date"
          min={todayISO()}
          value={form.date}
          onChange={(e) => update("date", e.target.value)}
          data-cursor
          className="mt-4 w-full bg-transparent border-b border-ink/20 text-ink py-3 font-[var(--font-display)] italic text-3xl focus:border-ink focus:outline-none"
        />
        {isSunday(form.date) && (
          <p className="mt-3 text-ink text-xs">We're closed Sundays — please pick another date.</p>
        )}
      </div>
    </div>
  );
}

function Step1({ form, update }: { form: FormState; update: <K extends keyof FormState>(k: K, v: FormState[K]) => void }) {
  return (
    <div>
      <Label icon={<Clock size={14} />}>Pick a Time</Label>
      <div className="mt-6">
        <div className="text-eyebrow">Lunch service</div>
        <div className="mt-3 grid grid-cols-3 md:grid-cols-5 gap-2">
          {TIMES_LUNCH.map((t) => (
            <TimePill key={t} value={t} active={form.time === t} onClick={() => update("time", t)} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-eyebrow">Dinner service</div>
        <div className="mt-3 grid grid-cols-3 md:grid-cols-5 gap-2">
          {TIMES_DINNER.map((t) => (
            <TimePill key={t} value={t} active={form.time === t} onClick={() => update("time", t)} />
          ))}
        </div>
      </div>
      <p className="mt-6 text-muted text-xs">
        Availability shown here is indicative — you'll receive confirmation by email within 12 hours.
      </p>
    </div>
  );
}

function TimePill({ value, active, onClick }: { value: string; active: boolean; onClick: () => void }) {
  return (
    <button
      data-cursor
      onClick={onClick}
      className={cn(
        "relative rounded-md py-3 font-[var(--font-mono)] text-sm tabular-nums tracking-wider border transition-colors",
        active
          ? "border-ink bg-ink/10 text-ink"
          : "border-hairline text-ink hover:border-ink/40",
      )}
    >
      {value}
    </button>
  );
}

function Step2({ form, update }: { form: FormState; update: <K extends keyof FormState>(k: K, v: FormState[K]) => void }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Field icon={<User size={14} />} label="Full Name">
        <input
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your name"
          data-cursor
          className="input-style"
        />
      </Field>
      <Field icon={<PhoneIcon size={14} />} label="Phone">
        <input
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          type="tel"
          placeholder="+357 99 …"
          data-cursor
          className="input-style"
        />
      </Field>
      <Field icon={<Mail size={14} />} label="Email" className="md:col-span-2">
        <input
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          type="email"
          placeholder="you@example.com"
          data-cursor
          className="input-style"
        />
      </Field>
      <style jsx>{`
        .input-style {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(244, 233, 216, 0.15);
          color: #f4e9d8;
          padding: 12px 0;
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.75rem;
          outline: none;
          transition: border-color 250ms;
        }
        .input-style:focus {
          border-bottom-color: #ff5b14;
        }
        .input-style::placeholder {
          color: rgba(244, 233, 216, 0.2);
        }
      `}</style>
    </div>
  );
}

function Step3({ form, update }: { form: FormState; update: <K extends keyof FormState>(k: K, v: FormState[K]) => void }) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <Label>Occasion</Label>
        <div className="mt-4 flex flex-wrap gap-2">
          {OCCASIONS.map((o) => (
            <button
              key={o}
              data-cursor
              onClick={() => update("occasion", o)}
              className={cn(
                "rounded-full border px-4 py-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] transition-colors",
                form.occasion === o
                  ? "bg-ink text-paper border-ink"
                  : "border-ink/20 text-muted hover:text-ink hover:border-ink/40",
              )}
            >
              {o}
            </button>
          ))}
        </div>
      </div>
      <div>
        <Label>Notes / Allergies</Label>
        <textarea
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          rows={4}
          placeholder="Anything we should know about the table or the kitchen…"
          data-cursor
          className="mt-4 w-full bg-transparent border-b border-ink/20 text-ink py-3 font-[var(--font-display)] italic text-xl focus:border-ink focus:outline-none placeholder:text-ink/20"
        />
      </div>
      <Summary form={form} className="md:col-span-2" />
    </div>
  );
}

function Summary({ form, className }: { form: FormState; className?: string }) {
  return (
    <div className={cn("rounded-md border border-hairline bg-paper/60 p-5", className)}>
      <div className="text-eyebrow">— Review</div>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-6 text-ink">
        <Cell label="Guests" value={String(form.guests)} />
        <Cell label="Date" value={form.date} />
        <Cell label="Time" value={form.time || "—"} />
        <Cell label="Occasion" value={form.occasion} />
      </div>
    </div>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] font-[var(--font-mono)] text-muted">{label}</div>
      <div className="mt-1 font-[var(--font-display)] italic text-2xl">{value}</div>
    </div>
  );
}

function Field({ icon, label, children, className }: { icon?: React.ReactNode; label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={cn("block", className)}>
      <Label icon={icon}>{label}</Label>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Label({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-eyebrow">
      {icon && <span className="text-ink">{icon}</span>}
      {children}
    </span>
  );
}

function Confirmation({ form }: { form: FormState }) {
  return (
    <div className="text-center py-10">
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto h-20 w-20 rounded-full bg-ink grid place-items-center text-paper ink-shadow"
      >
        <Check size={36} strokeWidth={2.5} />
      </motion.div>
      <h3 className="text-display mt-8 text-ink text-4xl md:text-6xl">
        Request <span className="italic text-ink">received.</span>
      </h3>
      <p className="mt-4 text-muted max-w-md mx-auto">
        We've sent the request to the restaurant. You'll hear back at{" "}
        <span className="text-ink">{form.email}</span> within 12 hours.
        If it's urgent, ring{" "}
        <a href="tel:+35797470471" className="text-ink hover:underline">+357 97 470 471</a>.
      </p>
      <div className="mt-10">
        <Button href="/" variant="ghost">Back to home</Button>
      </div>
    </div>
  );
}
