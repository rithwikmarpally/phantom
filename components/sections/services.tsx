"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";

const ideas = [
  {
    id: "websites",
    trigger: "Websites",
    expanded: "Beautiful, fast websites and web apps that look great on every device. Whether you need a landing page, a business site, or a full web platform \u2014 we build it from scratch, tailored to your brand.",
    image: "/images/web.jpg",
  },
  {
    id: "ai-agents",
    trigger: "AI Agents",
    expanded: "Smart assistants that handle tasks for you \u2014 customer support bots, data processors, workflow automators. We build AI agents that save your team hours of manual work every day.",
    image: "/images/intelligence.jpg",
  },
  {
    id: "ai-infra",
    trigger: "AI Infrastructure",
    expanded: "The behind-the-scenes tech that powers AI products \u2014 data pipelines, model deployment, monitoring, and scaling. We set up the foundation so your AI actually works in production.",
    image: "/images/autonomous.jpg",
  },
  {
    id: "projects",
    trigger: "Custom Projects",
    expanded: "Got an idea that doesn\u2019t fit a box? Mobile apps, SaaS platforms, internal tools, MVPs for startups \u2014 we take your concept and turn it into a working product, end to end.",
    image: "/images/interface.jpg",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Section>
      <div className="space-y-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16">
          {/* Left: Accordion list */}
          <div className="space-y-1">
            {ideas.map((idea, idx) => (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group border-b border-white/5 py-6 cursor-pointer"
                onClick={() => setExpanded(expanded === idea.id ? null : idea.id)}
                onMouseEnter={() => setHovered(idea.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-light text-white/80 group-hover:text-white transition-colors duration-300">
                    {idea.trigger}
                  </span>
                  <motion.span
                    animate={{ rotate: expanded === idea.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl text-white/30 group-hover:text-violet-400/60 transition-colors duration-300"
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence>
                  {expanded === idea.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[#5a6678] max-w-xl leading-relaxed">
                        {idea.expanded}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right: Image reveal container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
            style={{ perspective: "1000px", perspectiveOrigin: "center center" }}
          >
            <motion.div 
              className="sticky top-24 aspect-[3/2] min-h-[450px] rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-18deg) rotateX(8deg) translateZ(20px)",
                boxShadow: `
                  0 50px 100px -20px rgba(0, 0, 0, 0.7),
                  -30px 0 60px -30px rgba(139, 92, 246, 0.25),
                  0 0 120px -30px rgba(59, 130, 246, 0.15),
                  inset 0 1px 0 0 rgba(255, 255, 255, 0.05)
                `,
              }}
              whileHover={{
                transform: "rotateY(-10deg) rotateX(4deg) translateZ(40px) scale(1.03)",
                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              {/* 3D depth layer - creates thickness illusion */}
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  transform: "translateZ(-10px)",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.05))",
                }}
              />
              
              {/* Shine/reflection effect on the edge */}
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
              
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-transparent to-blue-500/8" />
              
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-30 grid-bg" />

              {/* Image layers */}
              {ideas.map((idea) => (
                <motion.div
                  key={idea.id}
                  initial={false}
                  animate={{
                    opacity: hovered === idea.id || expanded === idea.id ? 1 : 0,
                    scale: hovered === idea.id || expanded === idea.id ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0"
                >
                  {/* Placeholder gradient - replace with actual images */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${idea.image})`,
                    }}
                  />
                  {/* Fallback gradient if image not loaded */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    idea.id === "websites" ? "bg-gradient-to-br from-violet-900/40 via-slate-900/60 to-blue-900/40" :
                    idea.id === "ai-agents" ? "bg-gradient-to-br from-emerald-900/40 via-slate-900/60 to-teal-900/40" :
                    idea.id === "ai-infra" ? "bg-gradient-to-br from-amber-900/40 via-slate-900/60 to-orange-900/40" :
                    "bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/40"
                  }`} />
                  
                  {/* Noise texture overlay */}
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
                </motion.div>
              ))}

              {/* Active label overlay */}
              <AnimatePresence>
                {(hovered || expanded) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="inline-block px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                      <span className="text-xs tracking-wider text-white/60">
                        {ideas.find(i => i.id === (hovered || expanded))?.trigger}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
