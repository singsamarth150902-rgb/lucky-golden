"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import OverlayCard from "./OverlayCard";

export default function ContactSection() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-24">
      <OverlayCard>
        <div className="text-center mb-8">
          <span className="text-yellow-500 font-bold text-sm tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-black mt-3 mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Us
          </h2>
          <p
            className={`max-w-md mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            You&apos;ve reached the end of the route. Ready to ship?
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                className={`block text-sm font-medium mb-1.5 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 backdrop-blur-sm ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    : "bg-white/40 border-white/30 text-gray-900 placeholder:text-gray-400"
                }`}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium mb-1.5 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 backdrop-blur-sm ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    : "bg-white/40 border-white/30 text-gray-900 placeholder:text-gray-400"
                }`}
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-1.5 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your transport needs..."
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 backdrop-blur-sm ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  : "bg-white/40 border-white/30 text-gray-900 placeholder:text-gray-400"
              }`}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl font-bold text-gray-900 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/20"
          >
            Send Message
          </motion.button>
        </form>
      </OverlayCard>
    </section>
  );
}
