"use client";

import { motion } from "framer-motion";
import TruckSVG from "./TruckSVG";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-16 sm:py-20 px-6">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Driving truck */}
      <div className="absolute bottom-4 left-0 opacity-15">
        <TruckSVG className="anim-drive-rev w-24" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
        >
          Ready to Ship with Lucky Golden?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-800/80 text-lg mb-8 max-w-xl mx-auto"
        >
          Get a quote in minutes. Our team is standing by across all 8 hubs
          to handle your logistics needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact"
            className="px-8 py-3.5 rounded-lg font-bold bg-gray-900 text-white hover:bg-gray-800 transition-colors shadow-lg">
            Get a Free Quote
          </a>
          <a href="tel:+919876543210"
            className="px-8 py-3.5 rounded-lg font-bold border-2 border-gray-900/20 text-gray-900 hover:bg-gray-900/5 transition-colors">
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
