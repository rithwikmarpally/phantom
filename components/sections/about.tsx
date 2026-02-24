"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center space-y-6"
      >
        <p className="text-sm tracking-[0.2em] uppercase text-[#5a6678]">
          About Us
        </p>
        <p className="text-lg sm:text-xl font-light text-white/80 leading-relaxed">
          We&apos;re a passionate team dedicated to building high-quality digital
          experiences. Reach out anytime — we&apos;d love to hear from you.
        </p>

        <div className="pt-4 space-y-4">
          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <Mail size={18} className="text-emerald-400/70" />
            <a
              href="mailto:rithwikmarpally07@gmail.com"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              rithwikmarpally07@gmail.com
            </a>
          </div>

          {/* Phone numbers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-emerald-400/70" />
              <span className="text-sm text-white/70">
                Rithwik:{" "}
                <a
                  href="tel:+918143962706"
                  className="hover:text-white transition-colors"
                >
                  +91 81439 62706
                </a>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-emerald-400/70" />
              <span className="text-sm text-white/70">
                Pardiv:{" "}
                <a
                  href="tel:+916303390573"
                  className="hover:text-white transition-colors"
                >
                  +91 63033 90573
                </a>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
