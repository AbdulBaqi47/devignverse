import { Suspense } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { TechStack } from "@/components/sections/tech-stack";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main className="relative mx-auto flex w-full max-w-6xl flex-col px-4">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <TechStack />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Footer />
      </main>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(ellipse_at_top,_rgba(82,86,255,0.3),_transparent_60%)]" />
    </div>
  );
}
