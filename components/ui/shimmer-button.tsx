"use client";

import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionButtonProps = Omit<ComponentProps<typeof motion.button>, "children">;

export function ShimmerButton({ className, children, ...props }: MotionButtonProps & { children: ReactNode }) {
  return (
    <motion.button
      className={cn(
        "group relative overflow-hidden rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.35em]",
        "bg-[#0f172a] text-white shadow-[0_12px_30px_rgba(15,23,42,0.2)] transition-transform duration-300",
        "hover:-translate-y-0.5 active:translate-y-0",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <span className="relative z-10 text-xs font-semibold tracking-[0.55em] text-white">
        {children}
      </span>
      <span className="pointer-events-none absolute inset-x-4 inset-y-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.button>
  );
}
