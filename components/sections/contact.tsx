"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/section";

export default function Contact() {
  const [state, handleSubmit] = useForm("xbdlwekd");

  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center space-y-4 mb-12"
      >
        <p className="text-sm tracking-[0.2em] uppercase text-[#5a6678]">
          Get in touch
        </p>
        <p className="text-2xl sm:text-3xl font-light text-white/90">
          Have a project in mind?
          <br />
          <span className="text-[#5a6678]">Let&apos;s talk about what you need.</span>
        </p>
      </motion.div>

      {state.succeeded ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center space-y-4"
        >
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-6 py-8">
            <CheckCircle className="mx-auto mb-4 text-emerald-400" size={48} />
            <h3 className="text-xl font-light text-white mb-2">Message sent!</h3>
            <p className="text-sm text-emerald-200/80">
              Thanks for reaching out. We&apos;ll get back to you within a day.
            </p>
          </div>
        </motion.div>
      ) : (
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs tracking-wider uppercase text-[#5a6678]" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-[#3a4452] focus:border-violet-500/50 focus:outline-none transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs tracking-wider uppercase text-[#5a6678]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-[#3a4452] focus:border-violet-500/50 focus:outline-none transition-colors"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-xs text-red-400 mt-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs tracking-wider uppercase text-[#5a6678]" htmlFor="company">
            Company <span className="text-[#3a4452]">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            placeholder="Company or team"
            className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-[#3a4452] focus:border-violet-500/50 focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs tracking-wider uppercase text-[#5a6678]" htmlFor="project">
            What are you building?
          </label>
          <textarea
            id="project"
            name="project"
            required
            rows={4}
            placeholder="Tell me about it..."
            className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-[#3a4452] focus:border-violet-500/50 focus:outline-none transition-colors resize-none"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button
            type="submit"
            disabled={state.submitting}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3 text-sm text-white/80 transition-all hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting && <Loader2 size={16} className="animate-spin" />}
            {state.submitting ? "Sending..." : "Send message"}
          </button>
          <p className="text-xs text-[#5a6678]">
            Usually reply within a day.
          </p>
        </div>

        {state.errors && Object.keys(state.errors).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-200/80"
          >
            Something went wrong. Please try again.
          </motion.div>
        )}
      </motion.form>
      )}
    </Section>
  );
}
