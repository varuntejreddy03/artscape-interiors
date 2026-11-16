import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/brand';
import Button from '../components/Button';
import logoImg from '../assets/logo.webp';

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const galleryEl = document.querySelector('#gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end justify-start pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#1B1917] rounded-b-[28px] sm:rounded-b-[44px] overflow-hidden border-b border-black/10 shadow-lg"
    >
      {/* Background Architectural Living Room Image with Cinematic Tint */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="/images/projects/indis-living-tv-wall-preview.webp"
          alt="Luxury living room architectural interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Editorial gradient scrims for text legibility & Somerville-style contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />
      </div>

      {/* Decorative Ambient Gold Glow */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-[#B58A3B]/10 blur-[100px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Studio Brand Pill with Official Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white mb-6 sm:mb-8"
          >
            <div className="w-5 h-5 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-[#B58A3B]">
              <img src={logoImg} alt="Artscape Mark" className="w-full h-full object-contain" />
            </div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D8C8B2]">
              Artscape Interiors • Kondapur, Hyderabad
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.08] font-sans"
          >
            Spaces that inspire.{' '}
            <span className="italic font-serif font-normal text-[#D8C8B2] block sm:inline">
              Interiors that belong.
            </span>
          </motion.h1>

          {/* Supporting Manifesto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-base sm:text-xl text-white/85 max-w-2xl font-light leading-relaxed"
          >
            {BRAND.heroSupportingText}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              variant="gold"
              size="lg"
              href="#gallery"
              onClick={scrollToWork}
              icon={ArrowUpRight}
              className="text-xs sm:text-sm uppercase tracking-wider font-semibold"
            >
              Explore Our Work
            </Button>

            <Button
              variant="outline-light"
              size="lg"
              href="#contact"
              onClick={scrollToContact}
              className="text-xs sm:text-sm uppercase tracking-wider font-medium"
            >
              Let's Talk
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar: Location note & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 sm:mt-24 pt-6 border-t border-white/10 flex items-center justify-between text-white/60 text-xs"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[#B58A3B] tracking-wider uppercase">
              Contemporary Luxury
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline">Bespoke Residential Architecture</span>
          </div>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 hover:text-[#B58A3B] transition-colors cursor-pointer group"
          >
            <span className="hidden sm:inline tracking-wider uppercase text-[10px]">Scroll Down</span>
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#B58A3B]">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
