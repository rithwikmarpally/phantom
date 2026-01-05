import Availability from "@/components/sections/availability";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Proof from "@/components/sections/proof";
import Services from "@/components/sections/services";
import Why from "@/components/sections/why";
import Work from "@/components/sections/work";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.05),transparent_35%),radial-gradient(circle_at_70%_0%,rgba(56,189,248,0.05),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />
      <Hero />
      <Proof />
      <Services />
      <Why />
      <Work />
      <Availability />
      <Contact />
    </main>
  );
}
