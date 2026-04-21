"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/site/BrandMark";
import { contactDetails, navLinks } from "@/lib/lucky-golden-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b line-soft bg-white/85 backdrop-blur-md shadow-sm shadow-stone-900/5">
      <div className="hidden border-b border-white/10 bg-stone-900 text-sm text-amber-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p>Daily corridor dispatches, branch coordination, and 24/7 support.</p>
          <div className="flex items-center gap-5">
            <a href={contactDetails.emailHref} className="hover:text-white">
              {contactDetails.email}
            </a>
            <a href={contactDetails.phoneHref} className="hover:text-white">
              {contactDetails.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="min-w-0">
          <Link href="/" aria-label="Lucky Golden home">
            <BrandMark compact />
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "text-red-700"
                    : "text-stone-600 hover:text-red-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={contactDetails.phoneHref}
            className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/15 transition-colors hover:bg-red-700"
          >
            Call Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-[rgba(190,140,72,0.35)] p-2 text-stone-700 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t line-soft bg-white px-6 py-5 md:hidden">
          <nav className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-semibold text-stone-700 transition-colors hover:bg-amber-50 hover:text-red-600"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={contactDetails.phoneHref}
              className="mt-2 block rounded-2xl bg-red-600 px-4 py-3 text-center font-bold text-white"
            >
              Call {contactDetails.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
