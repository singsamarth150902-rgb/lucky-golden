"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HUBS } from "@/components/three/HubLocations";
import { useTheme } from "@/context/ThemeContext";

interface HubPanelProps {
  activeHub: number;
  visitedHubs: Set<number>;
  onHubClick: (index: number) => void;
}

export default function HubPanel({ activeHub, visitedHubs, onHubClick }: HubPanelProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`absolute bottom-4 left-4 right-4 z-20 pointer-events-none`}
    >
      <div className="flex gap-2 overflow-x-auto pb-2 pointer-events-auto">
        {HUBS.map((hub, i) => {
          const isActive = activeHub === i;
          const isVisited = visitedHubs.has(i);

          return (
            <motion.button
              key={hub.id}
              onClick={() => onHubClick(i)}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex-shrink-0 px-4 py-3 rounded-xl border backdrop-blur-xl transition-all duration-300 ${
                isActive
                  ? "border-yellow-400 shadow-lg shadow-yellow-400/20"
                  : theme === "dark"
                  ? "border-white/10 hover:border-white/20"
                  : "border-gray-300 hover:border-gray-400"
              } ${
                theme === "dark" ? "bg-gray-900/80 text-white" : "bg-white/80 text-gray-900"
              }`}
            >
              {/* Color indicator */}
              <div
                className="w-3 h-3 rounded-full mb-1 mx-auto"
                style={{
                  backgroundColor: hub.color,
                  boxShadow: isActive ? `0 0 12px ${hub.color}` : "none",
                }}
              />
              <div className="text-xs font-bold whitespace-nowrap">{hub.name}</div>
              <div
                className={`text-[10px] mt-0.5 ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {isActive ? "Active" : isVisited ? "Visited" : "Waiting"}
              </div>

              {/* Active pulse ring */}
              {isActive && (
                <motion.div
                  className="absolute -inset-0.5 rounded-xl border-2 border-yellow-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
