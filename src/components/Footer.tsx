import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Cases", href: "#cases" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-24 bg-secondary">
      <div ref={ref} className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <span className="text-lg font-light tracking-widest text-foreground">
            Time Advertising
            </span>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-12 h-px bg-border origin-left"
          />

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 flex flex-wrap gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-4 space-y-2"
          >
            <p className="text-foreground">+1-555-123-4567</p>
            <a
              href="mailto:info@nexusevent.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              info@nexusevent.com
            </a>

            <div className="flex gap-4 pt-4">
              {["whatsapp", "facebook", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 rounded-full bg-current" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <button
              onClick={scrollToTop}
              className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground">NexusEvent 2024 ©</p>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                design taevski
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Changelog
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Licensing
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;