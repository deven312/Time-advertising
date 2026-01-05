import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.prod.website-files.com/65e6e45dfbf5318e712aa25e/660ee408b03bbd7e98f76b52_ND%20(1).jpg"
          alt="Event atmosphere with silhouette"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <h1 className="heading-display text-foreground">
              Transforming events redefining excellence
            </h1>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 flex flex-col justify-end"
          >
            <div className="space-y-4">
              <span className="text-6xl md:text-7xl font-extralight text-foreground">95%</span>
              <p className="text-medium text-foreground">Client Satisfaction Rate</p>
              <p className="text-medium text-muted-foreground">
                We take pride in achieving a 95% client satisfaction rate, ensuring top-notch service quality and meeting our clients' needs
              </p>
            </div>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-12 h-px bg-primary origin-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;