"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Mesh } from "three";
import { HubData, getHubPosition } from "./HubLocations";
import { useTheme } from "@/context/ThemeContext";

interface HubMarkerProps {
  hub: HubData;
  isNear: boolean;
}

export default function HubMarker({ hub, isNear }: HubMarkerProps) {
  const ringRef = useRef<Mesh>(null);
  const pos = getHubPosition(hub);
  const { theme } = useTheme();

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group position={pos}>
      {/* Base platform */}
      <mesh position={[0, 0.08, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.4, 0.2, 8]} />
        <meshStandardMaterial
          color={hub.color}
          roughness={0.3}
          metalness={0.5}
          emissive={hub.color}
          emissiveIntensity={isNear ? 0.5 : 0.15}
        />
      </mesh>

      {/* Building */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[1, 1.2, 1]} />
        <meshStandardMaterial
          color={theme === "dark" ? "#e2e8f0" : "#ffffff"}
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.65, 0]} castShadow>
        <coneGeometry args={[0.85, 0.6, 4]} />
        <meshStandardMaterial color={hub.color} roughness={0.3} metalness={0.4} />
      </mesh>

      {/* Flag pole */}
      <mesh position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8, 6]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} />
      </mesh>
      <mesh position={[0.15, 2.55, 0]}>
        <boxGeometry args={[0.3, 0.15, 0.02]} />
        <meshStandardMaterial color={hub.color} emissive={hub.color} emissiveIntensity={0.3} />
      </mesh>

      {/* Glow ring when near */}
      {isNear && (
        <mesh ref={ringRef} position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.06, 8, 32]} />
          <meshStandardMaterial
            color={hub.color}
            emissive={hub.color}
            emissiveIntensity={1}
            transparent
            opacity={0.8}
          />
        </mesh>
      )}

      {isNear && (
        <pointLight position={[0, 2, 0]} color={hub.color} intensity={4} distance={6} />
      )}

      {/* Label */}
      <Html position={[0, 3, 0]} center distanceFactor={20} style={{ pointerEvents: "none" }}>
        <div
          className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap
            backdrop-blur-md border transition-all duration-500
            ${isNear ? "scale-110 border-yellow-400 shadow-lg shadow-yellow-400/30" : "border-white/20 opacity-70"}
            ${theme === "dark" ? "bg-gray-900/80 text-white" : "bg-white/80 text-gray-900"}
          `}
        >
          <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: hub.color }} />
          {hub.name}
        </div>
      </Html>
    </group>
  );
}
