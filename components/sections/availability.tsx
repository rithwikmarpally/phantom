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
            Selective work only.
            <br />
            <span className="text-[#5a6678]">Two openings this quarter.</span>
          </p>
          <p className="text-sm text-[#5a6678] leading-relaxed">
            I take on projects that are worth the focus.
            <br />
            If the timing isn&apos;t right, I&apos;ll tell you honestly.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
