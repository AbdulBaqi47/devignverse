"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface ParticleFieldProps {
  className?: string;
}

const PARTICLE_COUNT = 36;

export function ParticleField({ className }: ParticleFieldProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
        id: index,
        size: Math.random() * 6 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 6 + 4
      })),
    []
  );

  return (
    <div className={className} aria-hidden>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[rgba(37,99,235,0.2)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{ y: [particle.y - 4, particle.y + 4, particle.y - 4], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4
          }}
        />
      ))}
    </div>
  );
}
