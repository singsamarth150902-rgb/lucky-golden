"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function ContactSection() {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      className={`py-24 sm:py-32 px-6 transition-colors duration-500 ${
        theme === "dark" ? "bg-[#08080d]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 font-bold text-sm tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4 text-[var(--foreground)]">
            Contact Us
          </h2>
          <p className="max-w-md mx-auto text-lg text-[var(--muted)]">
            Ready to ship? Get a quote or learn more about our hub network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`p-8 sm:p-10 rounded-2xl border transition-colors ${
            theme === "dark"
              ? "bg-[var(--card)] border-[var(--card-border)]"
              : "bg-white border-gray-200 shadow-lg"
          }`}
        >
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 ${
                    theme === "dark"
                      ? "bg-white/5 border-[var(--card-border)] text-white placeholder:text-gray-600"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 ${
                    theme === "dark"
                      ? "bg-white/5 border-[var(--card-border)] text-white placeholder:text-gray-600"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                Select Origin &amp; Destination Hubs
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"].map(
                  (hub) => (
                    <label
                      key={hub}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer text-sm transition-colors ${
                        theme === "dark"
                          ? "border-[var(--card-border)] hover:border-amber-400/30 text-gray-300"
                          : "border-gray-200 hover:border-amber-400 text-gray-700"
                      }`}
                    >
                      <input type="checkbox" className="accent-amber-400 rounded" />
                      {hub}
                    </label>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your transport needs..."
                className={`w-full px-4 py-3 rounded-xl border text-sm resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 ${
                  theme === "dark"
                    ? "bg-white/5 border-[var(--card-border)] text-white placeholder:text-gray-600"
                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                }`}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl font-bold text-gray-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-md shadow-amber-400/20"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
