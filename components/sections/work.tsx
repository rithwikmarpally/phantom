"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";

const projects = [
  {
    id: "charaka",
    title: "Charaka",
    hook: "An AI-powered health and wellness platform.",
    story: "We designed and built Charaka from the ground up \u2014 a smart platform that uses AI to deliver personalised health insights. Built with modern web tech and seamless UX.",
    signal: "AI + Health",
    url: "https://charaka.app",
  },
  {
    id: "atmiq",
    title: "Atmiq",
    hook: "Intelligent infrastructure for next-gen applications.",
    story: "Atmiq is our take on AI infrastructure done right \u2014 scalable, observable, and built for teams that want to ship AI features fast without reinventing the wheel.",
    signal: "AI Infra",
    url: "https://atmiq.dev",
  },
];

const sampleSites = [
  { label: "Portfolio \u2014 Coral", url: "https://port-phi-coral.vercel.app/" },
  { label: "Portfolio \u2014 Rho", url: "https://port3-rho.vercel.app/" },
  { label: "Business Portfolio", url: "https://port2business.vercel.app/" },
  { label: "Haruth", url: "https://haruth.vercel.app/" },
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
            Our work
          </p>
          <p className="text-xl text-white/60 max-w-lg">
            Real products we&rsquo;ve shipped for real clients.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-4">
          {projects.map((item, idx) => (
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
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 mt-1 text-xs tracking-wide text-violet-400/60 hover:text-violet-400 transition-colors duration-300 border border-white/10 rounded-full px-3 py-1"
                >
                  Visit &rarr;
                </Link>
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

        {/* Sample websites gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-[#5a6678]">
            Sample websites we&rsquo;ve built
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {sampleSites.map((site) => (
              <Link
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.01] px-5 py-4 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-400"
              >
                <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                  {site.label}
                </span>
                <span className="text-xs text-[#5a6678] group-hover:text-violet-400/60 transition-colors duration-300">
                  View &rarr;
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
