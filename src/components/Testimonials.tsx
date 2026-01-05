import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Becky Fadel",
    role: "CEO, InnovateTech Inc",
    avatar: "https://cdn.prod.website-files.com/65e6e45dfbf5318e712aa25e/660c1db881a0536ccc4a9f92_Thumb%20Photo-3.png",
    quote: "Working with Outsourced Events was a game-changer for our conference. Their attention to detail and professionalism ensured a seamless experience from start to finish. Highly recommend!",
  },
  {
    name: "Miss Joyce Moore",
    role: "CEO, Nexon Inc",
    avatar: "https://cdn.prod.website-files.com/65e6e45dfbf5318e712aa25e/660c1db83c79a4ee56e484b0_Thumb%20Photo-1.png",
    quote: "Working with Outsourced Events was a game-changer for our conference. Their attention to detail and professionalism ensured a seamless experience from start to finish.",
  },
  {
    name: "Marian Monahan",
    role: "CEO, Main Company",
    avatar: "https://cdn.prod.website-files.com/65e6e45dfbf5318e712aa25e/660c1db806348c58b1430372_Thumb%20Photo.png",
    quote: "Working with Outsourced Events was a game-changer for our conference. Their attention to detail and professionalism ensured a seamless experience.",
  },
  {
    name: "Ms. Gwen Kling",
    role: "Manager, Rly Inc",
    avatar: "https://cdn.prod.website-files.com/65e6e45dfbf5318e712aa25e/660c1db86397c0b11c12f7af_Thumb%20Photo-2.png",
    quote: "Their professionalism ensured a seamless experience from start to finish. Highly recommend for any corporate event needs!",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Top Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="h-px bg-primary origin-left mb-8"
      />

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-light text-foreground">{testimonial.name}</h3>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
        <p className="text-medium text-muted-foreground leading-relaxed">
          "{testimonial.quote}"
        </p>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="section-padding">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24 max-w-4xl"
      >
        <h2 className="heading-section text-foreground">
          Listen to what our clients have to say about their experiences with NexusEvent.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;