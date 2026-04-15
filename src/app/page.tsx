"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import StatsSection from "@/components/ui/StatsSection";
import AboutSection from "@/components/ui/AboutSection";
import ServicesSection from "@/components/ui/ServicesSection";
import CTABanner from "@/components/ui/CTABanner";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import HubsSection from "@/components/ui/HubsSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <CTABanner />
        <WhyChooseUs />
        <HubsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
