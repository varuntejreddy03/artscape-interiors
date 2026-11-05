import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import { BRAND } from '../data/brand';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F3EC]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-[#222222]/8'
            : isHomePage
            ? 'bg-transparent py-4 sm:py-6'
            : 'bg-[#181818]/95 backdrop-blur-md py-3.5 sm:py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-[#B58A3B]/40 shadow-xs bg-[#F7F3EC] p-0.5 transition-transform duration-300 group-hover:scale-105 shrink-0">
                <img
                  src={logoImg}
                  alt="Artscape Interiors Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span
                  className={`text-sm sm:text-lg font-semibold tracking-[0.14em] uppercase font-sans leading-none transition-colors duration-300 ${
                    isScrolled
                      ? 'text-[#222222]'
                      : 'text-white'
                  }`}
                >
                  ARTSCAPE
                </span>
                <span className="text-[9px] sm:text-[11px] tracking-[0.24em] text-[#B58A3B] uppercase font-medium mt-1">
                  INTERIORS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative text-sm tracking-[0.08em] uppercase transition-colors duration-300 font-medium py-1 group"
                  >
                    <span
                      className={`${
                        isActive
                          ? 'text-[#B58A3B] font-semibold'
                          : isScrolled
                          ? 'text-[#222222]/80 hover:text-[#222222]'
                          : 'text-white/85 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#B58A3B] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[#222222] text-[#F7F3EC] hover:bg-[#161616] hover:text-[#B58A3B] shadow-sm'
                    : 'bg-[#B58A3B] text-white hover:bg-[#A37B30] shadow-sm hover:shadow-lg'
                }`}
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center md:hidden gap-2">
              <Link
                to="/contact"
                className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#B58A3B] text-white shrink-0"
              >
                Let's Talk
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors focus:outline-none shrink-0 cursor-pointer ${
                  isScrolled
                    ? 'bg-[#222222]/5 text-[#222222] active:bg-[#222222]/15'
                    : 'bg-white/15 text-white active:bg-white/25'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#F7F3EC] flex flex-col justify-between pt-20 pb-6 px-5 md:hidden overflow-y-auto"
          >
            {/* Top Bar inside Drawer with Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-[#222222]/10 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5 border border-[#B58A3B]">
                  <img src={logoImg} alt="Artscape" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#222222]">
                  ARTSCAPE INTERIORS
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#222222]/5 text-[#222222]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-3 py-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-3 rounded-xl text-xl font-light tracking-tight transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#B58A3B]/10 text-[#B58A3B] font-medium'
                        : 'text-[#222222] hover:bg-black/5 active:bg-black/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight
                      className={`w-5 h-5 ${
                        isActive ? 'text-[#B58A3B]' : 'text-[#85817B]'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Studio Quick Contact */}
            <div className="mt-6 pt-5 border-t border-[#222222]/10 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#222222]">
                <MapPin className="w-4 h-4 text-[#B58A3B] shrink-0" />
                <span>Kondapur, Hyderabad, Telangana</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#222222]">
                <Phone className="w-4 h-4 text-[#B58A3B] shrink-0" />
                <a href={`tel:${BRAND.contact.phone}`} className="font-medium hover:underline">
                  {BRAND.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#222222]">
                <Mail className="w-4 h-4 text-[#B58A3B] shrink-0" />
                <a href={`mailto:${BRAND.contact.email}`} className="truncate hover:underline">
                  {BRAND.contact.email}
                </a>
              </div>

              {/* Direct Quick Action CTAs */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BRAND.contact.phone}`}
                  className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-full bg-[#222222] text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B58A3B]" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-full bg-[#25D366] text-white"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
