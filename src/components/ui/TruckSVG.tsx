"use client";

export default function TruckSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="52"
      viewBox="0 0 120 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cargo */}
      <rect x="0" y="6" width="68" height="30" rx="3" fill="#f59e0b" />
      <rect x="3" y="18" width="62" height="3" rx="1.5" fill="#d97706" />
      <text x="12" y="15" fontSize="8" fontWeight="bold" fill="#78350f">
        LUCKY GOLDEN
      </text>
      {/* Cab */}
      <rect x="68" y="12" width="32" height="24" rx="3" fill="#fbbf24" />
      {/* Windshield */}
      <rect x="84" y="16" width="12" height="12" rx="2" fill="#7dd3fc" opacity="0.7" />
      {/* Bumper */}
      <rect x="100" y="28" width="6" height="8" rx="1" fill="#94a3b8" />
      {/* Headlight */}
      <circle cx="104" cy="24" r="2" fill="#fef3c7" />
      {/* Wheels */}
      <circle cx="20" cy="42" r="9" fill="#1f2937" />
      <circle cx="20" cy="42" r="4" fill="#6b7280" />
      <circle cx="54" cy="42" r="9" fill="#1f2937" />
      <circle cx="54" cy="42" r="4" fill="#6b7280" />
      <circle cx="86" cy="42" r="9" fill="#1f2937" />
      <circle cx="86" cy="42" r="4" fill="#6b7280" />
      {/* Exhaust */}
      <rect x="0" y="10" width="3" height="4" rx="1" fill="#64748b" />
    </svg>
  );
}
