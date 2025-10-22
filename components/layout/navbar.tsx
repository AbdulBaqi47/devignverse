"use client";

import { navLinks } from "@/lib/data";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useLenis } from "./smooth-scroll";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous === undefined) return;
    const diff = latest - previous;
    setHidden(latest > 180 && diff > 0);
  });

  const handleClick = useCallback(
    (href: string) => {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        lenis?.scrollTo(element, { offset: -96, duration: 1.3, easing: (t) => 1 - Math.pow(1 - t, 3) });
      }
      setMobileOpen(false);
    },
    [lenis]
  );

  const variants = useMemo(
    () => ({
      visible: { y: 0, opacity: 1 },
      hidden: { y: -120, opacity: 0 }
    }),
    []
  );

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4"
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="surface-card-strong relative mt-6 flex w-full max-w-6xl items-center justify-between rounded-3xl px-6 py-3">
        <Magnetic className="select-none text-sm font-bold uppercase tracking-[0.4em] text-[var(--accent-secondary)]">
          Devign Verse
        </Magnetic>
        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--foreground)] lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleClick(link.href)}
              className="group relative overflow-hidden rounded-full px-4 py-2 transition-transform duration-300 hover:scale-105"
            >
              <span>{link.label}</span>
              <span className="pointer-events-none absolute inset-x-1 bottom-1 h-[2px] rounded-full bg-[linear-gradient(135deg,#2563eb,#0f172a)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ShimmerButton
              className="px-6 py-2 text-[11px]"
              type="button"
              onClick={() => handleClick("#contact")}
            >
              Contact
            </ShimmerButton>
          </div>
          <Magnetic className="lg:hidden">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--accent-primary)] shadow-sm"
              onClick={() => setMobileOpen((state) => !state)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </Magnetic>
        </div>
        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              key="mobile-nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="surface-card absolute inset-x-0 top-[68px] rounded-3xl px-6 py-6 lg:hidden"
            >
              <nav className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-[var(--foreground)]">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleClick(link.href)}
                    className="rounded-full px-4 py-3 text-left transition-transform duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                ))}
                <ShimmerButton
                  className="mt-4 w-full justify-center px-6 py-3 text-[11px]"
                  type="button"
                  onClick={() => handleClick("#contact")}
                >
                  Contact
                </ShimmerButton>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
