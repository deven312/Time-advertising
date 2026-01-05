import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const cases = [
  {
    title: "SparkFest 2024: Igniting Creativity",
    description: "SparkFest 2024 was an exhilarating event designed to inspire and ignite the flames of creativity among participants.",
    image: "https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/661902165d4d9c4112347043_lucas-davies-kmfY3pqnbnw-unsplash_.jpg",
    href: "#",
  },
  {
    title: "Global Health Innovate Conference 2024",
    description: "Tech Innovate Summit 2024 brings together industry leaders, innovators, and visionaries shaping technology's future.",
    image: "https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660bfcac47a47caa0a4d30b7_Health.jpg",
    href: "#",
  },
  {
    title: "Sustainability Solutions Forum 2024",
    description: "Sustainability Solutions Forum 2024 unites thought leaders and policymakers to address global sustainability challenges.",
    image: "https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660bfc510bb7b3db4876983a_Sustainability.jpg",
    href: "#",
  },
  {
    title: "Tech Innovate Summit 2024",
    description: "Tech Innovate Summit 2024 brings together industry leaders, innovators, and visionaries shaping technology's future.",
    image: "https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660bfbc84939de10044b06bf_tech.jpg",
    href: "#",
  },
];

export const Cases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section id="cases" className="section-padding">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <h2 className="heading-section text-foreground">Our Primary Cases</h2>
      </motion.div>

      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {cases.map((caseItem) => (
              <div key={caseItem.title} className="w-full flex-shrink-0 px-2 md:w-1/2 lg:w-1/3">
                <a href={caseItem.href} className="block group">
                  <div className="overflow-hidden mb-6">
                    <motion.img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                      {caseItem.title}
                    </h3>
                    <p className="text-medium text-muted-foreground">
                      {caseItem.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                      <ArrowRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8 }}
                      className="flex-1 ml-4 h-px bg-primary origin-left"
                    />
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="Previous case"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="Next case"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cases;