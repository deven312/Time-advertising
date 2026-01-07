import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-40 bg-[#a1e35c]">
      <div ref={ref} className="px-6 md:px-12 lg:px-20 text-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-xl md:text-2xl font-light tracking-widest text-black">
              NEXUSEVENT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section text-black mb-12 max-w-4xl"
          >
            Ready to elevate your next event? Contact us now to unlock bespoke event management solutions tailored to your needs
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-block px-10 py-5 bg-black text-white font-medium uppercase tracking-wider text-sm hover:bg-green-glow transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;