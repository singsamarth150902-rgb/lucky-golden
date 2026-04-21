import Link from "next/link";
import HeroSlider from "@/components/site/HeroSlider";
import SectionHeading from "@/components/site/SectionHeading";
import TruckVehicle from "@/components/site/TruckVehicle";
import {
  contactDetails,
  homeHighlights,
  routeCorridors,
} from "@/lib/lucky-golden-data";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      <section className="section-bridge px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Deliver"
            title="A Logistics Website Built Like An Operating Network"
            summary="The reference sites lean on direct communication, clear route coverage, and branch-first trust signals. Lucky Golden now follows that same structure with its own brand language."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {homeHighlights.map((item) => (
              <article
                key={item.title}
                className="surface-card group relative overflow-hidden rounded-3xl p-8 shadow-lg shadow-stone-900/5"
              >
                <TruckVehicle className="pointer-events-none absolute -right-6 top-3 w-28 opacity-15 transition-all duration-300 group-hover:translate-x-[-4px] group-hover:opacity-25" muted />
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-600">
                  {item.accent}
                </p>
                <h2 className="mt-4 text-2xl font-bold text-stone-700">
                  {item.title}
                </h2>
                <p className="mt-4 leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-muted line-soft border-y px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              Network Snapshot
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-stone-700">
              Fast access to our major corridors and support desks
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
              The home page stays concise, like the reference. It tells visitors
              what Lucky Golden does, how the network is organized, and where to
              go next for offices, routes, or portal access.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-red-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-red-900/15 transition-colors hover:bg-red-700"
              >
                View Routes
              </Link>
              <Link
                href="/about-us"
                className="rounded-full border border-amber-300 px-7 py-3.5 font-bold text-stone-700 transition-colors hover:border-red-300 hover:text-red-700"
              >
                Read About Us
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {routeCorridors.slice(0, 3).map((corridor) => (
              <article
                key={corridor.route}
                className="surface-inset group relative overflow-hidden rounded-3xl p-6"
              >
                <TruckVehicle className="pointer-events-none absolute -right-7 top-4 w-28 opacity-15 transition-all duration-300 group-hover:translate-x-[-4px] group-hover:opacity-30" muted />
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
                  Active corridor
                </p>
                <h3 className="mt-3 text-2xl font-bold text-stone-700">
                  {corridor.route}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {corridor.serviceLine}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="cta-band relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-8 py-12 text-center shadow-2xl shadow-red-900/10 sm:px-12">
          <TruckVehicle className="pointer-events-none absolute -right-8 bottom-0 w-44 opacity-15 truck-bob" />
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-100">
            Need A Shipment Answer Fast?
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
            Reach the Lucky Golden operations desk directly
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            For branch coordination, booking updates, or route confirmation,
            contact our team and we will guide you to the right desk.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={contactDetails.phoneHref}
              className="rounded-full bg-white px-8 py-3.5 font-bold text-red-700"
            >
              Call {contactDetails.phone}
            </a>
            <a
              href={contactDetails.emailHref}
              className="rounded-full border border-white/40 px-8 py-3.5 font-bold text-white"
            >
              Email Operations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
