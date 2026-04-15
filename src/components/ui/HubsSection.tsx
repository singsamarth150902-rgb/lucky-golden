"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const HUBS = [
  { name: "Hub Alpha", color: "#f59e0b", region: "North Zone", status: "Active" },
  { name: "Hub Bravo", color: "#ef4444", region: "East Zone", status: "Active" },
  { name: "Hub Charlie", color: "#3b82f6", region: "West Zone", status: "Active" },
  { name: "Hub Delta", color: "#8b5cf6", region: "Central", status: "Active" },
  { name: "Hub Echo", color: "#10b981", region: "South Zone", status: "Active" },
  { name: "Hub Foxtrot", color: "#ec4899", region: "South-East", status: "Active" },
  { name: "Hub Golf", color: "#06b6d4", region: "North-West", status: "Active" },
  { name: "Hub Hotel", color: "#f97316", region: "North-East", status: "Active" },
];

export default function HubsSection() {
  const { theme } = useTheme();

  return (
    <section id="network" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <span className="text-[var(--accent)] font-bold text-sm tracking-[0.2em] uppercase">
            Our Network
          </span>
          <div className="section-line mx-auto mt-3 mb-5" />
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--fg)]">
            8 Strategic Hubs
          </h2>
          <p className="max-w-xl mx-auto text-[var(--muted)] mt-4">
            Every hub is connected, ensuring the fastest route for every shipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {HUBS.map((hub, i) => (
            <motion.div
              key={hub.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative p-5 sm:p-6 rounded-2xl border overflow-hidden transition-all duration-300 ${
                theme === "dark"
                  ? "bg-[var(--card)] border-[var(--card-border)] hover:border-[var(--accent)]/30"
                  : "bg-white border-gray-200 hover:border-[var(--accent)] shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Color accent */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: hub.color }} />

              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 rounded-full flex-shrink-0" style={{
                  backgroundColor: hub.color,
                  boxShadow: `0 0 12px ${hub.color}40`,
                }} />
                <h3 className="font-bold text-[var(--fg)]">{hub.name}</h3>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--muted)]">{hub.region}</span>
                <span className="flex items-center gap-1 text-green-500 font-medium">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  {hub.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Route chain */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-5 sm:p-6 rounded-2xl border ${
            theme === "dark" ? "bg-[var(--card)] border-[var(--card-border)]" : "bg-amber-50/50 border-amber-200/50"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
            {HUBS.map((hub, i) => (
              <div key={hub.name} className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent)]/15">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: hub.color }} />
                  <span className="text-xs font-semibold text-[var(--fg)]">{hub.name}</span>
                </div>
                {i < HUBS.length - 1 && (
                  <svg width="16" height="16" viewBox="0 0 16 16" className="text-[var(--accent)]/40 flex-shrink-0">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
