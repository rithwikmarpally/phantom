"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

export default function Hero() {
  return (
    <Section className="min-h-[90vh] flex items-center justify-center pt-20 pb-32">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <p className="text-sm tracking-[0.3em] uppercase text-[#5a6678]">
              Software with intent
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-white">
              Systems that think.
              <br />
              <span className="text-[#5a6678]">Interfaces that feel alive.</span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-[#5a6678] max-w-xl mx-auto leading-relaxed"
          >
            I build software that solves problems worth solving.
            <br />
            Limited engagements. Thoughtful work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="pt-8"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm tracking-wide text-white/80 hover:text-white transition-colors duration-500"
            >
              <span className="h-px w-8 bg-white/20 group-hover:w-12 group-hover:bg-violet-400/60 transition-all duration-500" />
              Start a conversation
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </Section>
  );
}
