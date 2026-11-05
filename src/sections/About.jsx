import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Sliders, Layers, ArrowUpRight, MapPin } from 'lucide-react';
import { BRAND } from '../data/brand';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import logoImg from '../assets/logo.jpg';

const PILLARS = [
  {
    icon: Sparkles,
    title: "Modern Luxury",
    description: "Refined aesthetics characterized by understated elegance, pure proportions, and a serene visual atmosphere rather than loud ornamentation."
  },
  {
    icon: Compass,
    title: "Thoughtful Space Planning",
    description: "Meticulous architectural flow analysis that optimizes spatial volume, daylight distribution, functional pathways, and daily living rituals."
  },
  {
    icon: Sliders,
    title: "Functional & Purposeful Design",
    description: "Every bespoke fixture, built-in storage solution, and partition serves an authentic purpose without compromising visual lightness."
  },
  {
    icon: Layers,
    title: "Tactile Material Selection",
    description: "Curating harmonious compositions of natural stone, warm hardwoods, woven textiles, and brushed champagne metallic accents."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F7F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Studio Philosophy"
          title={
            <>
              Designing spaces with{' '}
              <span className="italic font-serif font-normal text-[#B58A3B]">meaning</span> and purpose.
            </>
          }
          subtitle="Based in Kondapur, Hyderabad, Artscape Interiors crafts refined residential environments where contemporary architecture meets timeless warmth."
          align="split"
        />

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Photo with Floating Brand Badge (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#222222]/8 bg-[#EFECE6]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Contemporary architectural interior by Artscape design vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Architectural Badge with Official Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-[#222222]/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#F7F3EC] p-0.5 border border-[#B58A3B]/40 shrink-0">
                  <img src={logoImg} alt="Artscape Mark" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#222222]">
                    Kondapur Studio
                  </h4>
                  <p className="text-[11px] text-[#85817B] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#B58A3B]" />
                    <span>Hyderabad, Telangana</span>
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-[#222222]/80 leading-relaxed italic border-t border-[#222222]/6 pt-2 font-serif">
                "{BRAND.supportingMessage}"
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Manifesto and 4 Core Design Pillars (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <p className="text-xl sm:text-2xl font-light text-[#222222] leading-snug">
                We believe interior spaces should feel instinctively calm, beautifully proportioned, and seamlessly tailored to the people who inhabit them.
              </p>
              <p className="text-sm sm:text-base text-[#85817B] leading-relaxed">
                At Artscape Interiors, every residential project begins with attentive listening. By blending minimalist architectural sensibilities with European design rigor and bespoke material detailing, we transform raw residential footprints into cohesive sanctuaries of modern luxury.
              </p>
            </motion.div>

            {/* Four Design Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 rounded-2xl bg-white/70 border border-[#222222]/6 hover:border-[#B58A3B]/40 hover:bg-white transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#B58A3B]/10 flex items-center justify-center text-[#B58A3B] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-medium text-[#222222]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#85817B] leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Action CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex items-center gap-4"
            >
              <Button
                variant="primary"
                href="#services"
                icon={ArrowUpRight}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Design Services
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
