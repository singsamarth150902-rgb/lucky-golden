import RouteCard from "@/components/site/RouteCard";
import SectionHeading from "@/components/site/SectionHeading";
import { routeCorridors } from "@/lib/lucky-golden-data";

export default function ServicesPage() {
  return (
    <main className="section-muted px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Routes"
          title="Structured corridor coverage across major commercial lanes"
          summary="This page follows the reference pattern closely: visitors can understand route coverage, booking lines, and operations contacts without digging through marketing copy."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {routeCorridors.map((corridor) => (
            <RouteCard key={corridor.route} corridor={corridor} />
          ))}
        </div>
      </div>
    </main>
  );
}
