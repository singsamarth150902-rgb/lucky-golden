"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Mesh, Group, BackSide } from "three";
import { useTheme } from "@/context/ThemeContext";

function Sun() {
  const groupRef = useRef<Group>(null);
  const glowRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (glowRef.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
      glowRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={groupRef} position={[40, 50, -60]}>
      {/* Sun core */}
      <mesh>
        <sphereGeometry args={[4, 24, 24]} />
        <meshBasicMaterial color="#fef08a" />
      </mesh>
      {/* Inner glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[5.5, 24, 24]} />
        <meshBasicMaterial color="#fde047" transparent opacity={0.35} />
      </mesh>
      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[8, 24, 24]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.12} />
      </mesh>
      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <mesh
          key={`ray-${angle}`}
          rotation={[0, 0, (angle * Math.PI) / 180]}
          position={[0, 0, 0]}
        >
          <planeGeometry args={[0.6, 14]} />
          <meshBasicMaterial color="#fde047" transparent opacity={0.08} />
        </mesh>
      ))}
      {/* Sunlight */}
      <pointLight color="#fef3c7" intensity={80} distance={200} />
    </group>
  );
}

function Moon() {
  const moonRef = useRef<Group>(null);

  useFrame((state) => {
    if (moonRef.current) {
      moonRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={moonRef} position={[-30, 45, -70]}>
      {/* Moon body */}
      <mesh>
        <sphereGeometry args={[3, 24, 24]} />
        <meshStandardMaterial
          color="#e2e8f0"
          roughness={0.8}
          emissive="#cbd5e1"
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Craters */}
      {[
        [0.8, 1.2, 2.2, 0.5],
        [-1.0, 0.5, 2.5, 0.35],
        [0.2, -0.8, 2.6, 0.4],
        [-0.5, 1.8, 1.8, 0.3],
        [1.2, -0.3, 2.3, 0.25],
      ].map((c, i) => (
        <mesh key={`crater-${i}`} position={[c[0], c[1], c[2]]}>
          <sphereGeometry args={[c[3], 8, 8]} />
          <meshStandardMaterial
            color="#94a3b8"
            roughness={0.9}
            emissive="#94a3b8"
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
      {/* Moon glow */}
      <mesh>
        <sphereGeometry args={[4.5, 24, 24]} />
        <meshBasicMaterial color="#cbd5e1" transparent opacity={0.08} />
      </mesh>
      {/* Moonlight */}
      <pointLight color="#e2e8f0" intensity={15} distance={150} />
    </group>
  );
}

function Clouds() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.02) * 5;
    }
  });

  const cloudPositions: [number, number, number, number][] = [
    [-20, 30, -40, 2.2],
    [15, 35, -55, 2.5],
    [40, 28, -30, 2],
    [-35, 32, -60, 2.2],
    [0, 38, -70, 3],
  ];

  return (
    <group ref={groupRef}>
      {cloudPositions.map(([x, y, z, s], i) => (
        <group key={`cloud-${i}`} position={[x, y, z]} scale={s}>
          <mesh>
            <sphereGeometry args={[1.2, 8, 8]} />
            <meshStandardMaterial color="#f8fafc" roughness={1} transparent opacity={0.9} />
          </mesh>
          <mesh position={[1, -0.2, 0]}>
            <sphereGeometry args={[0.9, 8, 8]} />
            <meshStandardMaterial color="#f1f5f9" roughness={1} transparent opacity={0.9} />
          </mesh>
          <mesh position={[-0.8, -0.1, 0.3]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshStandardMaterial color="#f8fafc" roughness={1} transparent opacity={0.9} />
          </mesh>
          <mesh position={[0.3, 0.3, -0.3]}>
            <sphereGeometry args={[0.7, 8, 8]} />
            <meshStandardMaterial color="#ffffff" roughness={1} transparent opacity={0.85} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function Sky() {
  const { theme } = useTheme();

  return (
    <group>
      {/* Sky dome — reduced segments */}
      <mesh>
        <sphereGeometry args={[120, 16, 16]} />
        <meshBasicMaterial
          color={theme === "dark" ? "#0c1222" : "#7dd3fc"}
          side={BackSide}
        />
      </mesh>

      {/* Horizon gradient ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <ringGeometry args={[60, 120, 32]} />
        <meshBasicMaterial
          color={theme === "dark" ? "#1e293b" : "#bae6fd"}
          transparent
          opacity={0.6}
        />
      </mesh>

      {theme === "dark" ? (
        <>
          <Moon />
          <Stars
            radius={100}
            depth={50}
            count={2000}
            factor={3}
            fade
            speed={0.5}
          />
        </>
      ) : (
        <>
          <Sun />
          <Clouds />
        </>
      )}
    </group>
  );
}
