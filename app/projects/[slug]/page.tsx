import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project not found | Devign Verse",
      description: "The requested project does not exist."
    };
  }

  return {
    title: `${project.title} | Devign Verse`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image.src,
          width: 1200,
          height: 630,
          alt: project.title
        }
      ]
    }
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative mx-auto mt-32 flex w-full max-w-5xl flex-col gap-10 px-4 pb-24">
      <div className="surface-card-strong rounded-3xl p-10">
        <p className="text-xs uppercase tracking-[0.6em] text-[var(--accent-secondary)]">Case study</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--foreground)]">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-base text-[var(--muted)]">{project.description}</p>
        <p className="mt-6 text-sm uppercase tracking-[0.4em] text-[var(--accent-secondary)]">{project.outcome}</p>
      </div>
      <div className="surface-card relative h-[420px] overflow-hidden rounded-3xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="surface-card rounded-3xl p-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Approach</h2>
          <p className="mt-4 text-sm text-[var(--muted)]">
            We partnered with stakeholders to architect a modular platform, defined an experience blueprint, and choreographed motion to humanize complex flows.
          </p>
        </div>
        <div className="surface-card rounded-3xl p-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Technology</h2>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Next.js App Router, TypeScript, Framer Motion, and headless CMS integrations drove a resilient, scalable foundation with near-instant performance.
          </p>
        </div>
      </div>
    </div>
  );
}

