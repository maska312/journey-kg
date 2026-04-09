"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import { TOUR_DATA, WHATSAPP_LINK } from "@/lib/constants";

export default function Tours() {
  return (
    <section id="tours" className="bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Куда поехать
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-extrabold uppercase text-dark sm:text-4xl lg:text-5xl">
            Наши маршруты
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-dark/60">
            Готовые туры с понятной длительностью и стоимостью. Индивидуальный
            маршрут — по запросу.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TOUR_DATA.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-white">
                  {tour.duration}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-dark">
                  {tour.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark/60">
                  {tour.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-dark/70">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {tour.price}
                    </span>
                  </div>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
                >
                  Подробнее
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
