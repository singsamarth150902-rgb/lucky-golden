import { companyName } from "@/lib/lucky-golden-data";

type BrandMarkProps = {
  compact?: boolean;
};

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-red-700 via-red-600 to-amber-400 shadow-lg shadow-red-900/20">
        <div className="absolute inset-[3px] rounded-[10px] bg-white/90" />
        <span className="relative text-lg font-black tracking-tight text-red-700">
          LG
        </span>
      </div>
      <div className={compact ? "hidden sm:block" : "block"}>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-red-700">
          Lucky Golden
        </p>
        <p className="text-xs text-stone-500">{companyName}</p>
      </div>
    </div>
  );
}
