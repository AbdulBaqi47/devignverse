"use client";

import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionButtonProps = Omit<ComponentProps<typeof motion.button>, "children">;

export function ShimmerButton({ className, children, ...props }: MotionButtonProps & { children: ReactNode }) {
  return (
    <motion.button
      className={cn(
        "group relative overflow-hidden rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.4em]",
        "bg-[linear-gradient(135deg,#9a5bff,#c4ff3f)] text-[#100222]",
        "shadow-[0_0_40px_rgba(12,0,36,0.45)] transition-transform duration-300",
        "hover:-translate-y-0.5 active:translate-y-0",
        className
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <span className="relative z-10 mix-blend-screen text-xs font-semibold tracking-[0.6em] text-white">
        {children}
      </span>
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.button>
  );
}
