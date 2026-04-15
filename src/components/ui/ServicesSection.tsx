"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import OverlayCard from "./OverlayCard";

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Fleet Transport",
    desc: "Modern fleet across all 8 hubs with real-time GPS tracking.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "8-Hub Network",
    desc: "Strategic locations ensuring seamless connectivity.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "99.5% on-time rate with AI-optimized scheduling.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Secure Handling",
    desc: "End-to-end cargo security with real-time monitoring.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Live Tracking",
    desc: "Real-time 3D visualization of all fleet movements.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "24/7 Support",
    desc: "Dedicated support at every hub around the clock.",
  },
];

export default function ServicesSection() {
  const { theme } = useTheme();

  return (
    <section id="services" className="min-h-screen flex items-center px-6 py-24">
      <OverlayCard wide>
        <div className="text-center mb-10">
          <span className="text-yellow-500 font-bold text-sm tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-black mt-3 mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Our Services
          </h2>
          <p
            className={`max-w-xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Comprehensive transportation solutions powered by technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`group p-6 rounded-2xl border transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/5 border-white/5 hover:border-yellow-400/30 hover:bg-white/10"
                  : "bg-white/30 border-white/30 hover:border-yellow-400 hover:bg-white/50"
              }`}
            >
              <div
                className={`inline-flex p-2.5 rounded-xl mb-4 transition-colors group-hover:bg-yellow-400/10 ${
                  theme === "dark" ? "bg-white/5 text-yellow-400" : "bg-yellow-50 text-yellow-600"
                }`}
              >
                {service.icon}
              </div>
              <h3
                className={`text-base font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </OverlayCard>
    </section>
  );
}
