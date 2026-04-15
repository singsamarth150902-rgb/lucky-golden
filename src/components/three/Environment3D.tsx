"use client";

import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { ROAD_CURVE, BRIDGE_SECTIONS, MOUNTAIN_PEAK_T } from "./HubLocations";
import { useTheme } from "@/context/ThemeContext";

// === Deterministic random ===
const seed = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

// ============================================================
// INSTANCED TREES — one draw call per geometry layer
// ============================================================
const TRUNK_GEO = new THREE.CylinderGeometry(0.06, 0.1, 0.6, 5);
const CANOPY_LOWER_GEO = new THREE.ConeGeometry(0.5, 1.1, 6);
const CANOPY_UPPER_GEO = new THREE.ConeGeometry(0.35, 0.8, 6);

const PINE_TRUNK_GEO = new THREE.CylinderGeometry(0.04, 0.08, 1, 5);
const PINE_LAYER_GEOS = [
  new THREE.ConeGeometry(0.45, 0.5, 6),
  new THREE.ConeGeometry(0.37, 0.5, 6),
  new THREE.ConeGeometry(0.29, 0.5, 6),
  new THREE.ConeGeometry(0.21, 0.5, 6),
];

function InstancedTrees({ trees }: { trees: { pos: THREE.Vector3; scale: number }[] }) {
  const trunkRef = useRef<THREE.InstancedMesh>(null);
  const lowerRef = useRef<THREE.InstancedMesh>(null);
  const upperRef = useRef<THREE.InstancedMesh>(null);
  const count = trees.length;

  useEffect(() => {
    const m = new THREE.Matrix4();
    trees.forEach((t, i) => {
      // Trunk
      m.makeScale(t.scale, t.scale, t.scale);
      m.setPosition(t.pos.x, t.pos.y + 0.3 * t.scale, t.pos.z);
      trunkRef.current?.setMatrixAt(i, m);

      // Lower canopy
      m.makeScale(t.scale, t.scale, t.scale);
      m.setPosition(t.pos.x, t.pos.y + 0.85 * t.scale, t.pos.z);
      lowerRef.current?.setMatrixAt(i, m);

      // Upper canopy
      m.makeScale(t.scale, t.scale, t.scale);
      m.setPosition(t.pos.x, t.pos.y + 1.35 * t.scale, t.pos.z);
      upperRef.current?.setMatrixAt(i, m);
    });
    if (trunkRef.current) trunkRef.current.instanceMatrix.needsUpdate = true;
    if (lowerRef.current) lowerRef.current.instanceMatrix.needsUpdate = true;
    if (upperRef.current) upperRef.current.instanceMatrix.needsUpdate = true;
  }, [trees]);

  if (count === 0) return null;

  return (
    <group>
      <instancedMesh ref={trunkRef} args={[TRUNK_GEO, undefined, count]} castShadow>
        <meshStandardMaterial color="#7c5e3c" roughness={0.9} />
      </instancedMesh>
      <instancedMesh ref={lowerRef} args={[CANOPY_LOWER_GEO, undefined, count]} castShadow>
        <meshStandardMaterial color="#22c55e" roughness={0.8} />
      </instancedMesh>
      <instancedMesh ref={upperRef} args={[CANOPY_UPPER_GEO, undefined, count]} castShadow>
        <meshStandardMaterial color="#16a34a" roughness={0.8} />
      </instancedMesh>
    </group>
  );
}

function InstancedPines({ trees }: { trees: { pos: THREE.Vector3; scale: number }[] }) {
  const trunkRef = useRef<THREE.InstancedMesh>(null);
  const layerRefs = useRef<(THREE.InstancedMesh | null)[]>([null, null, null, null]);
  const count = trees.length;

  useEffect(() => {
    const m = new THREE.Matrix4();
    trees.forEach((t, i) => {
      m.makeScale(t.scale, t.scale, t.scale);
      m.setPosition(t.pos.x, t.pos.y + 0.5 * t.scale, t.pos.z);
      trunkRef.current?.setMatrixAt(i, m);

      const yOffsets = [0.7, 1.1, 1.45, 1.7];
      yOffsets.forEach((y, li) => {
        m.makeScale(t.scale, t.scale, t.scale);
        m.setPosition(t.pos.x, t.pos.y + y * t.scale, t.pos.z);
        layerRefs.current[li]?.setMatrixAt(i, m);
      });
    });
    if (trunkRef.current) trunkRef.current.instanceMatrix.needsUpdate = true;
    layerRefs.current.forEach((ref) => {
      if (ref) ref.instanceMatrix.needsUpdate = true;
    });
  }, [trees]);

  if (count === 0) return null;

  const colors = ["#166534", "#14532d", "#166534", "#14532d"];

  return (
    <group>
      <instancedMesh ref={trunkRef} args={[PINE_TRUNK_GEO, undefined, count]} castShadow>
        <meshStandardMaterial color="#5c3d2e" roughness={0.9} />
      </instancedMesh>
      {PINE_LAYER_GEOS.map((geo, li) => (
        <instancedMesh
          key={`pine-layer-${li}`}
          ref={(el) => { layerRefs.current[li] = el; }}
          args={[geo, undefined, count]}
          castShadow
        >
          <meshStandardMaterial color={colors[li]} roughness={0.85} />
        </instancedMesh>
      ))}
    </group>
  );
}

