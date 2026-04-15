"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const STATS = [
  { value: "8", label: "Transport Hubs", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" },
  { value: "50+", label: "Fleet Vehicles", icon: "M1 3h15v13H1zM16 8h4l3 3v5h-7z" },
  { value: "99.5%", label: "On-Time Rate", icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2" },
  { value: "24/7", label: "Operations", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
];

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-500 font-bold text-sm tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-6 text-[var(--foreground)]">
              Moving the World,{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                One Hub at a Time
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-5">
              Lucky Golden Transport Services operates a sophisticated network
              of 8 strategically positioned hubs, each serving as a critical
              node in our transportation ecosystem.
            </p>
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
              Our fleet navigates optimized routes between these hubs,
              ensuring your cargo arrives safely and on time, every time.
              From local deliveries to cross-hub logistics, we&apos;ve got you covered.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:text-amber-400 transition-colors group"
            >
              Learn more about our network
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="currentColor"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </a>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`p-6 sm:p-8 rounded-2xl border text-center transition-colors ${
                  theme === "dark"
                    ? "bg-[var(--card)] border-[var(--card-border)] hover:border-amber-400/30"
                    : "bg-white border-gray-200 hover:border-amber-400 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--muted)] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
