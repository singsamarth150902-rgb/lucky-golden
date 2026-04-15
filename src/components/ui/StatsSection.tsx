"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const STATS = [
  { end: 8, suffix: "", label: "Transport Hubs", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" },
  { end: 50, suffix: "+", label: "Fleet Vehicles", icon: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" },
  { end: 10000, suffix: "+", label: "Deliveries Completed", icon: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0z" },
  { end: 99.5, suffix: "%", label: "On-Time Rate", icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2" },
];

function Counter({ end, suffix, started }: { end: number; suffix: string; started: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!started) return;
    const isDecimal = end % 1 !== 0;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setVal(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, end]);

  return (
    <span>
      {end % 1 !== 0 ? val.toFixed(1) : val.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-16 sm:py-20 px-6 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-r from-amber-600/10 via-[var(--bg-alt)] to-amber-600/10"
          : "bg-gradient-to-r from-amber-50 via-white to-amber-50"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex p-3 rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={stat.icon} />
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[var(--accent)] mb-1">
              <Counter end={stat.end} suffix={stat.suffix} started={started} />
            </div>
            <p className="text-sm text-[var(--muted)] font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
