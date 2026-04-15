import { Vector3, CatmullRomCurve3 } from "three";

export interface HubData {
  id: number;
  name: string;
  t: number;
  color: string;
}

export const HUBS: HubData[] = [
  { id: 1, name: "Hub Alpha", t: 0.05, color: "#f59e0b" },
  { id: 2, name: "Hub Bravo", t: 0.17, color: "#ef4444" },
  { id: 3, name: "Hub Charlie", t: 0.29, color: "#3b82f6" },
  { id: 4, name: "Hub Delta", t: 0.41, color: "#8b5cf6" },
  { id: 5, name: "Hub Echo", t: 0.54, color: "#10b981" },
  { id: 6, name: "Hub Foxtrot", t: 0.66, color: "#ec4899" },
  { id: 7, name: "Hub Golf", t: 0.79, color: "#06b6d4" },
  { id: 8, name: "Hub Hotel", t: 0.93, color: "#f97316" },
];

// Compact road — ~150 units long instead of 335
// Tighter curves, more lateral winding, same elevation drama
const ROAD_POINTS = [
  // === Flat town start (Hub Alpha) ===
  new Vector3(0, 0, 3),
  new Vector3(3, 0, -4),
  new Vector3(-2, 0, -10),

  // === Rolling hills (Hub Bravo) ===
  new Vector3(5, 1.5, -16),
  new Vector3(-3, 3, -22),
  new Vector3(4, 1.5, -28),
  new Vector3(-2, 0, -33),

  // === Valley + river bridge (Hub Charlie) ===
  new Vector3(6, -1, -39),
  new Vector3(2, -2, -44),
  new Vector3(-2, -2, -48),
  new Vector3(-4, -2, -52),
  new Vector3(-1, -1, -56),

  // === Mountain climb (Hub Delta) ===
  new Vector3(5, 1, -61),
  new Vector3(2, 4, -67),
  new Vector3(-4, 7, -73),
  new Vector3(-1, 8.5, -78),   // peak
  new Vector3(4, 7, -83),

  // === Descent into plains (Hub Echo) ===
  new Vector3(1, 4, -88),
  new Vector3(-3, 2, -93),
  new Vector3(4, 0.5, -98),

  // === Plains (Hub Foxtrot) ===
  new Vector3(-2, 0, -103),
  new Vector3(5, 0, -108),
  new Vector3(-3, 0, -113),

  // === Canyon bridge (Hub Golf) ===
  new Vector3(3, 0, -118),
  new Vector3(0, 2, -122),
  new Vector3(-3, 5, -126),
  new Vector3(0, 5, -130),
  new Vector3(3, 5, -134),
  new Vector3(0, 2, -138),
  new Vector3(-3, 0, -142),

  // === Final approach (Hub Hotel) ===
  new Vector3(4, 0.5, -147),
  new Vector3(0, 1, -152),
  new Vector3(-2, 0.5, -157),
  new Vector3(1, 0, -162),
  new Vector3(0, 0, -167),
];

export const ROAD_CURVE = new CatmullRomCurve3(ROAD_POINTS, false, "catmullrom", 0.3);

export const BRIDGE_SECTIONS: { tStart: number; tEnd: number; label: string }[] = [
  { tStart: 0.24, tEnd: 0.31, label: "River Bridge" },
  { tStart: 0.71, tEnd: 0.83, label: "Canyon Bridge" },
];

export const MOUNTAIN_PEAK_T = 0.46;

export function getHubPosition(hub: HubData): Vector3 {
  return ROAD_CURVE.getPointAt(hub.t);
}
