"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.ComponentProps<typeof motion.div> {
  glow?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1",
          glow ? "surface-card-strong" : "surface-card",
          className
        )}
        {...props}
      />
    );
  }
);

GlassCard.displayName = "GlassCard";
