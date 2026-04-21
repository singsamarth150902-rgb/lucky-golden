import OfficeCard from "@/components/site/OfficeCard";
import SectionHeading from "@/components/site/SectionHeading";
import { officeGroups } from "@/lib/lucky-golden-data";

export default function OfficesPage() {
  return (
    <main className="section-bridge px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Offices"
          title="Branch coverage designed around real cargo movement"
          summary="Each location page acts like a working branch directory: address, call lines, mobile support, and direct map access for faster coordination."
        />

        <div className="mt-16 space-y-16">
          {officeGroups.map((group) => (
            <section key={group.title}>
              <div className="mb-10">
                <h2 className="text-4xl font-black text-stone-700">
                  {group.title}{" "}
                  <span className="text-red-600">{group.subtitle}</span>
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {group.offices.map((office) => (
                  <OfficeCard key={office.name} office={office} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
