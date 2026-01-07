import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of events do you specialize in?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
  },
  {
    question: "How long does it take for you to plan and organize an event?",
    answer: "The time required for planning and organizing an event depends on its scale and complexity. Typically, we recommend starting the planning process several months before the event date, but we can also work with shorter timelines if necessary.",
  },
  {
    question: "What is your service area?",
    answer: "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam gravida non commodo a sodales sit amet nisi.",
  },
  {
    question: "What services do you offer?",
    answer: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis?",
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border-b ${isOpen ? "border-transparent" : "border-black"}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <h3
          className={`text-xl md:text-2xl font-light pr-8 transition-colors ${
            isOpen ? "text-[#6AAB23]" : "text-black group-hover:text-primary"
          }`}
        >
          {faq.question}
        </h3>
        <div className="flex-shrink-0 w-10 h-10 border border-black flex items-center justify-center group-hover:border-primary transition-colors">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#6AAB23]" />
          ) : (
            <Plus className="w-5 h-5 text-black group-hover:text-primary transition-colors" />
          )}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-6">
          <p className="text-medium text-black">{faq.answer}</p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isOpen ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="h-px bg-[#6AAB23] origin-left mt-6"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const FAQ = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="section-padding bg-white text-black">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <h2 className="heading-section text-black">Have Questions? Find Answers Here!</h2>
      </motion.div>

      <div className="max-w-4xl">
        {faqs.map((faq, index) => (
          <FAQItem key={faq.question} faq={faq} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;