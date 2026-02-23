"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const fragments = [
  "We explain everything in plain English — no confusing tech jargon.",
  "Fast delivery without cutting corners on quality.",
  "We build things that scale as your business grows.",
  "Every line of code is tied to a real business goal.",
];

export default function Why() {
  return (
    <Section>
      <div className="space-y-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-[#5a6678] mb-8">
            How we work
          </p>
          <p className="text-2xl sm:text-3xl font-light leading-relaxed text-white/90">
            We don&apos;t just write code.
            <br />
            <span className="text-[#5a6678]">We solve real problems for real people.</span>
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {fragments.map((fragment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group flex items-start gap-4"
            >
              <span className="mt-2 h-px w-6 bg-white/10 group-hover:w-10 group-hover:bg-violet-400/40 transition-all duration-500" />
              <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                {fragment}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
