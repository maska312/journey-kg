"use client";

import Image from "next/image";
import { SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.tours, href: "#tours" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-dark-light border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Logo + slogan */}
          <div>
            <div className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xl font-extrabold text-white">
              <Image
                src="/images/logo.jpeg"
                alt="Journey.kg"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              {SITE_NAME}
            </div>
            <p className="mt-3 text-sm text-white/50">
              {t.footer.slogan1}
              <br />
              {t.footer.slogan2}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white">{t.footer.navTitle}</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white">{t.footer.socialTitle}</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-accent"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
