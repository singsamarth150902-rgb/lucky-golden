"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

interface ScrollContextType {
  progress: number; // 0 to 1
}

const ScrollContext = createContext<ScrollContextType>({ progress: 0 });

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setProgress(Math.min(Math.max(scrollTop / docHeight, 0), 1));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ progress }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollProgress() {
  return useContext(ScrollContext).progress;
}
