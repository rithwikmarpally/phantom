"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";

const explorations = [
  {
    id: "billing",
    title: "The invisible leak",
    hook: "A billing system was quietly losing revenue.",
    story: "Legacy infrastructure dropped invoices at scale. Rebuilt the pipeline with event-driven architecture. Recovered 7% in 60 days.",
    signal: "Infrastructure",
  },
  {
    id: "agent",
    title: "The support bottleneck",
    hook: "A team was drowning in repetitive requests.",
    story: "Deployed a guardrailed AI agent with human-in-the-loop approvals. Reduced handling time by 63% while keeping compliance intact.",
    signal: "Intelligence",
  },
  {
    id: "mobile",
    title: "The funding milestone",
    hook: "A founder needed a product before the pitch.",
    story: "Shipped a cross-platform mobile app in 8 weeks. Hit 30k users in month one. Investors saw clear retention metrics.",
    signal: "Velocity",
  },
];

export default function Work() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Section>
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-[#5a6678] mb-4">
            Selected explorations
          </p>
          <p className="text-xl text-white/60 max-w-lg">
            Problems I found interesting.
          </p>
        </motion.div>

        <div className="space-y-4">
          {explorations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-6 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs tracking-[0.15em] uppercase text-violet-400/50">
                      {item.signal}
                    </span>
                  </div>
                  <h3 className="text-lg text-white/80 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5a6678]">{item.hook}</p>
                </div>
                <div className="w-2 h-2 mt-2 rounded-full bg-white/5 group-hover:bg-violet-400/40 transition-colors duration-500" />
              </div>

              <AnimatePresence>
                {active === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm text-white/50 leading-relaxed border-t border-white/5 mt-4">
                      {item.story}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
