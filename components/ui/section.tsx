"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 64 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ id, children, className, delay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("relative w-full", className)}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}
