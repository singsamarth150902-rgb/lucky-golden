"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  visible: boolean;
}

export default function LoadingScreen({ visible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-950"
        >
          {/* Animated truck silhouette */}
          <motion.div
            animate={{ x: ["-40vw", "40vw"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="mb-10"
          >
            <svg width="64" height="36" viewBox="0 0 64 36" fill="none">
              {/* Cargo */}
              <rect x="0" y="4" width="36" height="22" rx="2" fill="#f59e0b" />
              <rect x="2" y="12" width="32" height="2" rx="1" fill="#d97706" />
              {/* Cab */}
              <rect x="36" y="8" width="18" height="18" rx="2" fill="#fbbf24" />
              {/* Windshield */}
              <rect x="46" y="11" width="6" height="8" rx="1" fill="#7dd3fc" opacity="0.7" />
              {/* Wheels */}
              <circle cx="12" cy="30" r="5" fill="#1f2937" />
              <circle cx="12" cy="30" r="2" fill="#6b7280" />
              <circle cx="30" cy="30" r="5" fill="#1f2937" />
              <circle cx="30" cy="30" r="2" fill="#6b7280" />
              <circle cx="46" cy="30" r="5" fill="#1f2937" />
              <circle cx="46" cy="30" r="2" fill="#6b7280" />
              {/* Headlight */}
              <rect x="54" y="18" width="3" height="3" rx="1" fill="#fef3c7" />
            </svg>
          </motion.div>

          {/* Road line under truck */}
          <div className="w-64 mb-8">
            <div className="h-px bg-gray-700 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            {/* Dashes */}
            <div className="flex justify-between mt-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-0.5 bg-yellow-400/40 rounded"
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.07 }}
                />
              ))}
            </div>
          </div>

          {/* Brand */}
          <h2 className="text-2xl font-black tracking-tight mb-2">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              LUCKY
            </span>{" "}
            <span className="text-white">GOLDEN</span>
          </h2>

          <p className="text-gray-500 text-sm animate-pulse">Loading 3D world...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
