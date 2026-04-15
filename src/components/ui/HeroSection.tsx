"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import TruckSVG from "./TruckSVG";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 animate-gradient ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-950 via-[#0a0a0f] to-amber-950/20"
            : "bg-gradient-to-br from-amber-50 via-white to-sky-50"
        }`}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated road with trucks */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Road surface */}
        <div className={`h-16 ${theme === "dark" ? "bg-gray-800/60" : "bg-gray-300/60"}`}>
          {/* Dashed center line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden h-1">
            <div className="animate-dashes flex gap-4 w-[200%]">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="w-8 h-1 bg-amber-400/60 rounded flex-shrink-0" />
              ))}
            </div>
          </div>
        </div>
        {/* Driving truck */}
        <div className="absolute bottom-4 left-0">
          <TruckSVG className="animate-drive opacity-80" />
        </div>
        {/* Second truck going other way */}
        <div className="absolute bottom-5 left-0">
          <div className="animate-drive-reverse opacity-40 scale-75">
            <TruckSVG />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${
              theme === "dark"
                ? "border-amber-400/20 bg-amber-400/5 text-amber-300"
                : "border-amber-400/30 bg-amber-50 text-amber-700"
            }`}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            8 Hubs &bull; 50+ Vehicles &bull; 24/7 Operations
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Lucky Golden
          </span>
          <br />
          <span className="text-[var(--foreground)]">Transport</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Premium transportation connecting{" "}
          <span className="text-amber-500 font-semibold">8 strategic hubs</span>{" "}
          with speed, reliability, and care. Your cargo, our commitment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-3.5 rounded-xl font-bold text-gray-900 overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 transition-transform group-hover:scale-105" />
            <span className="relative flex items-center gap-2">
              Get a Quote
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </span>
          </a>
          <a
            href="#services"
            className={`px-8 py-3.5 rounded-xl font-bold border-2 transition-all duration-300 hover:scale-105 active:scale-95 ${
              theme === "dark"
                ? "border-white/15 text-white hover:border-amber-400 hover:text-amber-400"
                : "border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-600"
            }`}
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-5 h-8 rounded-full border-2 flex justify-center pt-1.5 ${
            theme === "dark" ? "border-white/25" : "border-gray-400/50"
          }`}
        >
          <motion.div
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 bg-amber-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
