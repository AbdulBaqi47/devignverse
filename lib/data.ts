import { type StaticImageData } from "next/image";
import Aurora from "@/public/images/project-aurora.svg";
import Cascade from "@/public/images/project-cascade.svg";
import Nebula from "@/public/images/project-nebula.svg";
import Prism from "@/public/images/project-prism.svg";
import { BrainCircuit, Code, Palette, Workflow } from "lucide-react";

type IconType = typeof BrainCircuit;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" }
];

export type TimelineItem = {
  title: string;
  period: string;
  summary: string;
  highlight: string;
};

export const timeline: TimelineItem[] = [
  {
    title: "Devign Verse launches",
    period: "2018",
    summary: "We began as a tight team of creators obsessed with experience design.",
    highlight: "Crafted our first multi-platform product launch in under eight weeks."
  },
  {
    title: "Scaling digital innovation",
    period: "2020",
    summary: "Expanded into AI-assisted product strategy and cross-platform engineering.",
    highlight: "Introduced an internal AI lab to prototype conversational experiences."
  },
  {
    title: "Global partnerships",
    period: "2022",
    summary: "Collaborated with hyper-growth companies across three continents.",
    highlight: "Delivered immersive commerce platforms serving 4M+ monthly users."
  },
  {
    title: "Experiences that learn",
    period: "2024",
    summary: "Created adaptive UX systems that evolve with real-time intelligence.",
    highlight: "90% client retention with measurable uplift in engagement and revenue."
  }
];

export type ValueCard = {
  title: string;
  description: string;
};

export const values: ValueCard[] = [
  {
    title: "Design with intent",
    description: "Every interaction is mapped to business momentum, not just visual delight."
  },
  {
    title: "Build for longevity",
    description: "Modular architectures designed to evolve, scale, and self-optimize."
  },
  {
    title: "Ship with humanity",
    description: "Inclusive experiences that feel human, adaptive, and genuinely useful."
  }
];

export type ServiceCard = {
  title: string;
  description: string;
  icon: IconType;
  accent: string;
};

export const services: ServiceCard[] = [
  {
    title: "Web Experiences",
    description: "Enterprise-ready platforms engineered in Next.js with cinematic motion.",
    icon: Code,
    accent: "from-blue-500/20 to-transparent"
  },
  {
    title: "Product Design",
    description: "End-to-end product discovery, UX, and UI systems built for clarity and conversion.",
    icon: Palette,
    accent: "from-slate-900/15 to-transparent"
  },
  {
    title: "AI Interfaces",
    description: "Conversational journeys, intelligent copilots, and ML-backed analytics.",
    icon: BrainCircuit,
    accent: "from-emerald-500/15 to-transparent"
  },
  {
    title: "Immersive Apps",
    description: "Native-feel PWA and mobile apps with fluid gesture-driven experiences.",
    icon: Workflow,
    accent: "from-orange-500/15 to-transparent"
  }
];

export type PortfolioProject = {
  title: string;
  slug: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  outcome: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Aurora Commerce Cloud",
    slug: "aurora-commerce-cloud",
    description: "A headless commerce OS with predictive merchandising and adaptive storefronts.",
    image: Aurora,
    tags: ["Next.js", "Commerce", "AI"],
    outcome: "22% conversion uplift with real-time personalization."
  },
  {
    title: "Cascade Insight Studio",
    slug: "cascade-insight-studio",
    description: "B2B analytics cockpit offering immersive data storytelling and automation.",
    image: Cascade,
    tags: ["React", "Data", "Motion"],
    outcome: "Reduced reporting time by 5x for enterprise teams."
  },
  {
    title: "Nebula Health Portal",
    slug: "nebula-health-portal",
    description: "Patient-first telehealth ecosystem with guided care and 3D biometrics.",
    image: Nebula,
    tags: ["Healthcare", "Next.js", "3D"],
    outcome: "Expanded virtual care adoption to 68% of active members."
  },
  {
    title: "Prism Creator Suite",
    slug: "prism-creator-suite",
    description: "Collaborative design workspace with realtime AI co-creation tools.",
    image: Prism,
    tags: ["Design", "Collaboration", "AI"],
    outcome: "Enabled teams to ship concept tests 3x faster."
  }
];

export type TechItem = {
  label: string;
  category: string;
};

export const techStack: TechItem[] = [
  { label: "React", category: "Frontend" },
  { label: "Next.js", category: "Frontend" },
  { label: "TypeScript", category: "Languages" },
  { label: "Laravel", category: "Backend" },
  { label: "Node.js", category: "Backend" },
  { label: "Vue", category: "Frontend" },
  { label: "Tailwind", category: "Styling" },
  { label: "Figma", category: "Design" },
  { label: "Framer Motion", category: "Motion" },
  { label: "GSAP", category: "Motion" }
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", aria: "LinkedIn" },
  { label: "Dribbble", href: "https://dribbble.com", aria: "Dribbble" },
  { label: "Behance", href: "https://behance.net", aria: "Behance" }
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
