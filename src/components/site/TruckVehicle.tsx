type TruckVehicleProps = {
  className?: string;
  muted?: boolean;
};

export default function TruckVehicle({
  className = "",
  muted = false,
}: TruckVehicleProps) {
  const cargoFill = muted ? "#fde68a" : "#f59e0b";
  const cargoAccent = muted ? "#fbbf24" : "#d97706";
  const cabFill = muted ? "#fca5a5" : "#dc2626";
  const bodyStroke = muted ? "#f59e0b" : "#7f1d1d";

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 168 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 71H154"
        stroke="#d6b88c"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="8 10"
      />
      <rect
        x="18"
        y="24"
        width="86"
        height="31"
        rx="7"
        fill={cargoFill}
        stroke={bodyStroke}
        strokeWidth="3"
      />
      <rect x="26" y="33" width="68" height="6" rx="3" fill={cargoAccent} />
      <rect
        x="104"
        y="31"
        width="34"
        height="24"
        rx="7"
        fill={cabFill}
        stroke={bodyStroke}
        strokeWidth="3"
      />
      <path
        d="M137 39H148L155 47V55H137V39Z"
        fill={muted ? "#fecaca" : "#ef4444"}
        stroke={bodyStroke}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        x="112"
        y="37"
        width="16"
        height="10"
        rx="3"
        fill="#bfdbfe"
        opacity="0.9"
      />
      <circle cx="48" cy="63" r="12" fill="#1f2937" />
      <circle cx="48" cy="63" r="5" fill="#9ca3af" />
      <circle cx="92" cy="63" r="12" fill="#1f2937" />
      <circle cx="92" cy="63" r="5" fill="#9ca3af" />
      <circle cx="126" cy="63" r="12" fill="#1f2937" />
      <circle cx="126" cy="63" r="5" fill="#9ca3af" />
      <circle cx="149" cy="52" r="3" fill="#fff7ed" />
      <path
        d="M18 20L30 14H94L104 20"
        stroke={bodyStroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M14 59H154"
        stroke={muted ? "#fde68a" : "#fed7aa"}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <text
        x="29"
        y="31"
        fontSize="8"
        fontWeight="800"
        fill="#7c2d12"
        letterSpacing="0.1em"
      >
        LUCKY GOLDEN
      </text>
    </svg>
  );
}
