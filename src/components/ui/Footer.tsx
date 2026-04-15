"use client";

import { useTheme } from "@/context/ThemeContext";

const HUBS = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"];
const LINKS = ["Home", "About", "Services", "Network", "Contact"];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-14 px-6 border-t transition-colors duration-500 ${
        theme === "dark" ? "border-[var(--card-border)]" : "border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-black text-xs">LG</span>
              </div>
              <div>
                <p className="text-sm font-extrabold">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                    LUCKY
                  </span>{" "}
                  <span className="text-[var(--foreground)]">GOLDEN</span>
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Premium transport connecting 8 hubs with speed, reliability, and
              round-the-clock operations.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-[var(--foreground)] mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-[var(--muted)] hover:text-amber-500 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Hubs */}
          <div>
            <h4 className="text-sm font-bold text-[var(--foreground)] mb-4">
              Our Hubs
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {HUBS.map((hub) => (
                <span key={hub} className="text-sm text-[var(--muted)]">
                  Hub {hub}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`pt-8 border-t text-center text-sm text-[var(--muted)] ${
            theme === "dark" ? "border-[var(--card-border)]" : "border-gray-200"
          }`}
        >
          &copy; {new Date().getFullYear()} Lucky Golden Transport Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
