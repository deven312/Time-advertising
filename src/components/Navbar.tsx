import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Cases", href: "#cases" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: "whatsapp", href: "https://www.whatsapp.com/" },
  { icon: "facebook", href: "https://www.facebook.com/" },
  { icon: "twitter", href: "https://twitter.com/" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header at top with transparent background
      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false); // Scrolling down - hide
        } else {
          setIsVisible(true); // Scrolling up - show
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="relative">
          <div className={`absolute bottom-0 left-0 right-0 h-px transition-colors ${
            isScrolled ? "bg-black/10" : "bg-transparent"
          }`} />
          <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
            <a href="/" className="relative z-50 flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Time Advertising" 
                className="h-8 md:h-10 w-auto object-contain"
              />
              <span className={`text-xl md:text-2xl font-light tracking-widest transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}>
                Time Advertising
              </span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-50 p-2 transition-colors ${
                isScrolled ? "text-black hover:text-[#6AAB23]" : "text-white hover:text-[#6AAB23]"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="flex flex-col h-full pt-24 px-6 md:px-12 lg:px-20">
              <div className="flex-1 flex flex-col justify-center">
                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-5xl md:text-7xl lg:text-8xl font-extralight text-black hover:text-[#6AAB23] transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="py-12 border-t border-black/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                  <div className="flex gap-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.icon}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border border-black/20 flex items-center justify-center text-black hover:border-[#6AAB23] hover:text-[#6AAB23] transition-colors"
                      >
                        <span className="sr-only">{social.icon}</span>
                        <div className="w-5 h-5 bg-current" style={{ 
                          maskImage: `url(https://cdn.prod.website-files.com/65e6e45dfbf5318e712aa25e/660ae72${social.icon === 'whatsapp' ? 'bb1a46212e5f7c3ff' : social.icon === 'facebook' ? 'c1f23c4991a610133' : 'c69c5f591460d1f01'}_Vectors-Wrapper.svg)`,
                          WebkitMaskImage: `url(https://cdn.prod.website-files.com/65e6e45dfbf5318e712aa25e/660ae72${social.icon === 'whatsapp' ? 'bb1a46212e5f7c3ff' : social.icon === 'facebook' ? 'c1f23c4991a610133' : 'c69c5f591460d1f01'}_Vectors-Wrapper.svg)`,
                          maskSize: 'contain',
                          WebkitMaskSize: 'contain',
                        }} />
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-black">
                    <span>+1-555-123-4567</span>
                    <a href="mailto:info@nexusevent.com" className="hover:text-[#6AAB23] transition-colors">
                      info@nexusevent.com
                    </a>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-block px-8 py-4 bg-[#6AAB23] text-white font-medium uppercase tracking-wider text-sm hover:bg-[#6AAB23]/90 transition-colors"
                  >
                    Create Event
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;