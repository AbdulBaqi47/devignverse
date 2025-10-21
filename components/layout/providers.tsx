"use client";

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";
import { defaultSeo } from "@/lib/seo";
import { Cursor } from "./cursor";
import { LenisProvider } from "./smooth-scroll";
import { Preloader } from "./preloader";

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <LenisProvider>
        {mounted ? <DefaultSeo {...defaultSeo} /> : null}
        <Preloader />
        <Cursor />
        {children}
      </LenisProvider>
    </ThemeProvider>
  );
}
