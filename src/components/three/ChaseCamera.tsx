"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { ROAD_CURVE } from "./HubLocations";

interface ChaseCameraProps {
  scrollProgress: number;
}

const _targetPos = new Vector3();
const _targetLook = new Vector3();

export default function ChaseCamera({ scrollProgress }: ChaseCameraProps) {
  const { camera } = useThree();
  const smoothPos = useRef(new Vector3(0, 14, 20));
  const smoothLook = useRef(new Vector3(0, 0, 0));

  useFrame(() => {
    const t = Math.min(Math.max(scrollProgress, 0.001), 0.999);
    const pos = ROAD_CURVE.getPointAt(t);
    const tangent = ROAD_CURVE.getTangentAt(t);

    // Camera: higher up (12), further behind (14), slight lateral offset
    _targetPos.set(
      pos.x - tangent.x * 14 + tangent.z * 2,
      pos.y + 12,
      pos.z - tangent.z * 14 - tangent.x * 2
    );

    // Look well ahead of the truck
    _targetLook.set(
      pos.x + tangent.x * 10,
      pos.y + 1,
      pos.z + tangent.z * 10
    );

    // Smooth follow — slower lerp = more cinematic
    smoothPos.current.lerp(_targetPos, 0.04);
    smoothLook.current.lerp(_targetLook, 0.04);

    camera.position.copy(smoothPos.current);
    camera.lookAt(smoothLook.current);
  });

  return null;
}
