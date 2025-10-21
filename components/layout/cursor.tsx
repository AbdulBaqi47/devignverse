"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const root = document.documentElement;
    const update = () => {
      const allow = !coarseQuery.matches;
      setEnabled(allow);
      if (allow) {
        root.classList.add("has-custom-cursor");
      } else {
        root.classList.remove("has-custom-cursor");
      }
    };
    update();
    coarseQuery.addEventListener("change", update);

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      coarseQuery.removeEventListener("change", update);
      window.removeEventListener("mousemove", move);
      root.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed z-[999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/70 bg-cyan-300/30 backdrop-blur"
      style={{ x, y }}
    />
  );
}
