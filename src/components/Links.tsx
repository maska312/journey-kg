"use client";

import { motion } from "framer-motion";
import { Globe, Camera, MessageCircle } from "lucide-react";
import { TAPLINKS } from "@/lib/constants";

const iconMap = {
  Globe,
  Camera,
  MessageCircle,
} as const;

export default function Links() {
  return (
    <section className="bg-dark py-20 sm:py-28">
      <div className="mx-auto max-w-md px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Мы в сети
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-extrabold uppercase text-white sm:text-4xl">
            Наши ссылки
          </h2>
        </motion.div>

        {/* Buttons stack */}
        <div className="mt-10 flex flex-col gap-4">
          {TAPLINKS.map((link, i) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-full border-2 border-white/20 bg-white/5 px-6 py-4 text-white backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/10 hover:scale-[1.02]"
              >
                <Icon className="h-5 w-5 text-accent" />
                <span className="font-medium">{link.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
