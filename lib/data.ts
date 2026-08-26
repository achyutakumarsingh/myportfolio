export const profile = {
  name: "Achyuta Kumar Singh",
  first: "Achyuta",
  last: "Singh",
  role: "Frontend Engineer",
  tagline: ["Designs the interface.", "Ships the code."],
  status: "Open to internships",
  based: "Prayagraj, IN",
  at: "IIIT Allahabad · IT",
  currently: "IIIT Allahabad · B.Tech IT · Prayagraj",
  since: 2025,
  timezone: "Asia/Kolkata",
  tzLabel: "IST",
  email: "achyutasingh17@gmail.com",
  github: "https://github.com/achyutakumarsingh",
  githubHandle: "@achyutakumarsingh",
  linkedin: "https://linkedin.com/in/achyuta-singh",
  linkedinHandle: "/in/achyuta-singh",
  phone: "+91 70297 54844",
  cgpa: "9.1 / 10",
};

/** Cycled by the typewriter in the hero. */
export const roles = [
  "Competitive Programmer",
  "DSA Enthusiast",
  "Problem Solver",
];

export const nav = [
  { num: "01", label: "Work", href: "#work" },
  { num: "02", label: "Craft", href: "#craft" },
  { num: "03", label: "Path", href: "#path" },
  { num: "04", label: "About", href: "#about" },
  { num: "05", label: "Off", href: "#offscreen" },
  { num: "06", label: "Contact", href: "#contact" },
];

export type Project = {
  id: string;
  num: string;
  title: string;
  /** Rendered italic, immediately after the title. */
  tagline?: string;
  role: string;
  stack: string;
  year: string;
  href: string;
  repo: string;
  /** Key into the preview diagram map. */
  preview: string;
};

export const projects: Project[] = [
  {
    id: "sahayak",
    num: "01",
    title: "Sahayak",
    tagline: "",
    role: "Design · Eng · AI",
    stack: "Gemini · RAG · Multilingual",
    year: "2026",
    href: "https://frontend-three-opal-42.vercel.app/en",
    repo: "https://github.com/achyutakumarsingh/sahayak",
    preview: "sahayak",
  },
  {
    id: "janai",
    num: "02",
    title: "Jan",
    tagline: "AI",
    role: "Product · Design · Eng",
    stack: "React 19 · TS · Gemini",
    year: "2026",
    href: "https://github.com/achyutakumarsingh/JanAI",
    repo: "https://github.com/achyutakumarsingh/JanAI",
    preview: "janai",
  },
  {
    id: "cognify",
    num: "03",
    title: "Cognify",
    tagline: "",
    role: "ML · Eng · Product",
    stack: "XGBoost · Conformal · Streamlit",
    year: "2026",
    href: "https://cognifyaiprediction.streamlit.app/",
    repo: "https://github.com/achyutakumarsingh/cognify",
    preview: "cognify",
  },
  {
    id: "civic",
    num: "04",
    title: "Civic",
    tagline: " Sense",
    role: "Product · Design · Eng",
    stack: "React · FastAPI · PostGIS",
    year: "2026",
    href: "https://hackathon-steel-tau.vercel.app",
    repo: "https://github.com/achyutakumarsingh/Civic-Issue-Reporting-Platform",
    preview: "civic",
  },
  {
    id: "portfolio",
    num: "05",
    title: "Portfolio",
    tagline: "",
    role: "Design · Eng · Perf",
    stack: "Next.js · TS · Motion",
    year: "2026",
    href: "https://portfolio-ebon-nine-19.vercel.app",
    repo: "https://github.com/achyutakumarsingh/portfolio",
    preview: "portfolio",
  },
];

export type Skill = { name: string; sub?: string; w: number };

export const skillsSolver: Skill[] = [
  { name: "C++", sub: "competitive programming", w: 92 },
  { name: "Data structures & algorithms", w: 90 },
  { name: "Object-oriented programming", w: 85 },
  { name: "DBMS & SQL", w: 80 },
  { name: "Operating systems", w: 74 },
  { name: "Computer networks", w: 70 },
];

export const skillsEngineer: Skill[] = [
  { name: "TypeScript / JavaScript", sub: "ES2024+", w: 90 },
  { name: "React · Next.js App Router", w: 92 },
  { name: "HTML / CSS · animation", w: 94 },
  { name: "Tailwind · design systems", w: 86 },
  { name: "FastAPI · Python", sub: "backends · ML", w: 75 },
  { name: "Figma → production handoff", w: 78 },
];

