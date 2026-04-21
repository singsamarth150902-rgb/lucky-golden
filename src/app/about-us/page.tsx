import SectionHeading from "@/components/site/SectionHeading";
import {
  aboutPoints,
  companyName,
  contactDetails,
} from "@/lib/lucky-golden-data";

export default function AboutUsPage() {
  return (
    <main className="section-bridge px-6 pb-24 pt-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Lucky Golden"
          title="Built For Disciplined Road Logistics And Regional Cargo Flow"
          summary={`${companyName} is positioned as a dependable transport network for manufacturers, distributors, and market-linked cargo movement across western and central India.`}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <article className="surface-card rounded-3xl p-8 shadow-xl shadow-stone-900/5">
            <h2 className="text-3xl font-bold text-stone-700">Our Mission</h2>
            <p className="mt-5 text-lg leading-relaxed text-amber-700">
              To provide safe, timely, and operationally accountable transport
              services backed by strong branch communication and consistent route
              execution.
            </p>
          </article>

          <article className="surface-card rounded-3xl p-8 shadow-xl shadow-stone-900/5">
            <h2 className="text-3xl font-bold text-stone-700">Our Vision</h2>
            <p className="mt-5 text-lg leading-relaxed text-amber-700">
              To become the preferred logistics partner for corridor-driven
              businesses that value visibility, responsiveness, and disciplined
              movement across every dispatch cycle.
            </p>
          </article>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="surface-panel rounded-[2rem] p-8">
            <h2 className="text-3xl font-black text-stone-700">
              How Lucky Golden is positioned
            </h2>
            <ul className="mt-8 space-y-5">
              {aboutPoints.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-1 text-red-600">●</span>
                  <span className="text-lg leading-relaxed text-stone-600">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="surface-panel rounded-[2rem] p-8 shadow-xl shadow-stone-900/5">
            <h2 className="text-3xl font-black text-stone-700">Contact Us</h2>
            <div className="mt-8 space-y-5 text-stone-600">
              <p>{contactDetails.address}</p>
              <p>
                <a href={contactDetails.phoneHref} className="hover:text-blue-600">
                  {contactDetails.phone}
                </a>
              </p>
              <p>
                <a href={contactDetails.emailHref} className="hover:text-green-600">
                  {contactDetails.email}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
