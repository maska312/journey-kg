"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.tours, href: "#tours" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Journey.kg"
              width={48}
              height={48}
              className="h-10 w-10 rounded-full object-cover md:h-12 md:w-12"
            />
            <span className={`font-[family-name:var(--font-heading)] text-xl font-extrabold tracking-wider transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}>
              JOURNEY.KG
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-dark" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher scrolled={scrolled} />

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-dark hover:scale-105 active:scale-95"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Right Controls: Language switcher + burger */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher scrolled={scrolled} />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-1.5 rounded-lg transition-colors ${
                scrolled ? "text-dark hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
              aria-label={t.nav.menuAria}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-4 pb-6 pt-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-dark font-medium border-b border-light last:border-0 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 pt-2 border-t border-gray-100 flex flex-col gap-3">
            <LanguageSwitcher isMobile={true} />

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
