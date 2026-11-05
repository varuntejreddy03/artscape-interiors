import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

export default function Services({ onSelectService }) {
  const handleEnquire = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-[#222222]/6">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#B58A3B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Capabilities & Disciplines"
          title={
            <>
              Holistic interior solutions for{' '}
              <span className="italic font-serif font-normal text-[#B58A3B]">discerning</span> residences.
            </>
          }
          subtitle="From individual statement rooms to comprehensive turnkey execution, we balance spatial ergonomics with enduring aesthetic refinement."
          align="split"
        />

        {/* 8-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* Bottom Banner with Consultation Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-[#222222] text-[#F7F3EC] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B58A3B] block mb-2">
              Personalized Spatial Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-white">
              Have a unique spatial requirement or floorplan in mind?
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Schedule an in-depth design consultation with our Kondapur team to discuss your floorplans and material aspirations.
            </p>
          </div>

          <Button
            variant="gold"
            size="md"
            href="#contact"
            icon={ArrowUpRight}
            className="text-xs uppercase tracking-wider shrink-0"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
