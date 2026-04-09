"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { WHATSAPP_LINK, TOUR_DATA } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Info + WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Контакт
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-extrabold uppercase text-white sm:text-4xl">
              Свяжитесь с нами
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Напишите нам в WhatsApp или заполните форму — мы ответим в течение
              2 часов.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-green-600 px-6 py-4 text-white transition-all hover:bg-green-500 hover:scale-[1.02]"
              >
                <MessageCircle className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Написать в WhatsApp</p>
                  <p className="text-sm text-white/80">Быстрый ответ</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/60">
                <Phone className="h-5 w-5" />
                <span className="text-sm">+996 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <Mail className="h-5 w-5" />
                <span className="text-sm">info@journey.kg</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-white/80"
                >
                  Имя
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-white/80"
                >
                  Телефон или Email
                </label>
                <input
                  id="contact-email"
                  type="text"
                  placeholder="+996... или email"
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-tour"
                  className="mb-1.5 block text-sm font-medium text-white/80"
                >
                  Маршрут
                </label>
                <select
                  id="contact-tour"
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-accent"
                >
                  <option value="" className="text-dark">
                    Выберите маршрут
                  </option>
                  {TOUR_DATA.map((tour) => (
                    <option key={tour.id} value={tour.title} className="text-dark">
                      {tour.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-white/80"
                >
                  Сообщение
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Расскажите о ваших пожеланиях..."
                  className="w-full resize-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-accent px-8 py-3.5 font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.01]"
              >
                Отправить заявку
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
