"use client";

import { documentation } from "@/data/portfolio";
import { motion } from "framer-motion";

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Documentation() {
  return (
    <section id="documentation" className="section-padding bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            How this site is built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Documentation
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A quick tour of the architecture, data model, and tooling behind this
            portfolio — useful if you want to fork it, contribute, or just see how
            it&apos;s wired up.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {documentation.map((doc, i) => (
            <motion.article
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-[#1a1a1a] border border-[#27272a] hover:border-indigo-500/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-sm font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {doc.title}
                </h3>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {doc.summary}
              </p>

              <ul className="space-y-2">
                {doc.bullets.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-zinc-400"
                  >
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    <span className="break-words">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Footer banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-900/30 to-violet-900/20 border border-indigo-500/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h3 className="text-white font-semibold mb-1">
              Full README on GitHub
            </h3>
            <p className="text-zinc-400 text-sm">
              Setup steps, environment variables, and deployment notes live in the
              repository&apos;s <span className="font-mono text-indigo-300">README.md</span>.
            </p>
          </div>
          <a
            href="https://github.com/sudip-gt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors whitespace-nowrap"
          >
            View on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
