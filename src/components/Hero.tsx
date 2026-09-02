"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const counters = [
    { value: "15+", label: t.hero.counters.routes },
    { value: "800+", label: t.hero.counters.travelers },
    { value: "10+", label: t.hero.counters.experience },
  ];

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero.png"
        alt="Mountains of Kyrgyzstan"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 font-[family-name:var(--font-heading)] text-sm font-extrabold uppercase tracking-[0.3em] text-accent sm:text-base">
            {t.hero.badge}
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-black uppercase leading-tight tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.titleLine1}
            <br />
            <span className="text-accent">{t.hero.titleLine2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            {t.hero.desc1}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/60 italic">
            {t.hero.desc2}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#tours"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:scale-105 active:scale-95 shadow-md"
          >
            {t.hero.ctaTours}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-dark hover:scale-105 active:scale-95 shadow-md"
          >
            {t.hero.ctaWhatsapp}
          </a>
        </motion.div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center gap-8 sm:gap-16 md:gap-20"
        >
          {counters.map((c) => (
            <div key={c.label} className="text-center">
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-extrabold">
                {c.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/70">
                {c.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 text-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
