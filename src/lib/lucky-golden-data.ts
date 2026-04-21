export type NavLink = {
  href: string;
  label: string;
};

export type HeroSlide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  badge: string;
  statLabel: string;
  statValue: string;
  backgroundClassName: string;
};

export type ServicePillar = {
  title: string;
  description: string;
  accent: string;
};

export type Office = {
  name: string;
  address: string;
  mobile: string[];
  phone?: string[];
  mapsUrl?: string;
};

export type OfficeGroup = {
  title: string;
  subtitle: string;
  offices: Office[];
};

export type RouteCorridor = {
  route: string;
  serviceLine: string;
  bookingEnquiry: string;
  operationsDesk: string;
};

export type PortalFeature = {
  title: string;
  description: string;
};

export const companyName = "Lucky Golden Transport Services";

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Routes" },
  { href: "/offices", label: "Offices" },
  { href: "/portal", label: "Portal" },
];

export const contactDetails = {
  phone: "+91 9876 543 210",
  phoneHref: "tel:+919876543210",
  supportPhone: "+91 731 427 3150",
  supportPhoneHref: "tel:+917314273150",
  email: "info@luckygolden.com",
  emailHref: "mailto:info@luckygolden.com",
  portalHref:
    "mailto:info@luckygolden.com?subject=Lucky%20Golden%20Portal%20Access",
  address: "Lucky Golden House, Loha Mandi Corridor, Indore, Madhya Pradesh",
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Premium Road Logistics",
    title: "Reliable Transport That Keeps Every Shipment Moving",
    subtitle:
      "Lucky Golden connects manufacturers, distributors, and trading hubs with disciplined fleet operations, shipment visibility, and time-bound dispatch.",
    badge: "24/7 Operations Desk",
    statLabel: "On-time commitment",
    statValue: "99.2%",
    backgroundClassName:
      "from-[#4a2118] via-[#7d2f1d] to-[#ad7944]",
  },
  {
    eyebrow: "Eight Strategic Hubs",
    title: "One Network From Indore To Western And Central India",
    subtitle:
      "Our operating model is built around high-frequency hub movements, dependable handoffs, and predictable lane planning across major industrial corridors.",
    badge: "8 Active Hubs",
    statLabel: "Major destinations",
    statValue: "120+",
    backgroundClassName:
      "from-[#2a2628] via-[#693126] to-[#996a42]",
  },
  {
    eyebrow: "Dedicated Fleet Support",
    title: "Fast Dispatch For Time-Critical And Repeat Routes",
    subtitle:
      "From regular milk runs to urgent market replenishment, Lucky Golden supports dedicated vehicles, booking coordination, and live operations communication.",
    badge: "Dedicated Vehicles",
    statLabel: "Fleet availability",
    statValue: "50+",
    backgroundClassName:
      "from-[#2a3340] via-[#7a2d24] to-[#b07a45]",
  },
];

export const homeHighlights: ServicePillar[] = [
  {
    title: "Corridor-Focused Movement",
    description:
      "Daily and scheduled departures across Indore, Ahmedabad, Surat, Mumbai, Jaipur, Nagpur, and connected industrial markets.",
    accent: "Route-first planning",
  },
  {
    title: "Operations With Accountability",
    description:
      "A single dispatch desk coordinates pickup timing, transit updates, escalation handling, and delivery closure for every booking.",
    accent: "Live coordination",
  },
  {
    title: "Warehousing And Hub Support",
    description:
      "Short-stay cargo handling, holding patterns, and regional consolidation support around core Lucky Golden operating points.",
    accent: "Hub-backed service",
  },
];

export const quickStats = [
  { label: "Operational hubs", value: "8" },
  { label: "Fleet and partner vehicles", value: "50+" },
  { label: "Primary lanes", value: "12+" },
  { label: "Support availability", value: "24/7" },
];

export const aboutPoints = [
  "Road transport and corridor distribution for industrial and commercial cargo.",
  "Regional hub operations designed around dispatch discipline and lane predictability.",
  "Dedicated account support for repeat customers and time-sensitive consignments.",
  "Live communication across booking, transit, delivery, and escalation stages.",
];

