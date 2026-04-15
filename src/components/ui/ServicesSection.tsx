"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const SERVICES = [
  {
    icon: "M1 3h15v13H1zM16 8h4l3 3v5h-7zM5.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    title: "Fleet Transport",
    desc: "Modern fleet operating across all 8 hubs with real-time GPS tracking and optimized routing for maximum efficiency.",
  },
  {
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a3 3 0 100-6 3 3 0 000 6z",
    title: "8-Hub Network",
    desc: "Strategically located hubs ensuring complete coverage and seamless connectivity between all major transport points.",
  },
  {
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2",
    title: "On-Time Delivery",
    desc: "99.5% on-time delivery rate powered by optimized scheduling and dedicated route management across every hub.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Secure Handling",
    desc: "End-to-end cargo security with real-time monitoring, sealed containers, and comprehensive insurance coverage.",
  },
  {
    icon: "M22 12h-4l-3 9-6-18-3 9H2",
    title: "Live Tracking",
    desc: "Real-time visibility of all fleet movements. Track any shipment from pickup to delivery with pinpoint accuracy.",
  },
  {
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
    title: "24/7 Support",
    desc: "Dedicated support team at every hub around the clock. Enterprise account managers for tailored logistics solutions.",
  },
];

export default function ServicesSection() {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className={`py-24 sm:py-32 px-6 transition-colors duration-500 ${
        theme === "dark" ? "bg-[#08080d]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 font-bold text-sm tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4 text-[var(--foreground)]">
            Our Services
          </h2>
          <p className="max-w-xl mx-auto text-[var(--muted)] text-lg">
            Comprehensive transportation solutions connecting all 8 hubs
            with reliability, speed, and cutting-edge logistics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative p-7 rounded-2xl border transition-all duration-300 ${
                theme === "dark"
                  ? "bg-[var(--card)] border-[var(--card-border)] hover:border-amber-400/25"
                  : "bg-white border-gray-200 hover:border-amber-400 shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div
                  className={`inline-flex p-3 rounded-xl mb-5 transition-colors duration-300 group-hover:bg-amber-400/10 ${
                    theme === "dark" ? "bg-white/5 text-amber-400" : "bg-amber-50 text-amber-600"
                  }`}
                >
                  <svg
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d={service.icon} />
                  </svg>
                </div>

                <h3 className="text-lg font-bold mb-2 text-[var(--foreground)]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
