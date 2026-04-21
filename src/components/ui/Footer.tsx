"use client";

import { useTheme } from "@/context/ThemeContext";

const SERVICES_LINKS = ["Road Transport", "Hub-to-Hub Express", "Dedicated Fleet", "Secure Logistics", "Live Tracking", "Warehousing"];
const QUICK_LINKS = ["Home", "About", "Services", "Network", "Contact"];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`pt-16 pb-8 px-6 border-t transition-colors duration-500 ${
      theme === "dark" ? "bg-[#08080d] border-[var(--card-border)]" : "bg-gray-900 border-gray-800 text-gray-300"
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-black text-sm">LG</span>
              </div>
              <div>
                <p className="text-sm font-extrabold">
                  <span className="text-amber-400">LUCKY</span>{" "}
                  <span className={theme === "dark" ? "text-white" : "text-gray-100"}>GOLDEN</span>
                </p>
              </div>
            </div>
            <p className={`text-sm leading-relaxed mb-4 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
              Premium transport services connecting 8 strategic hubs with speed,
              reliability, and 24/7 operations.
            </p>
            <div className="flex gap-3">
              {["M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z",
                "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
              ].map((d, i) => (
                <a key={i} href="#" className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors hover:bg-amber-500 hover:border-amber-500 hover:text-gray-900 ${
                  theme === "dark" ? "border-gray-700 text-gray-500" : "border-gray-700 text-gray-400"
                }`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-sm font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-100"}`}>Quick Links</h4>
            <div className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  className={`block text-sm hover:text-amber-400 transition-colors ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-sm font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-100"}`}>Services</h4>
            <div className="space-y-2.5">
              {SERVICES_LINKS.map((s) => (
                <a key={s} href="#services"
                  className={`block text-sm hover:text-amber-400 transition-colors ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-sm font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-100"}`}>Contact Info</h4>
            <div className={`space-y-3 text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
              <p className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Hub Alpha, Transport Nagar, City
              </p>
              <p className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                +91 9876 543 210
              </p>
              <p className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                info@luckygolden.com
              </p>
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t text-center text-xs ${
          theme === "dark" ? "border-gray-800 text-gray-600" : "border-gray-800 text-gray-500"
        }`}>
          &copy; {new Date().getFullYear()} Lucky Golden Transport Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
