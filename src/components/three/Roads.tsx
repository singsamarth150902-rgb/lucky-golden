"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { ROAD_CURVE } from "./HubLocations";
import { useTheme } from "@/context/ThemeContext";

const SEGMENTS = 300;

function buildRibbon(
  curve: THREE.CatmullRomCurve3,
  width: number,
  yOffset: number,
  segments: number
): THREE.BufferGeometry {
  const positions: number[] = [];
  const indices: number[] = [];
  const up = new THREE.Vector3(0, 1, 0);

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t);
    const cross = new THREE.Vector3().crossVectors(tangent, up).normalize();

    const left = point.clone().add(cross.clone().multiplyScalar(width / 2));
    const right = point.clone().add(cross.clone().multiplyScalar(-width / 2));
    // Follow the curve elevation
    left.y = point.y + yOffset;
    right.y = point.y + yOffset;

    positions.push(left.x, left.y, left.z);
    positions.push(right.x, right.y, right.z);

    if (i < segments) {
      const vi = i * 2;
      indices.push(vi, vi + 1, vi + 2);
      indices.push(vi + 1, vi + 3, vi + 2);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

export default function Roads() {
  const { theme } = useTheme();

  const roadGeo = useMemo(() => buildRibbon(ROAD_CURVE, 3.5, 0.02, SEGMENTS), []);
  const centerGeo = useMemo(() => buildRibbon(ROAD_CURVE, 0.08, 0.04, SEGMENTS), []);
  const edgeGeos = useMemo(() => [
    buildRibbon(ROAD_CURVE, 0.06, 0.04, SEGMENTS), // left edge will be offset below
  ], []);

  // Side line geometries with lateral offset
  const sideGeos = useMemo(() => {
    return [1, -1].map((side) => {
      const positions: number[] = [];
      const indices: number[] = [];
      const lineWidth = 0.06;
      const offset = 1.6 * side;
      const up = new THREE.Vector3(0, 1, 0);

      for (let i = 0; i <= SEGMENTS; i++) {
        const t = i / SEGMENTS;
        const point = ROAD_CURVE.getPointAt(t);
        const tangent = ROAD_CURVE.getTangentAt(t);
        const cross = new THREE.Vector3().crossVectors(tangent, up).normalize();

        const center = point.clone().add(cross.clone().multiplyScalar(offset));
        const left = center.clone().add(cross.clone().multiplyScalar(lineWidth / 2));
        const right = center.clone().add(cross.clone().multiplyScalar(-lineWidth / 2));
        left.y = point.y + 0.04;
        right.y = point.y + 0.04;

        positions.push(left.x, left.y, left.z);
        positions.push(right.x, right.y, right.z);

        if (i < SEGMENTS) {
          const vi = i * 2;
          indices.push(vi, vi + 1, vi + 2);
          indices.push(vi + 1, vi + 3, vi + 2);
        }
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      geo.setIndex(indices);
      geo.computeVertexNormals();
      return geo;
    });
  }, []);

  return (
    <group>
      <mesh geometry={roadGeo} receiveShadow>
        <meshStandardMaterial
          color={theme === "dark" ? "#2d3748" : "#6b7280"}
          roughness={0.85}
        />
      </mesh>

      <mesh geometry={centerGeo}>
        <meshStandardMaterial
          color={theme === "dark" ? "#fbbf24" : "#f59e0b"}
          emissive={theme === "dark" ? "#f59e0b" : "#d97706"}
          emissiveIntensity={0.3}
        />
      </mesh>

      {sideGeos.map((geo, i) => (
        <mesh key={`edge-${i}`} geometry={geo}>
          <meshStandardMaterial color="#e5e7eb" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}
