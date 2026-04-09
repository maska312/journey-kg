import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Links from "@/components/Links";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tours />
        <WhyUs />
        <Reviews />
        <Links />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
