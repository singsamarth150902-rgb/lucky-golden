"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Network", href: "#network" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className={`hidden md:block text-xs py-2 transition-colors ${theme === "dark" ? "bg-[#08080d] text-gray-500" : "bg-gray-100 text-gray-500"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between">
          <span>24/7 Support &bull; 8 Hubs Nationwide</span>
          <span>info@luckygolden.com &bull; +91 9876 543 210</span>
        </div>
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`sticky top-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[var(--overlay)] backdrop-blur-xl shadow-md"
            : "bg-transparent"
        } border-b border-[var(--card-border)]/50`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg rotate-3 group-hover:rotate-6 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-black text-base">LG</span>
              </div>
            </div>
            <div>
              <p className="text-base font-extrabold tracking-tight leading-none">
                <span className="text-[var(--accent-light)]">LUCKY</span>{" "}
                <span className="text-[var(--fg)]">GOLDEN</span>
              </p>
              <p className="text-[9px] tracking-[0.15em] uppercase text-[var(--muted)]">
                Transport Services
              </p>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href}
                className="px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact"
              className="ml-4 px-5 py-2.5 text-sm font-bold text-gray-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all shadow-sm">
              Get a Quote
            </a>
            <div className="ml-3 pl-3 border-l border-[var(--card-border)]">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} className="p-2 text-[var(--fg)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
              className="lg:hidden overflow-hidden border-t border-[var(--card-border)] bg-[var(--bg)]">
              <div className="px-6 py-4 space-y-1">
                {LINKS.map((l) => (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-bg)] transition-colors">
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)}
                  className="block mt-2 px-4 py-3 rounded-lg text-sm font-bold text-center text-gray-900 bg-gradient-to-r from-amber-400 to-amber-500">
                  Get a Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
