import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Doctors } from "@/components/site/Doctors";
import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { FAQ } from "@/components/site/FAQ";
import { Booking } from "@/components/site/Booking";
import { Contact, FloatingActions } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bethesda — Premium Dental & Aesthetic Clinic" },
      { name: "description", content: "Advanced dental care and aesthetic treatments delivered with precision, comfort, and excellence at Bethesda Dental & Aesthetic Clinic in Chennai. Book a free consultation today." },
      { property: "og:title", content: "Bethesda — Premium Dental & Aesthetic Clinic" },
      { property: "og:description", content: "Transforming smiles and enhancing confidence with world-class clinicians and modern technology in Chennai." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        name: "Bethesda Dental & Aesthetic Clinic",
        image: "/og.jpg",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "43, Muthu Mariamman Koil St, Adi Nagar, East Tambaram, Tambaram",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600059",
          addressCountry: "IN"
        },
        telephone: "+918056272207",
        url: "/",
        openingHours: "Mo-Fr 09:00-19:00 Sa 10:00-16:00",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Gallery />
      <Doctors />
      <Testimonials />
      <Process />
      <FAQ />
      <Booking />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
