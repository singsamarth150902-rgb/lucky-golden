"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const SERVICES = [
  { num: "01", icon: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    title: "Road Transport", desc: "Full truckload and part-load services across all 8 hubs with GPS tracking and insured cargo movement." },
  { num: "02", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10a3 3 0 100-6 3 3 0 000 6z",
    title: "Hub-to-Hub Express", desc: "Direct hub-to-hub express routes for time-critical shipments with guaranteed same-day or next-day delivery." },
  { num: "03", icon: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
    title: "Dedicated Fleet", desc: "Assign dedicated vehicles for your regular routes. Consistent drivers, fixed schedules, and priority handling." },
  { num: "04", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Secure Logistics", desc: "High-value and sensitive cargo transported with sealed containers, real-time monitoring, and full insurance." },
  { num: "05", icon: "M22 12h-4l-3 9-6-18-3 9H2",
    title: "Live Tracking", desc: "Real-time shipment visibility from pickup to delivery. SMS and email notifications at every milestone." },
  { num: "06", icon: "M4 15s1-1 4-1 5 0 3 1 7 1 4 0 4-1 4-1V3s-1 1-4 1-5 0-3-1-7-1-4 0-4 1-4 1z",
    title: "Warehousing", desc: "Short-term and long-term warehousing at each hub location with inventory management and order fulfillment." },
];

export default function ServicesSection() {
  const { theme } = useTheme();

  return (
    <section id="services" className={`py-24 sm:py-32 px-6 transition-colors duration-500 ${
      theme === "dark" ? "bg-[var(--bg-alt)]" : "bg-gray-50"
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <span className="text-[var(--accent)] font-bold text-sm tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <div className="section-line mx-auto mt-3 mb-5" />
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--fg)]">
            Our Services
          </h2>
          <p className="max-w-xl mx-auto text-[var(--muted)] mt-4">
            End-to-end logistics solutions tailored for businesses of every size,
            backed by our 8-hub nationwide network.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className={`group relative p-7 rounded-2xl border transition-all duration-300 overflow-hidden ${
                theme === "dark"
                  ? "bg-[var(--card)] border-[var(--card-border)] hover:border-[var(--accent)]/30"
                  : "bg-white border-gray-200 hover:border-[var(--accent)] shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 text-5xl font-black text-[var(--accent)]/[0.06] leading-none select-none">
                {s.num}
              </span>

              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className={`inline-flex p-3 rounded-xl mb-5 transition-colors group-hover:bg-[var(--accent-bg)] ${
                theme === "dark" ? "bg-white/5 text-[var(--accent)]" : "bg-amber-50 text-amber-600"
              }`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[var(--fg)] mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{s.desc}</p>

              <a href="#contact" className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-[var(--accent)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Learn More
                <svg width="14" height="14" viewBox="0 0 16 16"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
