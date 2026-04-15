"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import TruckSVG from "./TruckSVG";

const SLIDES = [
  { title: "Reliable Transport,", highlight: "Every Time", sub: "Connecting 8 strategic hubs with a fleet of 50+ vehicles for seamless cargo delivery across the region." },
  { title: "Your Cargo,", highlight: "Our Commitment", sub: "99.5% on-time delivery rate with real-time tracking and 24/7 dedicated operations support." },
  { title: "8 Hubs,", highlight: "One Network", sub: "Strategically placed logistics hubs ensuring the fastest route for every shipment, every day." },
];

export default function HeroSection() {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background patterns */}
      <div className={`absolute inset-0 transition-colors duration-700 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0b0b10] via-[#12121a] to-amber-950/10"
          : "bg-gradient-to-br from-amber-50 via-white to-orange-50"
      }`} />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, var(--fg) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }} />

      {/* Large faded LG watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-black leading-none opacity-[0.02] pointer-events-none select-none tracking-tighter">
        LG
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-28 sm:pt-28 sm:pb-36 min-h-[85vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left — Text */}
          <div>
            {/* Slide indicator */}
            <div className="flex gap-2 mb-8">
              {SLIDES.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === current ? "w-10 bg-[var(--accent)]" : "w-4 bg-[var(--muted)]/30"
                  }`} />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                  {slide.title}
                  <br />
                  <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                    {slide.highlight}
                  </span>
                </h1>
                <p className="text-lg text-[var(--muted)] max-w-lg leading-relaxed mb-8">
                  {slide.sub}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap gap-4">
              <a href="#contact"
                className="px-7 py-3.5 rounded-lg font-bold text-gray-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5">
                Request a Quote
              </a>
              <a href="#services"
                className="px-7 py-3.5 rounded-lg font-bold border-2 border-[var(--card-border)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:-translate-y-0.5">
                Our Services
              </a>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative hidden lg:block">
            <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${
              theme === "dark" ? "bg-[#14141e]" : "bg-gray-100"
            } border border-[var(--card-border)] flex items-center justify-center`}>
              {/* Placeholder with animated truck */}
              <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
                <div className="animate-float mb-4">
                  <TruckSVG className="w-40 h-auto opacity-90" />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-[var(--accent)]">50+</p>
                  <p className="text-sm text-[var(--muted)]">Vehicles in Fleet</p>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-6 right-6 grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/20" />
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/20" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className={`absolute -left-6 bottom-8 px-5 py-4 rounded-xl border shadow-xl ${
                theme === "dark" ? "bg-[var(--card)] border-[var(--card-border)] shadow-black/30" : "bg-white border-gray-200 shadow-gray-200/60"
              }`}
            >
              <p className="text-2xl font-black text-[var(--accent)]">99.5%</p>
              <p className="text-xs text-[var(--muted)]">On-Time Delivery</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className={`absolute -right-4 top-8 px-5 py-4 rounded-xl border shadow-xl ${
                theme === "dark" ? "bg-[var(--card)] border-[var(--card-border)] shadow-black/30" : "bg-white border-gray-200 shadow-gray-200/60"
              }`}
            >
              <p className="text-2xl font-black text-[var(--accent)]">8</p>
              <p className="text-xs text-[var(--muted)]">Active Hubs</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Road with truck at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className={`h-10 relative ${theme === "dark" ? "bg-gray-800/40" : "bg-gray-200/60"}`}>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden h-0.5">
            <div className="anim-dash flex gap-4 w-[200%]">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="w-6 h-0.5 bg-amber-400/50 rounded flex-shrink-0" />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-0"><TruckSVG className="anim-drive w-20 opacity-60" /></div>
      </div>
    </section>
  );
}
