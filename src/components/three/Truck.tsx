"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3, Quaternion, Euler } from "three";
import { ROAD_CURVE } from "./HubLocations";

interface TruckProps {
  scrollProgress: number;
}

const _tangent = new Vector3();
const _up = new Vector3(0, 1, 0);
const _right = new Vector3();
const _quat = new Quaternion();

export default function Truck({ scrollProgress }: TruckProps) {
  const groupRef = useRef<Group>(null);
  const wheelRefs = useRef<Group[]>([]);
  const smoothY = useRef(0);
  const smoothPitch = useRef(0);
  const smoothYaw = useRef(0);

  useFrame(() => {
    if (!groupRef.current) return;

    const t = Math.min(Math.max(scrollProgress, 0.002), 0.998);
    const pos = ROAD_CURVE.getPointAt(t);
    const tangent = ROAD_CURVE.getTangentAt(t);

    // Smooth Y position to prevent jitter
    smoothY.current += (pos.y - smoothY.current) * 0.12;

    // Position truck on road with smoothed Y
    groupRef.current.position.set(pos.x, smoothY.current + 0.35, pos.z);

    // Yaw — direction along road (smooth)
    const targetYaw = Math.atan2(tangent.x, tangent.z);
    // Handle wrapping
    let yawDiff = targetYaw - smoothYaw.current;
    if (yawDiff > Math.PI) yawDiff -= Math.PI * 2;
    if (yawDiff < -Math.PI) yawDiff += Math.PI * 2;
    smoothYaw.current += yawDiff * 0.1;

    // Pitch — tilt on slopes
    const targetPitch = -Math.asin(Math.min(Math.max(tangent.y, -0.5), 0.5));
    smoothPitch.current += (targetPitch - smoothPitch.current) * 0.08;

    groupRef.current.rotation.set(smoothPitch.current, smoothYaw.current, 0, "YXZ");

    // Spin wheels
    const speed = Math.abs(scrollProgress) * 0.3 + 0.05;
    wheelRefs.current.forEach((wheel) => {
      if (wheel) wheel.rotation.x -= speed;
    });
  });

  return (
    <group ref={groupRef}>
      {/* === Cargo container === */}
      <mesh position={[0, 0.3, -0.25]} castShadow>
        <boxGeometry args={[0.7, 0.55, 1.2]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.5} />
      </mesh>
      {/* Cargo stripe */}
      <mesh position={[0, 0.3, -0.25]}>
        <boxGeometry args={[0.71, 0.08, 1.21]} />
        <meshStandardMaterial color="#d97706" roughness={0.4} />
      </mesh>
      {/* "LG" logo area on cargo sides */}
      {[-1, 1].map((side) => (
        <mesh key={`logo-${side}`} position={[0.351 * side, 0.35, -0.25]}>
          <boxGeometry args={[0.01, 0.2, 0.4]} />
          <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.2} />
        </mesh>
      ))}

      {/* === Cab === */}
      <mesh position={[0, 0.25, 0.55]} castShadow>
        <boxGeometry args={[0.65, 0.45, 0.45]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.3} metalness={0.4} />
      </mesh>
      {/* Cab roof */}
      <mesh position={[0, 0.52, 0.55]} castShadow>
        <boxGeometry args={[0.66, 0.06, 0.46]} />
        <meshStandardMaterial color="#eab308" roughness={0.4} />
      </mesh>

      {/* Windshield */}
      <mesh position={[0, 0.35, 0.78]}>
        <boxGeometry args={[0.5, 0.2, 0.02]} />
        <meshStandardMaterial color="#bfdbfe" roughness={0.05} metalness={0.9} transparent opacity={0.6} />
      </mesh>
      {/* Side windows */}
      {[-1, 1].map((side) => (
        <mesh key={`sw-${side}`} position={[0.33 * side, 0.35, 0.55]}>
          <boxGeometry args={[0.02, 0.18, 0.3]} />
          <meshStandardMaterial color="#bfdbfe" roughness={0.05} metalness={0.9} transparent opacity={0.5} />
        </mesh>
      ))}

      {/* Front bumper */}
      <mesh position={[0, 0.08, 0.8]}>
        <boxGeometry args={[0.7, 0.08, 0.06]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Rear bumper */}
      <mesh position={[0, 0.08, -0.86]}>
        <boxGeometry args={[0.7, 0.06, 0.04]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* === Wheels (6 wheels for truck) === */}
      {[
        [-0.35, 0, 0.45],
        [0.35, 0, 0.45],
        [-0.35, 0, -0.35],
        [0.35, 0, -0.35],
        [-0.35, 0, -0.65],
        [0.35, 0, -0.65],
      ].map((pos, i) => (
        <group
          key={`wheel-${i}`}
          ref={(el) => { if (el) wheelRefs.current[i] = el; }}
          position={pos as [number, number, number]}
        >
          {/* Tire */}
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.12, 0.12, 0.1, 12]} />
            <meshStandardMaterial color="#1f2937" roughness={0.7} />
          </mesh>
          {/* Hub */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.05, 0.05, 0.11, 8]} />
            <meshStandardMaterial color="#9ca3af" metalness={0.8} />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      {[-0.2, 0.2].map((x) => (
        <group key={`hl-${x}`}>
          <mesh position={[x, 0.2, 0.79]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial color="#fef3c7" emissive="#fbbf24" emissiveIntensity={1.2} />
          </mesh>
          <pointLight position={[x, 0.2, 0.85]} color="#fef3c7" intensity={3} distance={8} />
        </group>
      ))}

      {/* Tail lights */}
      {[-0.25, 0.25].map((x) => (
        <mesh key={`tl-${x}`} position={[x, 0.2, -0.86]}>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.8} />
        </mesh>
      ))}

      {/* Exhaust pipe */}
      <mesh position={[0.3, 0.55, -0.2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 6]} />
        <meshStandardMaterial color="#64748b" metalness={0.7} roughness={0.4} />
      </mesh>
      {/* Exhaust cap */}
      <mesh position={[0.3, 0.86, -0.2]}>
        <cylinderGeometry args={[0.05, 0.03, 0.06, 6]} />
        <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Side mirrors */}
      {[-0.38, 0.38].map((x) => (
        <group key={`mirror-${x}`}>
          <mesh position={[x, 0.38, 0.6]}>
            <boxGeometry args={[0.06, 0.04, 0.08]} />
            <meshStandardMaterial color="#1f2937" roughness={0.5} />
          </mesh>
          <mesh position={[x + (x > 0 ? 0.02 : -0.02), 0.38, 0.6]}>
            <boxGeometry args={[0.01, 0.03, 0.06]} />
            <meshStandardMaterial color="#93c5fd" metalness={0.9} roughness={0.05} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
