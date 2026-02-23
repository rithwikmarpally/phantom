"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

export default function Availability() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative rounded-2xl border border-white/5 bg-white/[0.01] p-10 md:p-14"
      >
        {/* Subtle corner glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-violet-500/10 blur-[80px] pointer-events-none" />

        <div className="relative space-y-6 max-w-lg">
          <p className="text-sm tracking-[0.2em] uppercase text-[#5a6678]">
            Availability
          </p>
          <p className="text-2xl sm:text-3xl font-light leading-relaxed text-white/90">
            We take on a limited number of projects
            <br />
            <span className="text-[#5a6678]">so every client gets our full attention.</span>
          </p>
          <p className="text-sm text-[#5a6678] leading-relaxed">
            A few spots are open this quarter.
            <br />
            Reach out and let&apos;s see if we&apos;re a good fit.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
