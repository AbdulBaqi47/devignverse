"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionDivProps = Omit<ComponentProps<typeof motion.div>, "children">;

interface TiltCardProps extends MotionDivProps {
  children: ReactNode;
  intensity?: number;
}

export function TiltCard({ children, className, intensity = 14, ...props }: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 180, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20 });

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const distanceX = (offsetX - centerX) / centerX;
    const distanceY = (centerY - offsetY) / centerY;

    rotateX.set(distanceY * intensity);
    rotateY.set(distanceX * intensity);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className={cn("[transform-style:preserve-3d]", className)}
      style={{ rotateX: springX, rotateY: springY }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      {...props}
    >
      <div className="[transform:translateZ(32px)]">{children}</div>
    </motion.div>
  );
}
