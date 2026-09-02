import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_DESCRIPTION_EN =
  "4x4 Jeep tours around Kyrgyzstan — mountains, alpine lakes, canyons, nomadic yurt camps, untouched wildlife. Personalized routes.";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — 4x4 Tours around Kyrgyzstan`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION_EN,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} — 4x4 Tours around Kyrgyzstan`,
    description: SITE_DESCRIPTION_EN,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Mountains of Kyrgyzstan — Journey.kg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — 4x4 Tours around Kyrgyzstan`,
    description: SITE_DESCRIPTION_EN,
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
