"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HUBS } from "@/components/three/HubLocations";
import { useTheme } from "@/context/ThemeContext";

interface StatusBarProps {
  activeHub: number;
  visitedHubs: Set<number>;
}

export default function StatusBar({ activeHub, visitedHubs }: StatusBarProps) {
  const { theme } = useTheme();
  const progress = (visitedHubs.size / HUBS.length) * 100;

  return (
    <div
      className={`absolute top-4 left-4 z-20 p-4 rounded-2xl backdrop-blur-xl border transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900/80 border-white/10 text-white"
          : "bg-white/80 border-gray-200 text-gray-900"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-sm font-bold tracking-wide">LIVE TRACKING</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeHub}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-3"
        >
          <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            Current Destination
          </p>
          <p className="text-lg font-bold flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: HUBS[activeHub]?.color || "#f59e0b" }}
            />
            {HUBS[activeHub]?.name || "En Route"}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
            Route Progress
          </span>
          <span className="font-bold text-yellow-500">
            {visitedHubs.size}/{HUBS.length}
          </span>
        </div>
        <div
          className={`h-2 rounded-full overflow-hidden ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
