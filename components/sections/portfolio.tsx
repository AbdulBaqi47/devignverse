"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioProjects, type PortfolioProject } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";

export function Portfolio() {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  return (
    <Section id="portfolio" className="mt-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Selected work"
          title="Immersive platforms engineered for culture-making momentum."
          description="A glimpse into the launches, products, and experiences we have supercharged with expressive design, motion, and community energy."
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <TiltCard key={project.slug} intensity={10} className="group">
              <GlassCard
                className="relative h-full cursor-pointer p-6"
                onClick={() => setActiveProject(project)}
                whileHover={{ scale: 1.01 }}
                glow
              >
                <div className="relative h-56 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60" />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-xs uppercase tracking-[0.4em] text-[var(--accent-primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">{project.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{project.description}</p>
                    <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent-secondary)]">{project.outcome}</p>
                  </div>
                  <motion.span
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-secondary)]"
                    whileHover={{ x: 4 }}
                  >
                    Preview ↗
                  </motion.span>
                </div>
              </GlassCard>
            </TiltCard>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeProject ? (
          <motion.div
            key="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="surface-card-strong relative w-full max-w-3xl cursor-auto rounded-3xl p-8 text-left"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-6 top-6 text-xs uppercase tracking-[0.4em] text-[var(--muted)]"
              >
                Close
              </button>
              <div className="relative mb-6 h-72 overflow-hidden rounded-2xl">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
              <h3 className="text-3xl font-semibold text-[var(--foreground)]">{activeProject.title}</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{activeProject.description}</p>
              <p className="mt-6 text-sm text-[var(--accent-secondary)]">{activeProject.outcome}</p>
              <Link
                href={`/projects/${activeProject.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                View case study
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
