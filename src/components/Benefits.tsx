import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: "https://cdn.prod.website-files.com/65e6e45dfbf5318e712aa25e/66017645252cc60442bbb6d1_Icon.svg",
    title: "Versatile & Responsive",
    description: "At NexusEvent, flexibility is our hallmark. Our dedicated team collaborates with trusted global partners to orchestrate outstanding events. As the landscape evolves, we continuously refine our skills and engage with all stakeholders to achieve mutual objectives.",
  },
  {
    icon: "https://cdn.prod.website-files.com/65e6e45dfbf5318e712aa25e/6601764534105eb51470ae83_Icon-1.svg",
    title: "Dedicated to Partnership",
    description: "Our ethos revolves around collaboration, as we integrate seamlessly with our clients, embodying an extension of their team. This deepens our understanding of their objectives, hurdles, and opportunities.",
  },
  {
    icon: "https://cdn.prod.website-files.com/65e6e45dfbf5318e712aa25e/66017645bf41174cc5741f8c_Icon-2.svg",
    title: "Customized Solutions",
    description: "NexusEvent prides itself on tailoring solutions to fit the unique needs of each client. Through personalized consultations and meticulous attention to detail, we craft bespoke strategies that maximize impact.",
  },
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      {/* Top Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="h-px bg-primary origin-left mb-8"
      />

      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 flex-shrink-0">
            <img src={benefit.icon} alt="" className="w-full h-full object-contain invert" />
          </div>
          <h3 className="text-2xl md:text-3xl font-light text-foreground">{benefit.title}</h3>
        </div>
        <p className="text-medium text-muted-foreground leading-relaxed">
          {benefit.description}
        </p>
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        className="h-px bg-primary origin-left mt-8"
      />
    </motion.div>
  );
};

export const Benefits = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="about" className="section-padding">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <h2 className="heading-section text-foreground max-w-4xl">
          Transforming events, redefining excellence
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard key={benefit.title} benefit={benefit} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;