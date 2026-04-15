"use client";

import { Suspense, useMemo, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Preload } from "@react-three/drei";
import Roads from "./Roads";
import HubMarker from "./HubMarker";
import Truck from "./Truck";
import ChaseCamera from "./ChaseCamera";
import Environment3D from "./Environment3D";
import Sky from "./Sky";
import { HUBS } from "./HubLocations";
import { useTheme } from "@/context/ThemeContext";

interface SceneProps {
  scrollProgress: number;
  onReady?: () => void;
}

// Fires onReady once the GL context has rendered its first frame
function ReadyNotifier({ onReady }: { onReady?: () => void }) {
  const { gl } = useThree();

  useEffect(() => {
    // Wait a tick so the first paint has flushed
    const id = requestAnimationFrame(() => {
      onReady?.();
    });
    return () => cancelAnimationFrame(id);
  }, [gl, onReady]);

  return null;
}

function SceneContent({ scrollProgress, onReady }: SceneProps) {
  const { theme } = useTheme();

  const nearestHubIdx = useMemo(() => {
    let closest = 0;
    let minDist = Infinity;
    HUBS.forEach((hub, i) => {
      const dist = Math.abs(hub.t - scrollProgress);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    return closest;
  }, [scrollProgress]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 14, 20]} fov={60} near={0.1} far={300} />
      <ChaseCamera scrollProgress={scrollProgress} />
      <ReadyNotifier onReady={onReady} />

      {/* Lighting — simplified */}
      <ambientLight intensity={theme === "dark" ? 0.25 : 0.55} />
      <directionalLight
        position={[20, 35, 10]}
        intensity={theme === "dark" ? 0.5 : 1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={80}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />
      <hemisphereLight
        args={[
          theme === "dark" ? "#1e3a5f" : "#87ceeb",
          theme === "dark" ? "#0a0a1a" : "#7c9e4e",
          theme === "dark" ? 0.3 : 0.5,
        ]}
      />

      <Sky />

      <fog
        attach="fog"
        args={[theme === "dark" ? "#0c1222" : "#b0d4f1", 40, 130]}
      />

      <Roads />

      {HUBS.map((hub, i) => (
        <HubMarker
          key={hub.id}
          hub={hub}
          isNear={i === nearestHubIdx && Math.abs(hub.t - scrollProgress) < 0.05}
        />
      ))}

      <Truck scrollProgress={scrollProgress} />
      <Environment3D />

      <Preload all />
    </>
  );
}

export default function Scene({ scrollProgress, onReady }: SceneProps) {
  const { theme } = useTheme();

  return (
    <Canvas
      shadows
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      dpr={[1, 1.5]}
      frameloop="always"
      performance={{ min: 0.5 }}
      style={{ background: theme === "dark" ? "#0c1222" : "#87ceeb" }}
    >
      <Suspense fallback={null}>
        <SceneContent scrollProgress={scrollProgress} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}
