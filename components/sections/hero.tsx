"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ParticleField } from "@/components/visuals/particle-field";
import { useLenis } from "@/components/layout/smooth-scroll";
import HeroCollage from "@/public/images/hero-collage.svg";

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
        <div className="absolute -left-32 top-[-40px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.16)_0%,_rgba(255,255,255,0)_70%)]" />
        <div className="absolute right-[-220px] top-16 h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,_rgba(15,23,42,0.14)_0%,_rgba(255,255,255,0)_75%)]" />
        <div className="absolute inset-x-0 bottom-[-300px] h-[480px] bg-[radial-gradient(circle_at_50%_0%,_rgba(148,163,184,0.22),_rgba(255,255,255,0)_70%)]" />
      </div>
      <ParticleField className="pointer-events-none absolute inset-0" />
      <motion.div
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center gap-10 text-center md:items-start md:text-left">
          <motion.span
            variants={item}
            className="pill inline-flex items-center justify-center px-6 py-2 text-xs font-semibold tracking-[0.6em]"
          >
            Innovating Digital Experiences
          </motion.span>
          <motion.h1
            variants={item}
            className="headline text-4xl font-extrabold leading-tight text-[var(--foreground)] md:text-[56px]"
          >
            We craft the supercharged digital launchpads your brand deserves.
          </motion.h1>
          <motion.p variants={item} className="max-w-xl text-lg leading-8 text-[var(--muted)]">
            Devign Verse blends loud motion, expressive strategy, and fearless engineering to spark the next wave of
            social-first experiences. We orchestrate product, content, and media so your brand moves culture.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
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
                className="group flex items-center gap-2 rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-900 transition-colors duration-300 hover:bg-slate-900 hover:text-white"
                whileHover={{ scale: 1.02 }}
              >
                View work
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.a>
            </Magnetic>
          </motion.div>
          <motion.div variants={item} className="grid w-full gap-4 text-left sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-card rounded-3xl px-6 py-6">
                <p className="text-3xl font-semibold text-[var(--foreground)]">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.4em] text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div variants={item} className="relative flex h-full w-full items-center justify-center">
          <div className="relative flex max-w-[420px] flex-col items-center">
            <div className="relative w-full overflow-hidden rounded-[36px] border border-slate-200/70 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <Image src={HeroCollage} alt="Creative showcase" priority className="h-auto w-full" />
            </div>
            <motion.div
              className="surface-card absolute -left-12 top-10 hidden w-44 rounded-3xl border border-slate-200/80 bg-white px-4 py-5 text-left shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Latest drop</p>
              <p className="mt-3 text-sm font-semibold text-slate-900">Social-first product reveal kit</p>
            </motion.div>
            <motion.div
              className="surface-card absolute -right-10 bottom-8 hidden w-48 rounded-3xl border border-slate-200/80 bg-white px-4 py-5 text-left shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Motion score</p>
              <div className="mt-3 flex items-end gap-2">
                <p className="text-3xl font-semibold text-slate-900">98</p>
                <span className="text-sm text-slate-500">/100</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-200">
                <div className="h-full w-[82%] rounded-full bg-slate-900" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

