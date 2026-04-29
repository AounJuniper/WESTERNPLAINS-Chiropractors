import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { siteConfig } from '../config/siteConfig';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-3 md:py-4 shadow-sm'
          : 'bg-transparent py-6 md:py-8'
      )}
    >
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center">

          {/* ================= LOGO (DESKTOP + MOBILE NAV) ================= */}
          <div className="flex items-center gap-3">

            {/* Desktop = 18 */}
            <img
              src={siteConfig.logo}
              alt="logo"
              className="hidden lg:block w-24 h-24 object-contain -mr-16"
            />

            {/* Mobile navbar = 16 */}
            <img
              src={siteConfig.logo}
              alt="logo"
              className="block lg:hidden w-20 h-20 object-contain -mr-14"
            />

            <span className="text-sm md:text-lg lg:text-xl font-bold text-brand-blue">
              {siteConfig.siteName}
            </span>

          </div>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden lg:flex items-center space-x-12">

            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-blue hover:text-brand-teal transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#booking"
              className="px-8 py-4 bg-brand-blue text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-brand-teal transition"
            >
              Book Appointment
            </a>

          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-[60]"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[380px] bg-white z-[70] flex flex-col"
            >

              {/* ================= MOBILE MENU HEADER (LOGO = 14) ================= */}
              <div className="p-6 flex justify-between items-center border-b">

                <div className="flex items-center gap-3">

                  <img
                    src={siteConfig.logo}
                    alt="logo"
                    className="w-16 h-16 object-contain -mr-10"
                  />

                  <span className="text-lg font-bold text-brand-blue">
                    {siteConfig.siteName}
                  </span>

                </div>

                <button onClick={() => setIsOpen(false)}>
                  <X className="w-5 h-5" />
                </button>

              </div>

              {/* LINKS */}
              <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-serif text-brand-blue"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* CONTACT */}
              <div className="p-8 bg-brand-blue text-white">

                <a href={`tel:${siteConfig.phone}`} className="block mb-3">
                  {siteConfig.phone}
                </a>

                <a href={`mailto:${siteConfig.email}`} className="block mb-6">
                  {siteConfig.email}
                </a>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}