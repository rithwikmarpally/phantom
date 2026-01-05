"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative isolate py-24 sm:py-32 lg:py-40 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 sm:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
