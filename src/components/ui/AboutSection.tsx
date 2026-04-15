"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import TruckSVG from "./TruckSVG";

const CHECKS = [
  "8 strategically located transport hubs",
  "Real-time fleet tracking & monitoring",
  "Dedicated account managers for every client",
  "Comprehensive cargo insurance coverage",
];

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className={`rounded-2xl overflow-hidden aspect-[4/3] border ${
            theme === "dark" ? "bg-[var(--card)] border-[var(--card-border)]" : "bg-gray-50 border-gray-200"
          } flex items-center justify-center`}>
            <div className="text-center p-8">
              <TruckSVG className="w-32 mx-auto mb-4 opacity-80" />
              <p className="text-xl font-bold text-[var(--fg)]">Lucky Golden Fleet</p>
              <p className="text-sm text-[var(--muted)]">Trusted since establishment</p>
            </div>
          </div>

          {/* Experience badge */}
          <div className={`absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6 w-28 h-28 rounded-2xl border flex flex-col items-center justify-center shadow-xl ${
            theme === "dark" ? "bg-[var(--card)] border-[var(--card-border)] shadow-black/30" : "bg-white border-gray-200 shadow-gray-200/60"
          }`}>
            <span className="text-3xl font-black text-[var(--accent)]">24/7</span>
            <span className="text-[10px] font-medium text-[var(--muted)] text-center leading-tight">Round the Clock<br />Operations</span>
          </div>

          {/* Decorative accent */}
          <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[var(--accent)]/10" />
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-[var(--accent)] font-bold text-sm tracking-[0.2em] uppercase">
            About Us
          </span>
          <div className="section-line mt-3 mb-5" />
          <h2 className="text-3xl sm:text-4xl font-black mb-6 text-[var(--fg)] leading-tight">
            Your Trusted Partner in{" "}
            <span className="text-[var(--accent)]">Transport &amp; Logistics</span>
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Lucky Golden Transport Services has built a reputation for reliability
            and excellence. Our network of 8 hubs serves as the backbone of a logistics
            ecosystem designed for speed and safety.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-8">
            From local deliveries to cross-hub freight, our 50+ vehicle fleet
            and dedicated team ensure your cargo reaches its destination on time,
            every time.
          </p>

          {/* Checklist */}
          <div className="space-y-3 mb-8">
            {CHECKS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[var(--accent-bg)] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6l2.5 2.5 4.5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-[var(--fg)]">{item}</span>
              </div>
            ))}
          </div>

          <a href="#services"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:gap-3 transition-all group">
            Discover Our Services
            <svg width="16" height="16" viewBox="0 0 16 16" className="transition-transform group-hover:translate-x-1">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
