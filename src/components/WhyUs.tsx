"use client";

import { motion } from "framer-motion";
import { Mountain, Leaf, Map, Compass } from "lucide-react";

const advantages = [
  {
    icon: Mountain,
    title: "10+ лет опыта",
    description:
      "Знаем каждый маршрут. Наши гиды — местные жители с многолетним опытом работы в горах Кыргызстана.",
  },
  {
    icon: Compass,
    title: "Индивидуальный подход",
    description:
      "Разработаем маршрут под ваши желания и возможности. Каждый тур — уникальный.",
  },
  {
    icon: Map,
    title: "Проверенные маршруты",
    description:
      "Горы, озёра, каньоны, юрточные лагеря, дикая природа. Все маршруты проверены нашей командой.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-primary py-20 sm:py-28">
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
            Почему мы
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-extrabold uppercase text-white sm:text-4xl lg:text-5xl">
            Путешествуйте с нами
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition-all hover:bg-white/15 hover:scale-[1.02]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <item.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
