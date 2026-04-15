"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import ServicesSection from "@/components/ui/ServicesSection";
import HubsSection from "@/components/ui/HubsSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HubsSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
