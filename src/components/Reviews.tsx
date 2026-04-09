"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { REVIEWS_DATA } from "@/lib/constants";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-light py-20 sm:py-28">
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
            Отзывы
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-extrabold uppercase text-dark sm:text-4xl lg:text-5xl">
            Что говорят туристы
          </h2>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-14 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0">
          {REVIEWS_DATA.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-[280px] snap-center rounded-2xl bg-white p-6 shadow-md sm:min-w-0"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-dark">{review.name}</p>
                  <p className="text-xs text-dark/50">{review.country}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`h-4 w-4 ${
                      si < review.stars
                        ? "fill-accent text-accent"
                        : "text-dark/20"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mt-3 text-sm leading-relaxed text-dark/70">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
