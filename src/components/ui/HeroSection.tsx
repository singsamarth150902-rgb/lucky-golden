"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-xl mb-6 ${
              theme === "dark"
                ? "border-yellow-400/30 bg-black/40"
                : "border-yellow-400/40 bg-white/30"
            }`}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span
              className={`text-sm font-medium ${
                theme === "dark" ? "text-yellow-300" : "text-yellow-700"
              }`}
            >
              8 Hubs Active &mdash; Scroll to Begin the Journey
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight mb-6 drop-shadow-2xl"
        >
          <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
            LUCKY
          </span>
          <br />
          <span
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } drop-shadow-lg`}
          >
            GOLDEN
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Premium transport services connecting{" "}
          <span className="text-yellow-500 font-semibold">8 strategic hubs</span>.
          Scroll down to ride along our fleet route.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-gray-900 overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Start Journey
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${
              theme === "dark" ? "border-white/40" : "border-gray-500/40"
            }`}
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
