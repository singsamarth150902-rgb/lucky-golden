import type { Office } from "@/lib/lucky-golden-data";
import TruckVehicle from "@/components/site/TruckVehicle";

type OfficeCardProps = {
  office: Office;
};

function normalizeTel(value: string) {
  return value.replace(/[^0-9+]/g, "");
}

export default function OfficeCard({ office }: OfficeCardProps) {
  return (
    <article className="surface-card group relative overflow-hidden rounded-3xl p-8 shadow-lg shadow-stone-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/10">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-red-500 to-red-700" />
      <TruckVehicle className="pointer-events-none absolute -right-5 top-4 w-28 opacity-20 transition-transform duration-300 group-hover:translate-x-[-4px] group-hover:opacity-30" muted />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-amber-50 to-transparent" />
      <h2 className="text-2xl font-bold text-amber-600 transition-colors group-hover:text-red-600">
        {office.name}
      </h2>

      <div className="relative mt-6 space-y-5 text-stone-600">
        <div className="flex items-start gap-3">
          <span className="mt-1 text-lg text-red-600">●</span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
              Address
            </p>
            {office.mapsUrl ? (
              <a
                href={office.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block leading-relaxed transition-colors hover:text-red-600 hover:underline"
              >
                {office.address}
              </a>
            ) : (
              <p className="mt-1 leading-relaxed">{office.address}</p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
              Mobile
            </p>
            <ul className="mt-2 space-y-2">
              {office.mobile.map((entry) => (
                <li key={entry}>
                  <a
                    href={`tel:${normalizeTel(entry)}`}
                    className="transition-colors hover:text-green-600 hover:underline"
                  >
                    {entry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {office.phone?.length ? (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
                Phone
              </p>
              <ul className="mt-2 space-y-2">
                {office.phone.map((entry) => (
                  <li key={entry}>
                    <a
                      href={`tel:${normalizeTel(entry)}`}
                      className="transition-colors hover:text-blue-600 hover:underline"
                    >
                      {entry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
        <span className="inline-flex h-2 w-2 rounded-full bg-red-600" />
        Branch Logistics Point
      </div>
    </article>
  );
}
