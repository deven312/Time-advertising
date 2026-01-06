import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "Amazon Prime Video",
    logo: "/Amazon_Prime_Video_logo.png",
  },
  {
    name: "Tata IPl",
    logo: "/Ipl.png",
  },
  {
    name: "Zee 5",
    logo: "/Zee5-Logo.png",
 },
];

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 bg-secondary">
      <div ref={ref} className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="heading-section text-foreground"
          >
            Powered by trusted partnerships.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-medium text-muted-foreground self-end"
          >
            Explore the esteemed companies we collaborate with to deliver outstanding events and experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-20 flex items-center justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-[200px] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="w-full h-px bg-primary origin-center mb-6"
                />
                <span className="text-foreground font-light">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;