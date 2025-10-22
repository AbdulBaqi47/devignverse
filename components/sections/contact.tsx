"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import Lottie from "lottie-react";
import successAnimation from "@/public/lottie/success.json";

interface FormState {
  name: string;
  email: string;
  company: string;
  project: string;
}

type Status = "idle" | "loading" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  project: ""
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setForm(initialState);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <Section id="contact" className="mt-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="Collaborate"
          title="Ready to architect something luminous together?"
          description="Tell us about the experience you want to build. We will respond within one business day."
          align="center"
        />
        <motion.div
          className="surface-card-strong relative overflow-hidden rounded-3xl p-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.16),_rgba(255,255,255,0)_70%)] blur-3xl" />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-[var(--foreground)]">Let’s build your next flagship product</h3>
              <p className="text-sm text-[var(--muted)]">
                Share a few details about your initiative. We will design a bespoke roadmap, team, and pricing within
                48 hours.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-[var(--accent-primary)]">
                <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2">Product transformation</span>
                <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2">AI + automation</span>
                <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2">Design systems</span>
              </div>
              {status === "success" ? (
                <div className="relative flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-[var(--accent-secondary)]">
                  <div className="h-16 w-16">
                    <Lottie animationData={successAnimation} loop={false} autoplay style={{ height: "64px" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Message received</p>
                    <p className="text-xs text-[var(--muted)]">We will reach out shortly with next steps.</p>
                  </div>
                </div>
              ) : null}
              {status === "error" ? (
                <p className="rounded-2xl border border-rose-200 bg-rose-100/60 px-4 py-3 text-xs text-rose-700">
                  Something went wrong. Please retry or email hello@devignverse.com.
                </p>
              ) : null}
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                  Name
                  <input
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[var(--foreground)] focus:border-slate-900 focus:outline-none"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                  Email
                  <input
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[var(--foreground)] focus:border-slate-900 focus:outline-none"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                Company
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[var(--foreground)] focus:border-slate-900 focus:outline-none"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                Project vision
                <textarea
                  className="min-h-[140px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[var(--foreground)] focus:border-slate-900 focus:outline-none"
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  required
                />
              </label>
              <motion.button
                type="submit"
                className="w-full rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition-transform duration-300 hover:-translate-y-0.5"
                whileTap={{ scale: 0.97 }}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
