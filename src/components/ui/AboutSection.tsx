"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import OverlayCard from "./OverlayCard";

const STATS = [
  { value: "8", label: "Transport Hubs" },
  { value: "50+", label: "Fleet Vehicles" },
  { value: "99.5%", label: "On-Time Rate" },
  { value: "24/7", label: "Operations" },
];

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <OverlayCard wide>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-yellow-500 font-bold text-sm tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2
              className={`text-4xl sm:text-5xl font-black mt-3 mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Moving the World,{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                One Hub at a Time
              </span>
            </h2>
            <p
              className={`text-base mb-4 leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Lucky Golden Transport Services operates a sophisticated network of 8
              strategically positioned hubs, each serving as a critical node in our
              transportation ecosystem.
            </p>
            <p
              className={`text-base leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              As you scroll, you&apos;re riding along our fleet&apos;s route &mdash; watch the truck
              pass through each hub in our 3D world behind this page.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl border text-center transition-colors ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-yellow-400/30"
                    : "bg-white/40 border-white/50 hover:border-yellow-400"
                }`}
              >
                <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div
                  className={`text-xs font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </OverlayCard>
    </section>
  );
}
