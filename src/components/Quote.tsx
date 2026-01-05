import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Quote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div ref={ref} className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight leading-tight text-foreground">
            <span className="text-primary">"Great minds</span> discuss ideas; average minds discuss events; small minds discuss people."
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px bg-border my-12 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl font-light text-muted-foreground"
        >
          Eleanor Roosevelt
        </motion.p>
      </div>
    </section>
  );
};

export default Quote;