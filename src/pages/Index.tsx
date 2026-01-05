import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import EventsCarousel from "@/components/EventsCarousel";
import Quote from "@/components/Quote";
import Cases from "@/components/Cases";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Benefits />
      <EventsCarousel />
      <Quote />
      <Cases />
      <CTA />
      <Testimonials />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;