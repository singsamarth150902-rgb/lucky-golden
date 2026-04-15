"use client";

import { useScrollProgress } from "@/context/ScrollContext";
import { HUBS } from "@/components/three/HubLocations";
import { useTheme } from "@/context/ThemeContext";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();
  const { theme } = useTheme();

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-0.5">
      {/* Vertical progress track */}
      <div
        className={`relative w-1 rounded-full overflow-hidden ${
          theme === "dark" ? "bg-white/10" : "bg-gray-300/40"
        }`}
        style={{ height: "200px" }}
      >
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full transition-all duration-150"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* Hub dots */}
      <div className="absolute inset-0 flex flex-col justify-between py-0.5">
        {HUBS.map((hub) => {
          const passed = progress >= hub.t;
          return (
            <div key={hub.id} className="flex items-center justify-end gap-2">
              <div
                className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                  passed
                    ? "border-yellow-400 scale-110"
                    : theme === "dark"
                    ? "border-white/20"
                    : "border-gray-400/40"
                }`}
                style={{
                  backgroundColor: passed ? hub.color : "transparent",
                  boxShadow: passed ? `0 0 8px ${hub.color}80` : "none",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
