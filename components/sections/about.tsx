"use client";

import { timeline, values } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="mt-28">
      <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Who we are"
            title="We are an experience studio orchestrating strategy, design, and engineering as one."
            description="Our collective of product strategists, designers, and full-stack engineers build adaptive platforms that feel luminous and intuitive."
          />
          <div className="space-y-6">
            {values.map((value) => (
              <GlassCard
                key={value.title}
                className="relative p-6"
                glow
              >
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{value.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{value.description}</p>
                <motion.span
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(196,255,63,0.45),_rgba(16,2,34,0))] blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </GlassCard>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-x-6 top-6 h-1/2 rounded-full bg-[radial-gradient(circle,_rgba(154,91,255,0.3),_rgba(17,4,33,0)_70%)]" />
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                className="surface-card relative rounded-3xl p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent-primary)]">
                  {item.period}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{item.summary}</p>
                <p className="mt-4 text-sm font-medium text-[var(--accent-primary)]">{item.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
