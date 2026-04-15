"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(135deg, #1e293b, #334155)"
            : "linear-gradient(135deg, #93c5fd, #60a5fa)",
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs"
        animate={{ left: theme === "dark" ? "2px" : "30px" }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(135deg, #1e3a5f, #0f172a)"
              : "linear-gradient(135deg, #fbbf24, #f59e0b)",
        }}
      >
        {theme === "dark" ? "\u{1F319}" : "\u{2600}\u{FE0F}"}
      </motion.div>
    </button>
  );
}
