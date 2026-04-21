import Link from "next/link";
import {
  companyName,
  contactDetails,
  navLinks,
  routeCorridors,
} from "@/lib/lucky-golden-data";

export default function SiteFooter() {
  return (
    <footer className="section-muted border-t line-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
            Lucky Golden
          </p>
          <p className="mt-3 max-w-sm leading-relaxed text-stone-600">
            Premium transport services built around corridor discipline, branch
            coordination, and reliable cargo movement across western and central
            India.
          </p>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
            Navigation
          </p>
          <ul className="mt-4 space-y-3 text-stone-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-red-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
            Key Corridors
          </p>
          <ul className="mt-4 space-y-3 text-stone-600">
            {routeCorridors.slice(0, 4).map((corridor) => (
              <li key={corridor.route}>{corridor.route}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-stone-600">
            <p>{contactDetails.address}</p>
            <p>
              <a
                href={contactDetails.phoneHref}
                className="transition-colors hover:text-red-600"
              >
                {contactDetails.phone}
              </a>
            </p>
            <p>
              <a
                href={contactDetails.emailHref}
                className="transition-colors hover:text-red-600"
              >
                {contactDetails.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t line-soft px-6 py-5 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </div>
    </footer>
  );
}
