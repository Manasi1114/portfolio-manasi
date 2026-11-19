// Shared site facts used across pages.
import fs from "node:fs";

export const EMAIL = "manasishrivastava362@gmail.com";
export const INSTAGRAM = { url: "https://www.instagram.com/maa_nuh_see/", handle: "@maa_nuh_see" };

// Put your CV at public/cv.pdf and every "Download CV" button links to it.
// Until then the buttons open an email asking for the CV.
const hasCv = fs.existsSync(new URL("../../public/cv.pdf", import.meta.url));
export const CV_URL = hasCv
  ? "/cv.pdf"
  : `mailto:${EMAIL}?subject=${encodeURIComponent("CV request")}`;

export const NAV = [
  { label: "Work", href: "/work", section: "work" },
  { label: "Writing", href: "/blog", section: "writing" },
  { label: "Notes", href: "/design", section: "notes" },
  { label: "About", href: "/about", section: "about" },
];

// Everything else, for the phone menu and the sitemap.
export const MORE = [
  { label: "Poetry", href: "/poetry" },
  { label: "Quotes", href: "/quotes" },
  { label: "Bookhouse", href: "/bookhouse" },
  { label: "Magazine", href: "/magazine" },
  { label: "Socials", href: "/socials" },
  { label: "Sitemap", href: "/sitemap" },
];

export const PROJECTS = [
  { n: "01", title: "Hotel booking website", meta: "· Designer & publisher · 2026" },
  { n: "02", title: "AI authentication", meta: "· Concept & design · 2026" },
  { n: "03", title: "Urban forests book", meta: "· Concept & design · 2026" },
];

export const BOOKS = [
  ["Shaping Things", "Bruce Sterling"],
  ["Northanger Abbey", "Jane Austen"],
  ["The Fruits of the Earth", "André Gide"],
  ["The Hero with a Thousand Faces", "Joseph Campbell"],
  ["Magic Lessons", "Alice Hoffman"],
  ["The Unwanted Gaze", "Jeffrey Rosen"],
  ["Pachinko", "Min Jin Lee"],
  ["The Vegetarian", "Han Kang"],
  ["The Winter People", "Jennifer McMahon"],
  ["Station Eleven", "Emily St. John Mandel"],
];

const DAU = " · DAU campus, Gandhinagar";
export const PHOTOS = [
  [["dau9", "Morning light through the trees"], ["dau1", "Benches outside the building"]],
  [["dau2", "Small white blossoms"], ["dau3", "A window through the bark"], ["dau4", "Looking up into the branches"]],
  [["dau11", "Shade on the lawn"], ["uni7", "Orange wall, round window"]],
  [["dau12", "Leaves against a pale sky"]],
  [["dau7", "Red blooms in the shade"], ["uni4", "An old chair against a warm wall"], ["light2", "Window shadows at noon"]],
  [["dau10", "The tree-lined road"], ["dau8", "Dry leaves in the grass"]],
].map((row) => row.map(([file, cap]) => ({ src: `/web/${file}.jpg`, caption: cap + DAU })));
