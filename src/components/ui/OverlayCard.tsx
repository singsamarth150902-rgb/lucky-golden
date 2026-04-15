"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { ReactNode } from "react";

interface OverlayCardProps {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export default function OverlayCard({ children, className = "", wide = false }: OverlayCardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`
        ${wide ? "max-w-5xl" : "max-w-3xl"} mx-auto
        backdrop-blur-2xl rounded-3xl border shadow-2xl
        p-8 sm:p-12
        ${
          theme === "dark"
            ? "bg-gray-950/60 border-white/10 shadow-black/30"
            : "bg-white/50 border-white/40 shadow-gray-400/20"
        }
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
