"use client";

import Lenis from "lenis";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type LenisContextValue = Lenis | null;

const LenisContext = createContext<LenisContextValue>(null);

export function LenisProvider({ children }: { children: ReactNode }) {
  const frame = useRef<number>();
  const [lenisInstance, setLenisInstance] = useState<LenisContextValue>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      smoothWheel: true
    });

    setLenisInstance(lenis);

    const raf = (time: number) => {
      lenis.raf(time);
      frame.current = requestAnimationFrame(raf);
    };

    frame.current = requestAnimationFrame(raf);

    return () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return <LenisContext.Provider value={lenisInstance}>{children}</LenisContext.Provider>;
}

export function useLenis() {
  return useContext(LenisContext);
}
