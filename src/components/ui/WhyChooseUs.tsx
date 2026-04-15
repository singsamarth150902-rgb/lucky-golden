"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const REASONS = [
  { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", title: "Fast Delivery", desc: "Express hub-to-hub routes with same-day and next-day options." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "100% Safe", desc: "Insured cargo, sealed transport, and round-the-clock monitoring." },
  { icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2", title: "Always On Time", desc: "99.5% on-time delivery backed by AI-optimized scheduling." },
  { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75", title: "Expert Team", desc: "Experienced drivers and logistics coordinators at every hub." },
];

export default function WhyChooseUs() {
  const { theme } = useTheme();

  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <span className="text-[var(--accent)] font-bold text-sm tracking-[0.2em] uppercase">
            Why Lucky Golden
          </span>
          <div className="section-line mx-auto mt-3 mb-5" />
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--fg)]">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-amber-500/20 ${
                theme === "dark"
                  ? "bg-[var(--card)] border-[var(--card-border)] text-[var(--accent)]"
                  : "bg-white border-gray-200 text-amber-600 shadow-sm"
              }`}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={r.icon} />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[var(--fg)] mb-2">{r.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
