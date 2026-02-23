"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const domains = [
  { id: "web", label: "Websites", description: "Landing pages, web apps & platforms" },
  { id: "mobile", label: "Mobile Apps", description: "iOS & Android apps that users love" },
  { id: "ai", label: "AI Agents", description: "Chatbots, assistants & automations" },
  { id: "infra", label: "AI Infra", description: "Pipelines, deployment & monitoring" },
  { id: "saas", label: "SaaS", description: "Subscription products & dashboards" },
  { id: "mvp", label: "MVPs", description: "Quick prototypes to test your idea" },
];

export default function Proof() {
  return (
    <Section>
      <div className="space-y-20">
        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-2xl sm:text-3xl font-light leading-relaxed text-white/90">
            Anyone can write code.
            <br />
            <span className="text-[#5a6678]">We build software that actually moves your business forward.</span>
          </p>
        </motion.div>

        {/* Domain grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {domains.map((domain, idx) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-[#08090f] p-8 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="space-y-3">
                <span className="text-xs tracking-[0.2em] uppercase text-violet-400/60">
                  {domain.label}
                </span>
                <p className="text-sm text-[#5a6678] group-hover:text-white/60 transition-colors duration-500">
                  {domain.description}
                </p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/5 group-hover:bg-violet-400/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
