"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const phrases = ["Igniting strategy", "Designing flow", "Engineering clarity"];

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 600);

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => {
      clearInterval(phraseInterval);
      clearTimeout(timeout);
    };
  }, []);

  const currentPhrase = useMemo(() => phrases[index], [index]);

  return (
    <AnimatePresence mode="wait">
      {visible ? (
        <motion.div
          key="preloader"
          className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-[#06070b]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-6 text-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="relative h-20 w-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border border-cyan-400/60" />
              <div className="absolute inset-4 rounded-full border border-fuchsia-400/60 blur" />
              <motion.span
                className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300"
                animate={{ y: [0, 64, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.p
              className="text-sm uppercase tracking-[0.6em] text-cyan-200/70"
              key={currentPhrase}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {currentPhrase}
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
