"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const TESTIMONIALS = [
  { name: "Rajesh Patel", role: "Operations Manager, ABC Industries", text: "Lucky Golden has been our go-to transport partner for 3 years. Their hub network and on-time reliability is unmatched. Highly recommended." },
  { name: "Priya Sharma", role: "Logistics Head, XYZ Corp", text: "The dedicated fleet service saved us both time and money. Their team at Hub Delta has been incredibly responsive and professional." },
  { name: "Amit Verma", role: "Supply Chain Director, DEF Ltd", text: "We switched to Lucky Golden for their 8-hub coverage. Same-day express between Hub Alpha and Hub Hotel is a game-changer for our business." },
  { name: "Sunita Rao", role: "Procurement Manager, GHI Traders", text: "Real-time tracking, secure handling, and consistent delivery times. Lucky Golden is the gold standard in regional transport services." },
];

export default function TestimonialsSection() {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className={`py-24 sm:py-32 px-6 transition-colors duration-500 ${
      theme === "dark" ? "bg-[var(--bg-alt)]" : "bg-gray-50"
    }`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <span className="text-[var(--accent)] font-bold text-sm tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <div className="section-line mx-auto mt-3 mb-5" />
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--fg)]">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Quote */}
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className={`p-8 sm:p-10 rounded-2xl border text-center ${
                theme === "dark"
                  ? "bg-[var(--card)] border-[var(--card-border)]"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              {/* Quote icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" className="mx-auto mb-6 text-[var(--accent)]/30">
                <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="text-lg sm:text-xl text-[var(--fg)] leading-relaxed mb-6 italic">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </p>
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 mx-auto mb-3 flex items-center justify-center text-gray-900 font-bold text-lg">
                {TESTIMONIALS[current].name.charAt(0)}
              </div>
              <p className="font-bold text-[var(--fg)]">{TESTIMONIALS[current].name}</p>
              <p className="text-sm text-[var(--muted)]">{TESTIMONIALS[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-[var(--accent)] w-7" : "bg-[var(--muted)]/25 hover:bg-[var(--muted)]/40"
              }`} />
          ))}
        </div>
      </div>
    </section>
  );
}
