import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Camping Embrace Nature",
    description: "Nexus Events' camping excursions offer an immersive escape into the heart of nature, where adventure awaits at every turn.",
    image: "https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/6618ffdf5384fa9bd527119a_Camping_.jpg",
    href: "#",
  },
  {
    title: "Trade Events",
    description: "Our trade events serve as pivotal platforms for industry growth, bringing together key players to explore trends and forge partnerships.",
    image: "https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c2265a355494f2329a7fe_expo.jpg",
    href: "#",
  },
  {
    title: "Corporate Events",
    description: "Specializing in corporate events, Nexus Events fosters connections and vibrant company cultures with a focus on aligning with organizational goals.",
    image: "https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c20ae9dec99a29b42c79b_Corporate.webp",
    href: "#",
  },
  {
    title: "Catering Events",
    description: "Nexus Events excels in catering events that tantalize taste buds and elevate hospitality. From intimate gatherings to grand celebrations.",
    image: "https://cdn.prod.website-files.com/65f1f8f73e41e4620092820f/660c217033253b148b5a0e30_Catering.jpg",
    href: "#",
  },
];

export const EventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section id="events" className="section-padding">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <h2 className="heading-section text-foreground">Our Variant Events</h2>
      </motion.div>

      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {events.map((event, index) => (
              <div key={event.title} className="w-full flex-shrink-0 px-2 md:w-1/2 lg:w-1/3">
                <a href={event.href} className="block group">
                  <div className="overflow-hidden mb-6">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-medium text-muted-foreground">
                      {event.description}
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
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;