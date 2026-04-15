"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import OverlayCard from "./OverlayCard";
import { HUBS } from "@/components/three/HubLocations";

export default function HubsSection() {
  const { theme } = useTheme();

  return (
    <section id="hubs" className="min-h-screen flex items-center px-6 py-24">
      <OverlayCard wide>
        <div className="text-center mb-10">
          <span className="text-yellow-500 font-bold text-sm tracking-[0.2em] uppercase">
            Our Network
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-black mt-3 mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            8 Strategic Hubs
          </h2>
          <p
            className={`max-w-xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Each hub is visible in the 3D world behind this page. As you scrolled here,
            the truck passed through several of them.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {HUBS.map((hub, i) => (
            <motion.div
              key={hub.id}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`relative p-5 rounded-2xl border text-center cursor-default transition-all duration-300 overflow-hidden ${
                theme === "dark"
                  ? "bg-white/5 border-white/5 hover:border-yellow-400/30"
                  : "bg-white/30 border-white/30 hover:border-yellow-400"
              }`}
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: hub.color }}
              />

              <div
                className="w-4 h-4 rounded-full mx-auto mb-3"
                style={{
                  backgroundColor: hub.color,
                  boxShadow: `0 0 12px ${hub.color}60`,
                }}
              />
              <h3
                className={`text-sm font-bold mb-1 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {hub.name}
              </h3>
              <p
                className={`text-xs ${
                  theme === "dark" ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Stop #{hub.id}
              </p>
            </motion.div>
          ))}
        </div>
      </OverlayCard>
    </section>
  );
}
