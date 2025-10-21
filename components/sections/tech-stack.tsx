"use client";

import { techStack } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -600],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 18,
        ease: "linear"
      }
    }
  }
};

export function TechStack() {
  const doubled = [...techStack, ...techStack];

  return (
    <Section id="tech" className="mt-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Tech DNA"
          title="Crafted with a proven stack of frameworks, languages, and motion systems."
          description="We orchestrate the right technologies for resilience, velocity, and sensory delight."
          align="center"
        />
        <div className="surface-card relative overflow-hidden rounded-3xl p-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-[linear-gradient(90deg,#120424,rgba(18,4,36,0))]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-[linear-gradient(270deg,#120424,rgba(18,4,36,0))]" />
          <motion.div className="flex gap-10" variants={marqueeVariants} animate="animate">
            {doubled.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="surface-card-strong flex h-28 min-w-[12rem] flex-col items-center justify-center gap-3 rounded-2xl px-6"
              >
                <span className="text-sm uppercase tracking-[0.4em] text-[var(--accent-primary)]">{item.category}</span>
                <span className="text-lg font-semibold text-[var(--foreground)]">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
