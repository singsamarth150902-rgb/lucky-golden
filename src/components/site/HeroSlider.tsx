"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  startTransition,
  useEffect,
  useEffectEvent,
  useMemo,
  useState,
} from "react";
import { heroSlides, quickStats } from "@/lib/lucky-golden-data";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const activeSlide = useMemo(() => heroSlides[index], [index]);

  function updateIndex(direction: number) {
    startTransition(() => {
      setIndex((current) => {
        const next = current + direction;

        if (next < 0) {
          return heroSlides.length - 1;
        }

        if (next >= heroSlides.length) {
          return 0;
        }

        return next;
      });
    });
  }

  const shiftSlide = useEffectEvent((direction: number) => {
    updateIndex(direction);
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => shiftSlide(1), 4500);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden pt-16 md:pt-[4.5rem]">
      <div className="relative min-h-[70vh] bg-stone-900 md:min-h-[82vh] lg:min-h-screen">
        {/* Persistent dark fallback so the page background never bleeds through during transitions */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />

        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${activeSlide.backgroundClassName}`}
          >
            <div className="absolute inset-0 bg-black/35" />
            <div className="hero-grid absolute inset-0 opacity-25" />
          </motion.div>
        </AnimatePresence>

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 py-20 text-center md:min-h-[82vh] lg:min-h-screen">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-200">
            {activeSlide.eyebrow}
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {activeSlide.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-amber-50 sm:text-lg md:text-xl">
            {activeSlide.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="rounded-full bg-white px-8 py-3.5 font-bold text-red-700 shadow-xl shadow-black/15 transition-transform hover:-translate-y-0.5"
            >
              Explore Routes
            </Link>
            <Link
              href="/offices"
              className="rounded-full border border-white/50 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10"
            >
              View Offices
            </Link>
          </div>

          <div className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="font-semibold">{activeSlide.badge}</span>
            <span className="text-white/60">|</span>
            <span className="text-amber-100">{activeSlide.statLabel}</span>
            <span className="font-black text-amber-300">{activeSlide.statValue}</span>
          </div>
        </div>

        <div className="absolute inset-x-0 top-1/2 z-10 hidden -translate-y-1/2 justify-between px-6 md:flex">
          <button
            type="button"
            onClick={() => updateIndex(-1)}
            className="rounded-full bg-black/40 p-3 text-white shadow-lg transition-colors hover:bg-black/60"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => updateIndex(1)}
            className="rounded-full bg-black/40 p-3 text-white shadow-lg transition-colors hover:bg-black/60"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-10 z-10 flex justify-center gap-3">
          {heroSlides.map((slide, slideIndex) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setIndex(slideIndex)}
              className={`h-3 rounded-full transition-all ${
                slideIndex === index ? "w-10 bg-amber-300" : "w-3 bg-white/50"
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-12 grid max-w-6xl gap-4 px-6 pb-6 md:grid-cols-4">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="surface-card rounded-3xl px-6 py-5 text-center shadow-lg shadow-stone-900/5"
          >
            <p className="text-3xl font-black text-red-700">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
