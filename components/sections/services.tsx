"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Services() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 120, rotateX: 8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section id="services" className="mt-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="Full-stack teams delivering premium products from concept to launch."
          description="Our cross-disciplinary pods create immersive experiences with rigorous engineering and motion systems."
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassCard
                key={service.title}
                ref={(node) => {
                  cardsRef.current[index] = node;
                }}
                className="group relative h-full p-8"
                glow
              >
                <div
                  className={cn(
                    "absolute -right-12 -top-12 h-48 w-48 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100",
                    "bg-[radial-gradient(circle,_rgba(196,255,63,0.45)_0%,_rgba(12,2,26,0)_80%)]",
                    service.accent
                  )}
                />
                <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(199,255,63,0.08))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-transparent bg-[linear-gradient(140deg,#c4ff3f,#8f5eff)] text-[#100222] shadow-[0_18px_40px_rgba(9,0,23,0.45)]">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">{service.title}</h3>
                    <p className="text-sm leading-6 text-[var(--muted)]">{service.description}</p>
                  </div>
                  <div
                    className="relative mt-6 h-1 rounded-full bg-gradient-to-r from-transparent via-[rgba(196,255,63,0.7)] to-transparent"
                    style={{ boxShadow: "0 20px 50px rgba(196, 255, 63, 0.25)" }}
                  />
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
