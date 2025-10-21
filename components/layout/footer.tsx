"use client";

import { socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative mt-28 flex flex-col items-center gap-8 pb-12">
      <div className="h-2 w-full max-w-6xl rounded-full bg-[linear-gradient(135deg,#9a5bff,#c4ff3f)]" />
      <motion.div
        className="surface-card-strong flex flex-col items-center gap-6 rounded-3xl px-10 py-8 text-center md:flex-row md:justify-between md:gap-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col items-center gap-2 text-sm uppercase tracking-[0.4em] text-[var(--accent-primary)] md:items-start">
          <span>Devign Verse</span>
          <span className="text-[10px] text-[var(--muted)]">Innovating digital experiences</span>
        </div>
        <nav className="flex items-center gap-4 text-sm font-medium text-[var(--foreground)]">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-full px-4 py-2 transition-transform duration-300 hover:scale-105"
              aria-label={link.aria}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </motion.div>
      <p className="text-xs text-[var(--muted)]">
        &copy; {new Date().getFullYear()} Devign Verse. Crafted with precision and intent.
      </p>
    </footer>
  );
}
