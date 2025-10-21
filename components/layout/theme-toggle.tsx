"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme !== "light";

  return (
    <motion.button
      aria-label="Toggle theme"
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#9a5bff,#c4ff3f)] text-[#120424] shadow-[0_12px_30px_rgba(9,0,20,0.45)]"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.9 }}
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-[#120424]"
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </motion.span>
    </motion.button>
  );
}