// ============================================================
// INSTANCED ROCKS
// ============================================================
const ROCK_GEO = new THREE.DodecahedronGeometry(0.25, 0);

function InstancedRocks({ rocks }: { rocks: { pos: THREE.Vector3; scale: number }[] }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const count = rocks.length;

  useEffect(() => {
    const m = new THREE.Matrix4();
    rocks.forEach((r, i) => {
      m.makeScale(r.scale, r.scale, r.scale);
      m.setPosition(r.pos.x, r.pos.y, r.pos.z);
      ref.current?.setMatrixAt(i, m);
    });
    if (ref.current) ref.current.instanceMatrix.needsUpdate = true;
  }, [rocks]);

  if (count === 0) return null;

  return (
    <instancedMesh ref={ref} args={[ROCK_GEO, undefined, count]} castShadow>
      <meshStandardMaterial color="#94a3b8" roughness={0.9} />
    </instancedMesh>
  );
}

// ============================================================
// SIMPLE COMPONENTS (small counts, no need to instance)
// ============================================================
function House({ position, rotation = 0, color }: { position: THREE.Vector3; rotation?: number; color: string }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[1.4, 1, 1.2]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      <mesh position={[0, 1.25, 0]} castShadow>
        <coneGeometry args={[1.1, 0.7, 4]} />
        <meshStandardMaterial color="#92400e" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.3, 0.61]}>
        <boxGeometry args={[0.3, 0.5, 0.02]} />
        <meshStandardMaterial color="#78350f" />
      </mesh>
      {[-0.35, 0.35].map((x) => (
        <mesh key={x} position={[x, 0.6, 0.61]}>
          <boxGeometry args={[0.25, 0.25, 0.02]} />
          <meshStandardMaterial color="#93c5fd" metalness={0.5} />
        </mesh>
      ))}
      <mesh position={[0.4, 1.5, -0.2]} castShadow>
        <boxGeometry args={[0.2, 0.5, 0.2]} />
        <meshStandardMaterial color="#78716c" />
      </mesh>
    </group>
  );
}

function LampPost({ position }: { position: THREE.Vector3 }) {
  return (
    <group position={position}>
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.03, 0.05, 2.4, 5]} />
        <meshStandardMaterial color="#64748b" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Emissive lamp head — NO point light */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.12, 6, 6]} />
        <meshStandardMaterial color="#fef3c7" emissive="#fbbf24" emissiveIntensity={1.5} />
      </mesh>
    </group>
  );
}

function Fence({ position, rotation = 0, length = 3 }: { position: THREE.Vector3; rotation?: number; length?: number }) {
  const posts = Math.max(2, Math.floor(length / 1.2));
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[length, 0.05, 0.04]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[length, 0.05, 0.04]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>
      {Array.from({ length: posts + 1 }).map((_, i) => (
        <mesh key={i} position={[-length / 2 + i * (length / posts), 0.35, 0]}>
          <boxGeometry args={[0.06, 0.7, 0.06]} />
          <meshStandardMaterial color="#a3845c" />
        </mesh>
      ))}
    </group>
  );
}

function Mountain({ position, scale, color }: { position: THREE.Vector3; scale: [number, number, number]; color: string }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <coneGeometry args={[scale[0], scale[1], 5]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
      {scale[1] > 12 && (
        <mesh position={[0, scale[1] * 0.35, 0]}>
          <coneGeometry args={[scale[0] * 0.35, scale[1] * 0.25, 5]} />
          <meshStandardMaterial color="#f1f5f9" roughness={0.7} />
        </mesh>
      )}
    </group>
  );
}

