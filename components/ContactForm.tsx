"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/schema";
import { PrimaryButton } from "./PrimaryButton";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        next[String(issue.path[0])] = issue.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(parsed.data) });
    setStatus(response.ok ? "Thanks! We respond in 1–2 business days." : "Could not submit request.");
    if (response.ok) event.currentTarget.reset();
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-border bg-muted/30 px-3 py-2.5 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="block text-sm font-medium text-text-primary">
        Name
        <input name="name" className={inputClass} />
        <span className="text-xs text-error">{errors.name}</span>
      </label>
      <label className="block text-sm font-medium text-text-primary">
        Email
        <input type="email" name="email" className={inputClass} />
        <span className="text-xs text-error">{errors.email}</span>
      </label>
      <label className="block text-sm font-medium text-text-primary">
        Support category
        <select name="category" defaultValue="technical" className={inputClass}>
          <option value="technical">Technical</option>
          <option value="legal">Legal</option>
          <option value="business">Business</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-text-primary">
        Subject
        <input name="subject" className={inputClass} />
        <span className="text-xs text-error">{errors.subject}</span>
      </label>
      <label className="block text-sm font-medium text-text-primary">
        Message
        <textarea name="message" rows={5} className={inputClass} />
        <span className="text-xs text-error">{errors.message}</span>
      </label>
      <p className="text-xs text-text-secondary">We respond in 1–2 business days.</p>
      <PrimaryButton type="submit" className="rounded-full px-5 py-2.5 text-sm">
        Submit
      </PrimaryButton>
      {status && <p className="text-sm text-success">{status}</p>}
    </form>
  );
}
