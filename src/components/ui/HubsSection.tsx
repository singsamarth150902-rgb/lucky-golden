"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const HUBS = [
  { name: "Hub Alpha", color: "#f59e0b", region: "North Zone" },
  { name: "Hub Bravo", color: "#ef4444", region: "East Zone" },
  { name: "Hub Charlie", color: "#3b82f6", region: "West Zone" },
  { name: "Hub Delta", color: "#8b5cf6", region: "Central" },
  { name: "Hub Echo", color: "#10b981", region: "South Zone" },
  { name: "Hub Foxtrot", color: "#ec4899", region: "South-East" },
  { name: "Hub Golf", color: "#06b6d4", region: "North-West" },
  { name: "Hub Hotel", color: "#f97316", region: "North-East" },
];

// Lines connecting hubs visually
const CONNECTIONS = [
  [0, 3], [1, 3], [2, 3], [3, 4], [4, 5], [5, 7], [6, 0], [6, 2], [7, 1],
];

export default function HubsSection() {
  const { theme } = useTheme();

  return (
    <section id="network" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 font-bold text-sm tracking-[0.2em] uppercase">
            Our Network
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4 text-[var(--foreground)]">
            8 Strategic Hubs
          </h2>
          <p className="max-w-xl mx-auto text-[var(--muted)] text-lg">
            A connected network ensuring fast, reliable transport across every zone.
          </p>
        </motion.div>

        {/* Hub network visual */}
        <div className="relative mb-14">
          {/* Connection lines (SVG overlay) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
            viewBox="0 0 800 200"
            preserveAspectRatio="xMidYMid meet"
          >
            {CONNECTIONS.map(([a, b], i) => {
              const ax = 50 + (a % 4) * 200 + 75;
              const ay = Math.floor(a / 4) * 100 + 50;
              const bx = 50 + (b % 4) * 200 + 75;
              const by = Math.floor(b / 4) * 100 + 50;
              return (
                <motion.line
                  key={`conn-${i}`}
                  x1={ax} y1={ay} x2={bx} y2={by}
                  stroke={theme === "dark" ? "#fbbf2420" : "#f59e0b20"}
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Hub cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
            {HUBS.map((hub, i) => (
              <motion.div
                key={hub.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`relative p-5 sm:p-6 rounded-2xl border text-center overflow-hidden transition-colors ${
                  theme === "dark"
                    ? "bg-[var(--card)] border-[var(--card-border)] hover:border-amber-400/30"
                    : "bg-white border-gray-200 hover:border-amber-400 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Top color bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: hub.color }}
                />

                {/* Dot */}
                <div
                  className="w-5 h-5 rounded-full mx-auto mb-3 transition-shadow"
                  style={{
                    backgroundColor: hub.color,
                    boxShadow: `0 0 16px ${hub.color}40, 0 0 0 4px ${hub.color}15`,
                  }}
                />
                <h3 className="text-sm font-bold text-[var(--foreground)] mb-1">
                  {hub.name}
                </h3>
                <p className="text-xs text-[var(--muted)]">{hub.region}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Route summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex flex-wrap items-center justify-center gap-3 p-6 rounded-2xl border ${
            theme === "dark"
              ? "bg-[var(--card)] border-[var(--card-border)]"
              : "bg-amber-50 border-amber-200"
          }`}
        >
          {HUBS.map((hub, i) => (
            <div key={hub.name} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: hub.color }}
              />
              <span className="text-sm font-medium text-[var(--foreground)]">{hub.name}</span>
              {i < HUBS.length - 1 && (
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-[var(--muted)]">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
