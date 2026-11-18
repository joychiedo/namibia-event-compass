export type EventCategory =
  | "Music & Concerts"
  | "Festivals"
  | "Business & Networking"
  | "Arts & Culture"
  | "Food & Lifestyle"
  | "Sports & Recreation"
  | "Workshops & Learning";

export type TicketType = {
  id: string;
  name: string;
  description: string;
  price: number;
  available: number;
};

export type EventStatus = "published" | "draft" | "pending";

export type EventItem = {
  id: string;
  slug: string;
  title: string;
  category: EventCategory;
  date: string;
  startTime: string;
  endTime: string;
  venue: string;
  city: string;
  description: string;
  organiser: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  status: EventStatus;
  tickets: TicketType[];
};

export const categories: EventCategory[] = [
  "Music & Concerts",
  "Festivals",
  "Business & Networking",
  "Arts & Culture",
  "Food & Lifestyle",
  "Sports & Recreation",
  "Workshops & Learning",
];

export const locations = ["Windhoek", "Swakopmund", "Walvis Bay", "Oshakati", "Otjiwarongo", "Lüderitz"];

export const demoEvents: EventItem[] = [
  {
    id: "evt-desert-sounds",
    slug: "desert-sounds-live",
    title: "Desert Sounds Live",
    category: "Music & Concerts",
    date: "2026-11-28",
    startTime: "16:00",
    endTime: "23:00",
    venue: "Omeya Golf Estate",
    city: "Windhoek",
    description: "An open-air evening of Namibian voices, live bands and wide-sky sunset listening. Bring a friend, find a spot on the grass, and stay for the last song beneath the highland stars.",
    organiser: "Copper & Clay Events (demo)",
    image: "/images/events/namibia-festival.jpg",
    imageAlt: "Crowd gathered at an outdoor music festival as the sun sets over Namibia",
    featured: true,
    status: "published",
    tickets: [
      { id: "general", name: "General admission", description: "Lawn access and all performances", price: 280, available: 164 },
      { id: "front-row", name: "Front lawn", description: "Closer stage access and welcome drink", price: 520, available: 36 },
    ],
  },
  {
    id: "evt-innovation",
    slug: "namibia-business-innovation-summit",
    title: "Namibia Business & Innovation Summit",
    category: "Business & Networking",
    date: "2026-12-05",
    startTime: "08:30",
    endTime: "17:00",
    venue: "The Weinberg Windhoek",
    city: "Windhoek",
    description: "A focused day for founders, operators and curious problem-solvers. Hear practical stories from across Namibia, trade ideas over lunch and leave with new people to call.",
    organiser: "Northstar Forum (demo)",
    image: "/images/events/windhoek-summit.jpg",
    imageAlt: "Professionals sharing ideas at a sunlit conference venue in Windhoek",
    featured: true,
    status: "published",
    tickets: [
      { id: "summit-standard", name: "Summit pass", description: "All sessions, lunch and networking", price: 850, available: 72 },
      { id: "summit-student", name: "Student pass", description: "Valid student identification required", price: 420, available: 24 },
    ],
  },
  {
    id: "evt-coastal-food",
    slug: "swakopmund-coastal-food-festival",
    title: "Swakopmund Coastal Food Festival",
    category: "Food & Lifestyle",
    date: "2026-12-12",
    startTime: "11:00",
    endTime: "20:00",
    venue: "Mole Beach Promenade",
    city: "Swakopmund",
    description: "A relaxed coastal gathering of local kitchens, fresh Atlantic flavours and small-batch makers. Wander between tasting tables, meet the people behind the food and settle in for a sea-breeze afternoon.",
    organiser: "Salt & Sand Collective (demo)",
    image: "/images/events/coastal-food.jpg",
    imageAlt: "Chefs serving regional dishes at a lively coastal food festival",
    status: "published",
    tickets: [
      { id: "tasting", name: "Tasting entry", description: "Festival access and three tasting tokens", price: 190, available: 112 },
      { id: "coastal-table", name: "Coastal table", description: "Entry, six tokens and reserved shared table", price: 460, available: 18 },
    ],
  },
  {
    id: "evt-creative",
    slug: "creative-namibia-exhibition",
    title: "Creative Namibia Exhibition",
    category: "Arts & Culture",
    date: "2026-12-19",
    startTime: "10:00",
    endTime: "18:00",
    venue: "National Art Gallery of Namibia",
    city: "Windhoek",
    description: "Meet a new generation of Namibian makers through painting, photography, textiles and conversation. The exhibition pairs a considered gallery visit with short artist-led walkthroughs.",
    organiser: "Studio Nami (demo)",
    image: "/images/events/creative-exhibition.jpg",
    imageAlt: "Visitors discover contemporary Namibian artwork in a bright gallery",
    status: "published",
    tickets: [{ id: "gallery", name: "Gallery entry", description: "Exhibition access and one artist walkthrough", price: 120, available: 85 }],
  },
  {
    id: "evt-entrepreneurs",
    slug: "young-entrepreneurs-conference",
    title: "Young Entrepreneurs Conference",
    category: "Business & Networking",
    date: "2027-01-16",
    startTime: "09:00",
    endTime: "16:30",
    venue: "Oshakati Independence Stadium Conference Hall",
    city: "Oshakati",
    description: "A practical gathering for emerging business owners in northern Namibia, featuring useful workshops, peer-led conversations and space to build a stronger local network.",
    organiser: "Forward North Network (demo)",
    image: "/images/events/windhoek-summit.jpg",
    imageAlt: "Namibian business leaders meeting in a bright modern conference venue",
    status: "published",
    tickets: [
      { id: "founder", name: "Founder pass", description: "Talks, workshops and lunch", price: 540, available: 104 },
      { id: "networking", name: "Networking pass", description: "Full programme plus evening mixer", price: 720, available: 40 },
    ],
  },
  {
    id: "evt-desert-trail",
    slug: "coastal-dunes-trail-day",
    title: "Coastal Dunes Trail Day",
    category: "Sports & Recreation",
    date: "2027-01-24",
    startTime: "06:30",
    endTime: "12:00",
    venue: "Dune 7 Visitor Area",
    city: "Walvis Bay",
    description: "Start early, move at your own pace and take in the quiet scale of the coast. This guided outdoor day includes marked routes, a water station and a relaxed finish together.",
    organiser: "Open Horizon Outdoors (demo)",
    image: "/images/events/desert-trail.jpg",
    imageAlt: "Hikers cross a Namibian coastal dune ridge at sunrise",
    status: "published",
    tickets: [{ id: "trail", name: "Trail entry", description: "Guided route and finish-line refreshments", price: 240, available: 56 }],
  },
  {
    id: "evt-workshop",
    slug: "makers-of-namibia-workshop",
    title: "Makers of Namibia: Open Workshop",
    category: "Workshops & Learning",
    date: "2027-02-07",
    startTime: "09:30",
    endTime: "13:30",
    venue: "The Project Room",
    city: "Otjiwarongo",
    description: "Spend a morning exploring material, pattern and making with local creatives. Small groups keep the session hands-on, welcoming and full of room to experiment.",
    organiser: "Hands & Earth Studio (demo)",
    image: "/images/events/design-workshop.jpg",
    imageAlt: "Participants learning a hands-on weaving technique at a Namibian workshop",
    status: "published",
    tickets: [{ id: "maker-seat", name: "Workshop seat", description: "All materials and a light morning tea", price: 360, available: 16 }],
  },
  {
    id: "evt-luderitz-culture",
    slug: "luderitz-harbour-culture-weekend",
    title: "Lüderitz Harbour Culture Weekend",
    category: "Festivals",
    date: "2027-02-14",
    startTime: "12:00",
    endTime: "21:00",
    venue: "Waterfront Market Square",
    city: "Lüderitz",
    description: "A weekend programme of local music, food and craft along the harbour. Take a slow afternoon walk, find something handmade and stay as the waterfront lights come on.",
    organiser: "Harbour House Society (demo)",
    image: "/images/events/coastal-food.jpg",
    imageAlt: "A coastal food and culture gathering beside the Atlantic in Namibia",
    status: "published",
    tickets: [{ id: "harbour", name: "Weekend entry", description: "Access to both days of the programme", price: 160, available: 90 }],
  },
];

export function getDemoEvent(slug: string) {
  return demoEvents.find((event) => event.slug === slug);
}

export function formatNad(amount: number) {
  return new Intl.NumberFormat("en-NA", {
    style: "currency",
    currency: "NAD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatEventDate(value: string, options: Intl.DateTimeFormatOptions = {}) {
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat("en-NA", {
    day: "numeric",
    month: "short",
    year: "numeric",
    ...options,
  }).format(date);
}