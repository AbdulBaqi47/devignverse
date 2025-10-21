"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

type MotionDivProps = React.ComponentProps<typeof motion.div>;

interface MagneticProps extends MotionDivProps {
  children: ReactNode;
  radius?: number;
  strength?: number;
}

export function Magnetic({
  children,
  radius = 120,
  strength = 0.25,
  className,
  ...props
}: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.6 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

    if (distance < radius) {
      x.set(offsetX * strength);
      y.set(offsetY * strength);
    }
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      {...props}
    >
      {children}
    </motion.div>
  );
}
