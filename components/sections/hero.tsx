"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ParticleField } from "@/components/visuals/particle-field";
import { useLenis } from "@/components/layout/smooth-scroll";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stats = [
  { label: "Client retention", value: "92%" },
  { label: "Avg. launch uplift", value: "+38%" },
  { label: "Platform shipped", value: "68" }
];

export function Hero() {
  const lenis = useLenis();

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pb-32 pt-40 md:pt-48"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(154,91,255,0.4)_0%,_rgba(18,4,36,0)_70%)]" />
        <div className="absolute right-[-180px] top-16 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,_rgba(196,255,63,0.35)_0%,_rgba(17,4,32,0)_70%)]" />
        <div className="absolute inset-x-0 bottom-[-320px] h-[520px] bg-[radial-gradient(circle_at_50%_0%,_rgba(122,58,255,0.35),_rgba(10,2,18,0)_65%)]" />
      </div>
      <ParticleField className="pointer-events-none absolute inset-0" />
      <motion.div
        className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={item}
          className="pill mx-auto inline-flex items-center justify-center px-6 py-2 text-xs font-semibold tracking-[0.6em]"
        >
          Innovating Digital Experiences
        </motion.span>
        <motion.h1
          variants={item}
          className="headline text-5xl font-extrabold leading-tight text-[var(--foreground)] md:text-[64px]"
        >
          We craft the supercharged digital launchpads your brand deserves.
        </motion.h1>
        <motion.p variants={item} className="mx-auto max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Devign Verse blends loud motion, expressive strategy, and fearless engineering to spark the next wave of
          social-first experiences. We build moments that audiences feel.
        </motion.p>
        <motion.div variants={item} className="mx-auto flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <ShimmerButton
              type="button"
              onClick={() => {
                const target = document.getElementById("contact");
                if (target) {
                  lenis?.scrollTo(target, { offset: -96, duration: 1.2 });
                }
              }}
            >
              Connect
            </ShimmerButton>
          </Magnetic>
          <Magnetic>
            <motion.a
              href="#portfolio"
              className="group flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#9a5bff,#c4ff3f)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-[#100222] transition-transform duration-300 hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
            >
              View work
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>
          </Magnetic>
        </motion.div>
        <motion.div variants={item} className="grid gap-4 text-left md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="surface-card-strong rounded-3xl px-6 py-6 text-left"
            >
              <p className="text-3xl font-semibold text-[var(--foreground)]">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
