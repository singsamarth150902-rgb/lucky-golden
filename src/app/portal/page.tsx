import SectionHeading from "@/components/site/SectionHeading";
import { contactDetails, portalFeatures } from "@/lib/lucky-golden-data";

export default function PortalPage() {
  return (
    <main className="section-muted px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Operations Portal"
          title="A clean single-purpose page for customer access"
          summary="The reference site uses a dedicated ERP page. This Lucky Golden version keeps the same purpose: one focused place for operations access and portal requests."
        />

        <div className="surface-card mt-14 rounded-[2rem] p-8 shadow-2xl shadow-stone-900/5 sm:p-10">
          <h2 className="text-3xl font-black text-stone-700">
            Lucky Golden Operations Portal
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
            Portal access supports structured shipment communication, dispatch
            visibility, and controlled customer login requests for repeat lanes.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {portalFeatures.map((feature) => (
              <article
                key={feature.title}
                className="surface-inset rounded-3xl p-6"
              >
                <h3 className="text-xl font-bold text-stone-700">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={contactDetails.portalHref}
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-red-900/15 transition-colors hover:bg-red-700"
            >
              Request Portal Access
            </a>
            <a
              href={contactDetails.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-amber-300 px-8 py-3.5 font-bold text-stone-700 transition-colors hover:border-red-300 hover:text-red-700"
            >
              Call Operations Desk
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
