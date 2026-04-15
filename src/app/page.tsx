"use client";

import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { ScrollProvider, useScrollProgress } from "@/context/ScrollContext";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import ServicesSection from "@/components/ui/ServicesSection";
import HubsSection from "@/components/ui/HubsSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import LoadingScreen from "@/components/ui/LoadingScreen";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

function ThreeBackground({ onReady }: { onReady: () => void }) {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed inset-0 z-0">
      <Scene scrollProgress={scrollProgress} onReady={onReady} />
    </div>
  );
}

function PageContent() {
  const [sceneReady, setSceneReady] = useState(false);

  const handleReady = useCallback(() => {
    // Small delay to let first few frames render smoothly
    setTimeout(() => setSceneReady(true), 300);
  }, []);

  return (
    <>
      {/* Loading screen — fades out once 3D is painted */}
      <LoadingScreen visible={!sceneReady} />

      {/* Fixed 3D background */}
      <ThreeBackground onReady={handleReady} />

      {/* Fixed UI elements */}
      <Navbar />
      <ScrollProgressBar />

      {/* Scrollable content overlay */}
      <div className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ServicesSection />
        <HubsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <PageContent />
      </ScrollProvider>
    </ThemeProvider>
  );
}