export const officeGroups: OfficeGroup[] = [
  {
    title: "Head Office",
    subtitle: "Core planning and dispatch control",
    offices: [
      {
        name: "Indore HQ",
        address: "Loha Mandi Operations Block, Indore, Madhya Pradesh 452001",
        mobile: ["+91 9876 543 210", "+91 9425 350 052"],
        phone: ["0731-4273150", "0731-4273156"],
        mapsUrl: "https://maps.google.com/?q=Loha+Mandi+Indore",
      },
      {
        name: "Dewas Naka Desk",
        address: "Lasudia Mori Corridor, Dewas Naka, Indore, Madhya Pradesh",
        mobile: ["+91 9425 193 111"],
        phone: ["0731-4023195"],
        mapsUrl: "https://maps.google.com/?q=Dewas+Naka+Indore",
      },
    ],
  },
  {
    title: "Gujarat Offices",
    subtitle: "Crossing, distribution, and industrial market coverage",
    offices: [
      {
        name: "Surat Hub",
        address:
          "Transport Nagar Cluster, Kadodara Road, Surat, Gujarat",
        mobile: ["+91 7879 155 647", "+91 7879 155 648"],
        mapsUrl: "https://maps.google.com/?q=Kadodara+Road+Surat",
      },
      {
        name: "Narol Desk",
        address: "Sarvoday Estate Belt, Narol, Ahmedabad, Gujarat",
        mobile: ["+91 7879 155 645", "+91 7879 155 646"],
        mapsUrl: "https://maps.google.com/?q=Narol+Ahmedabad",
      },
      {
        name: "Changodar Point",
        address:
          "Industrial Link Road, Changodar, Ahmedabad, Gujarat",
        mobile: ["+91 7879 155 646", "+91 9732 924 600"],
        mapsUrl: "https://maps.google.com/?q=Changodar+Ahmedabad",
      },
    ],
  },
  {
    title: "Maharashtra Offices",
    subtitle: "Market access across Mumbai and Bhiwandi corridors",
    offices: [
      {
        name: "Mumbai Office",
        address: "Katha Bazar Goods Belt, Mumbai, Maharashtra",
        mobile: ["+91 8369 833 433", "+91 8369 849 100"],
        phone: ["02223-437917", "02223-413613"],
        mapsUrl: "https://maps.google.com/?q=Katha+Bazar+Mumbai",
      },
      {
        name: "Bhiwandi Hub",
        address:
          "Godown Cluster, Purana Bus Stand Corridor, Bhiwandi, Maharashtra",
        mobile: ["+91 9967 888 003"],
        phone: ["02522-275450"],
        mapsUrl: "https://maps.google.com/?q=Bhiwandi+Maharashtra",
      },
    ],
  },
  {
    title: "Rajasthan Offices",
    subtitle: "North-west lane support and partner touchpoints",
    offices: [
      {
        name: "Bhilwara Office",
        address: "Transport Nagar, Bhilwara, Rajasthan",
        mobile: ["+91 9819 193 075"],
        phone: ["01482-243317"],
        mapsUrl: "https://maps.google.com/?q=Transport+Nagar+Bhilwara",
      },
      {
        name: "Pali Desk",
        address: "Transport Nagar, Pali Marwar, Rajasthan",
        mobile: ["+91 9314 120 319"],
        phone: ["02932-220319"],
        mapsUrl: "https://maps.google.com/?q=Pali+Marwar+Rajasthan",
      },
    ],
  },
];

export const routeCorridors: RouteCorridor[] = [
  {
    route: "Indore Crossing via Ahmedabad",
    serviceLine:
      "Daily commercial cargo support for Ahmedabad, Narol, Bakrol, and Changodar links.",
    bookingEnquiry: "+91 7879 155 646",
    operationsDesk: "0731-4980880",
  },
  {
    route: "Indore Crossing via Mumbai",
    serviceLine:
      "Fast movement for Mumbai market deliveries, Bhiwandi warehouse drops, and repeat retail replenishment.",
    bookingEnquiry: "+91 8369 833 433",
    operationsDesk: "0731-4092495",
  },
  {
    route: "Indore Crossing via Surat",
    serviceLine:
      "Fabric, packaging, and industrial shipments routed through Surat and connected Gujarat lanes.",
    bookingEnquiry: "+91 7879 155 647",
    operationsDesk: "0731-4273150",
  },
  {
    route: "Indore Crossing via Jaipur",
    serviceLine:
      "North-west market support with scheduled departures for Rajasthan industrial movement.",
    bookingEnquiry: "+91 9314 120 319",
    operationsDesk: "0731-4273156",
  },
  {
    route: "Indore Crossing via Nagpur",
    serviceLine:
      "Central India cargo circulation with time-bound intercity movement and operations follow-through.",
    bookingEnquiry: "+91 9425 193 111",
    operationsDesk: "0731-4023195",
  },
  {
    route: "Indore Crossing via Raipur",
    serviceLine:
      "Regional dispatch for plant material, repeat stock transfers, and network handoff shipments.",
    bookingEnquiry: "+91 9425 350 052",
    operationsDesk: "0731-4061815",
  },
];

export const portalFeatures: PortalFeature[] = [
  {
    title: "Dispatch Visibility",
    description:
      "Central access for vehicle movement updates, dispatch timing, and delivery follow-up.",
  },
  {
    title: "Operations Coordination",
    description:
      "A single workflow for branch desks, corridor bookings, escalation, and closure communication.",
  },
  {
    title: "Customer Access Requests",
    description:
      "Portal access is issued on request for customers needing structured booking or tracking support.",
  },
];
