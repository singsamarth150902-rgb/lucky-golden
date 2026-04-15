"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="relative py-12 px-6">
      <div
        className={`max-w-4xl mx-auto backdrop-blur-2xl rounded-3xl border p-8 text-center ${
          theme === "dark"
            ? "bg-gray-950/60 border-white/10 text-gray-400"
            : "bg-white/50 border-white/30 text-gray-500"
        }`}
      >
        <h3 className="text-lg font-extrabold mb-2">
          <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            LUCKY
          </span>{" "}
          <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
            GOLDEN
          </span>
        </h3>
        <p className="text-sm mb-4">
          Premium transportation connecting 8 hubs with speed and reliability.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
          {["Home", "About", "Services", "Hubs", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-yellow-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div
          className={`pt-4 border-t text-xs ${
            theme === "dark" ? "border-white/5" : "border-gray-200/50"
          }`}
        >
          &copy; {new Date().getFullYear()} Lucky Golden Transport Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