function BridgePillar({ position, height }: { position: THREE.Vector3; height: number }) {
  return (
    <group position={position}>
      <mesh position={[0, -height / 2, 0]} castShadow>
        <boxGeometry args={[0.5, height, 0.5]} />
        <meshStandardMaterial color="#78716c" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[0, -height, 0]}>
        <boxGeometry args={[0.8, 0.3, 0.8]} />
        <meshStandardMaterial color="#57534e" />
      </mesh>
    </group>
  );
}

// ============================================================
// MAIN ENVIRONMENT
// ============================================================
export default function Environment3D() {
  const { theme } = useTheme();
  const up = new THREE.Vector3(0, 1, 0);

  const data = useMemo(() => {
    const trees: { pos: THREE.Vector3; scale: number }[] = [];
    const pineTrees: { pos: THREE.Vector3; scale: number }[] = [];
    const houses: { pos: THREE.Vector3; rot: number; color: string }[] = [];
    const lamps: THREE.Vector3[] = [];
    const fences: { pos: THREE.Vector3; rot: number; len: number }[] = [];
    const rocks: { pos: THREE.Vector3; scale: number }[] = [];
    const mountains: { pos: THREE.Vector3; scale: [number, number, number]; color: string }[] = [];
    const bridgePillars: { pos: THREE.Vector3; height: number }[] = [];
    const waterPlanes: { pos: THREE.Vector3; size: [number, number] }[] = [];

    const houseColors = ["#fecdd3", "#dbeafe", "#fef3c7", "#d1fae5", "#e9d5ff", "#fce7f3", "#f1f5f9", "#fed7aa"];

    const isOnBridge = (t: number) => BRIDGE_SECTIONS.some(b => t >= b.tStart && t <= b.tEnd);
    const isMountainZone = (t: number) => Math.abs(t - MOUNTAIN_PEAK_T) < 0.15;

    const STEPS = 400;
    for (let i = 0; i < STEPS; i++) {
      const t = i / STEPS;
      const point = ROAD_CURVE.getPointAt(t);
      const tangent = ROAD_CURVE.getTangentAt(t);
      const cross = new THREE.Vector3().crossVectors(tangent, up).normalize();
      const onBridge = isOnBridge(t);
      const inMountains = isMountainZone(t);

      // Trees — BOTH sides every step, closer and denser
      if (!onBridge && seed(i) > 0.3) {
        for (const side of [1, -1]) {
          if (seed(i + 1000 + side * 500) > 0.4) {
            const offset = 3 + seed(i + 2000 + side * 500) * 6;
            const pos = point.clone().add(cross.clone().multiplyScalar(offset * side));
            pos.y = point.y;
            if (inMountains) {
              pineTrees.push({ pos, scale: 0.7 + seed(i + 3000 + side * 500) * 0.9 });
            } else {
              trees.push({ pos, scale: 0.6 + seed(i + 3000 + side * 500) * 0.7 });
            }
          }
        }
        // Extra back-row trees for depth
        if (seed(i + 4000) > 0.5) {
          const side = seed(i + 4100) > 0.5 ? 1 : -1;
          const offset = 10 + seed(i + 4200) * 8;
          const pos = point.clone().add(cross.clone().multiplyScalar(offset * side));
          pos.y = point.y;
          if (inMountains) {
            pineTrees.push({ pos, scale: 0.9 + seed(i + 4300) * 1.1 });
          } else {
            trees.push({ pos, scale: 0.8 + seed(i + 4300) * 0.8 });
          }
        }
      }

      // Houses — every 20 steps, often on both sides
      if (i % 20 === 0 && !onBridge && !inMountains && seed(i + 5000) > 0.25) {
        const side = seed(i + 6000) > 0.5 ? 1 : -1;
        const offset = 5 + seed(i + 7000) * 4;
        const pos = point.clone().add(cross.clone().multiplyScalar(offset * side));
        pos.y = point.y;
        houses.push({
          pos,
          rot: Math.atan2(cross.x * side, cross.z * side),
          color: houseColors[Math.floor(seed(i + 8000) * houseColors.length)],
        });
        // Sometimes a second house on the other side
        if (seed(i + 8500) > 0.6) {
          const pos2 = point.clone().add(cross.clone().multiplyScalar(offset * -side));
          pos2.y = point.y;
          houses.push({
            pos: pos2,
            rot: Math.atan2(cross.x * -side, cross.z * -side),
            color: houseColors[Math.floor(seed(i + 8600) * houseColors.length)],
          });
        }
      }

      // Lamps — every 18 steps, alternating sides
      if (i % 18 === 0 && !onBridge) {
        const side = (i / 18) % 2 === 0 ? 1 : -1;
        const pos = point.clone().add(cross.clone().multiplyScalar(2.3 * side));
        pos.y = point.y;
        lamps.push(pos);
      }

      // Fences — more frequent
      if (i % 30 === 0 && !onBridge && !inMountains && seed(i + 9000) > 0.4) {
        const side = seed(i + 10000) > 0.5 ? 1 : -1;
        const pos = point.clone().add(cross.clone().multiplyScalar(3 * side));
        pos.y = point.y;
        fences.push({ pos, rot: Math.atan2(tangent.x, tangent.z), len: 2 + seed(i + 11000) * 3 });
      }

      // Rocks — denser
      if (i % 12 === 0 && seed(i + 15000) > (inMountains ? 0.25 : 0.6)) {
        const side = seed(i + 16000) > 0.5 ? 1 : -1;
        const offset = 2.5 + seed(i + 17000) * 5;
        const pos = point.clone().add(cross.clone().multiplyScalar(offset * side));
        pos.y = point.y + 0.1;
        rocks.push({ pos, scale: 0.4 + seed(i + 18000) * (inMountains ? 2 : 1) });
      }

      // Bridge pillars
      if (onBridge && i % 12 === 0) {
        const height = point.y + 2;
        if (height > 1) bridgePillars.push({ pos: point.clone(), height });
      }
    }

    // Mountains — more and closer for dramatic effect
    const mtnCenter = ROAD_CURVE.getPointAt(MOUNTAIN_PEAK_T);
    const mtnTangent = ROAD_CURVE.getTangentAt(MOUNTAIN_PEAK_T);
    const mtnCross = new THREE.Vector3().crossVectors(mtnTangent, up).normalize();
    for (let i = 0; i < 18; i++) {
      const side = i % 2 === 0 ? 1 : -1;
      const along = (seed(i + 500) - 0.5) * 50;
      const offset = 12 + seed(i + 600) * 20;
      const pos = mtnCenter.clone()
        .add(mtnTangent.clone().multiplyScalar(along))
        .add(mtnCross.clone().multiplyScalar(offset * side));
      const h = 10 + seed(i + 700) * 20;
      pos.y = h / 2;
      const colors = ["#6b7280", "#78716c", "#57534e", "#64748b"];
      mountains.push({
        pos, scale: [4 + seed(i + 800) * 5, h, 4 + seed(i + 900) * 5],
        color: colors[Math.floor(seed(i + 1000) * colors.length)],
      });
    }

    // Water under bridges
    for (const bridge of BRIDGE_SECTIONS) {
      const midT = (bridge.tStart + bridge.tEnd) / 2;
      const midPoint = ROAD_CURVE.getPointAt(midT);
      waterPlanes.push({
        pos: new THREE.Vector3(midPoint.x, -2.5, midPoint.z),
        size: [20, 30],
      });
    }

    return { trees, pineTrees, houses, lamps, fences, rocks, mountains, bridgePillars, waterPlanes };
  }, []);

  return (
    <group>
      {/* Ground — sized to compact road */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -82]} receiveShadow>
        <planeGeometry args={[100, 220]} />
        <meshStandardMaterial
          color={theme === "dark" ? "#1a2332" : "#7cb342"}
          roughness={0.9}
        />
      </mesh>

      {/* INSTANCED trees — 3 draw calls instead of ~600 */}
      <InstancedTrees trees={data.trees} />
      <InstancedPines trees={data.pineTrees} />
      <InstancedRocks rocks={data.rocks} />

      {/* Small-count objects (individual meshes OK) */}
      {data.houses.map((h, i) => (
        <House key={`h-${i}`} position={h.pos} rotation={h.rot} color={h.color} />
      ))}
      {data.lamps.map((pos, i) => (
        <LampPost key={`l-${i}`} position={pos} />
      ))}
      {data.fences.map((f, i) => (
        <Fence key={`f-${i}`} position={f.pos} rotation={f.rot} length={f.len} />
      ))}
      {data.mountains.map((m, i) => (
        <Mountain key={`m-${i}`} position={m.pos} scale={m.scale} color={m.color} />
      ))}
      {data.bridgePillars.map((bp, i) => (
        <BridgePillar key={`bp-${i}`} position={bp.pos} height={bp.height} />
      ))}
      {data.waterPlanes.map((w, i) => (
        <mesh key={`water-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={w.pos}>
          <planeGeometry args={w.size} />
          <meshStandardMaterial
            color={theme === "dark" ? "#1e3a5f" : "#38bdf8"}
            roughness={0.1}
            metalness={0.6}
            transparent
            opacity={0.75}
          />
        </mesh>
      ))}
    </group>
  );
}