export const tooling = [
  "Git",
  "GitHub",
  "npm",
  "pnpm",
  "Vite",
  "ESLint",
  "Vercel",
  "Supabase",
  "Prisma",
  "PostGIS",
  "Docker",
  "REST APIs",
];

export type Milestone = {
  id: string;
  end: string;
  start: string;
  role: string;
  company: string;
  team?: string;
  location: string;
  highlight?: string;
  current?: boolean;
  bullets: string[];
};

export const path: Milestone[] = [
  {
    id: "iiita",
    end: "Present",
    start: "Jul 2025",
    role: "B.Tech, Information Technology",
    company: "IIIT Allahabad",
    team: "IT",
    location: "Prayagraj, India",
    highlight: "CGPA 9.1",
    current: true,
    bullets: [
      "Coursework across data structures, algorithms, operating systems, DBMS, computer networks and software engineering — holding a 9.1 CGPA.",
      "Core contributor in institutional programming clubs, running mentoring sessions for junior students.",
      "Shipped five projects alongside coursework, from a PostGIS civic platform to a multilingual AI assistant.",
    ],
  },
  {
    id: "oosc",
    end: "Aug 2026",
    start: "Jun 2026",
    role: "Sahayak — AI for public good",
    company: "OOSC 4.0",
    team: "PS-5",
    location: "Open source · India",
    highlight: "8 modules",
    bullets: [
      "Built a multilingual, offline-resilient AI platform serving eight underserved communities from a single shared intelligence layer.",
      "Enforced a strict grounding rule — the assistant refuses rather than fabricates when reliable data is unavailable.",
      "TypeScript frontend over a Python reasoning service, containerised and deployed to Vercel.",
    ],
  },
  {
    id: "indoswiss",
    end: "Apr 2026",
    start: "Mar 2026",
    role: "Third place, intl. hackathon",
    company: "Indo-Swiss",
    team: "ETH Zurich",
    location: "IIIT Allahabad × Manipal",
    highlight: "3rd / intl.",
    bullets: [
      "Placed third in a jointly conducted international hackathon in the first year of study.",
      "Designed and shipped the full interface under a fixed build window.",
    ],
  },
  {
    id: "cp",
    end: "Ongoing",
    start: "2025",
    role: "Competitive programming",
    company: "Codeforces",
    team: "CodeChef",
    location: "Online",
    highlight: "Pupil · 2★",
    bullets: [
      "Pupil on Codeforces as achyutasingh17.",
      "2★ on CodeChef as achyutasingh.",
      "Contest practice in C++ — the habit behind every clean data model I write.",
    ],
  },
  {
    id: "jee",
    end: "2025",
    start: "2024",
    role: "99.70 percentile · AIR 4,788",
    company: "JEE Main",
    location: "National entrance exam",
    highlight: "top 0.3%",
    bullets: [
      "Ranked 4,788 among more than 1.47 million candidates.",
      "A year of measuring progress in daily deltas rather than outcomes.",
    ],
  },
  {
    id: "school",
    end: "2023",
    start: "2012",
    role: "Class XII & X, Science",
    company: "Zoom International",
    team: "St. Xavier's",
    location: "Patna, India",
    highlight: "91% · 96.6%",
    bullets: [
      "Physics, chemistry and mathematics, alongside self-taught web development.",
      "Eleven years at the same desk. Where the habit of finishing things started.",
    ],
  },
];

export const picks = [
  { q: "coffee or chai?", a: "Coffee", b: "Chai", pick: 1 },
  { q: "C++ or TS?", a: "C++", b: "TS", pick: 1 },
  { q: "tabs or spaces?", a: "Tabs", b: "Spaces", pick: 1 },
  { q: "ship or polish?", a: "Ship", b: "Polish", pick: 0 },
  { q: "Figma or code?", a: "Figma", b: "Code", pick: 1 },
  { q: "contest or build?", a: "Contest", b: "Build", pick: 1 },
];

export const poem = {
  year: "2026",
  title: ["between", "two windows"],
  lines: [
    "one window has a cursor in it,",
    "blinking like it has all night.",
    "the other has the hostel corridor,",
    "and Prayagraj going quiet at 2am.",
    " ",
    "both of them are open.",
    "neither of them is finished.",
  ],
  sign: "— aks",
};

export const photo = {
  /** Drop a portrait at /public/portrait.jpg to replace the placeholder frame. */
  src: "/portrait.jpg",
  coords: ["25°25′N", "81°50′E"],
  mark: "AKS / Prayagraj",
};
