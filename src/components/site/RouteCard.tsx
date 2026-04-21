import type { RouteCorridor } from "@/lib/lucky-golden-data";
import TruckVehicle from "@/components/site/TruckVehicle";

type RouteCardProps = {
  corridor: RouteCorridor;
};

function splitRouteLabel(route: string) {
  const parts = route.split(" via ");
  if (parts.length === 2) {
    return {
      start: parts[0],
      end: parts[1],
    };
  }

  return {
    start: route,
    end: "",
  };
}

export default function RouteCard({ corridor }: RouteCardProps) {
  const { start, end } = splitRouteLabel(corridor.route);

  return (
    <article className="surface-card group relative overflow-hidden rounded-3xl p-6 shadow-md shadow-stone-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-300/20">
      <TruckVehicle className="pointer-events-none absolute -right-6 top-4 w-32 opacity-20 transition-all duration-300 group-hover:translate-x-[-6px] group-hover:opacity-35" />
      <div className="relative flex items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <span className="text-xl text-red-600">●</span>
          <span className="text-lg font-semibold text-stone-800">{start}</span>
        </div>
        {end ? (
          <>
            <span className="text-xl text-amber-500">→</span>
            <div className="flex items-center gap-2">
              <span className="text-xl text-green-600">●</span>
              <span className="text-lg font-semibold text-stone-800">{end}</span>
            </div>
          </>
        ) : null}
      </div>

      <div className="surface-inset relative mt-4 overflow-hidden rounded-2xl px-4 py-3">
        <div className="absolute inset-x-4 bottom-3 h-1 rounded-full bg-amber-200/80" />
        <TruckVehicle className="truck-ride relative z-10 w-20" muted />
      </div>

      <p className="mt-3 text-center text-sm text-stone-500">{corridor.route}</p>
      <div className="my-4 h-px bg-amber-100" />
      <p className="text-sm leading-relaxed text-amber-700">{corridor.serviceLine}</p>

      <div className="mt-6 flex flex-col justify-between gap-3 text-sm sm:flex-row">
        <a
          href={`tel:${corridor.bookingEnquiry.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center gap-2 text-stone-700 transition-colors hover:text-green-600"
        >
          <span className="text-green-600">●</span>
          <span className="font-medium">{corridor.bookingEnquiry}</span>
        </a>
        <a
          href={`tel:${corridor.operationsDesk.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center gap-2 text-stone-700 transition-colors hover:text-blue-600"
        >
          <span className="text-blue-600">●</span>
          <span className="font-medium">{corridor.operationsDesk}</span>
        </a>
      </div>
    </article>
  );
}
