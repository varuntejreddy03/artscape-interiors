import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import SectionHeading from '../components/SectionHeading';
import GalleryLightbox from '../components/GalleryLightbox';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter items
  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F7F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Portfolio & Aesthetic Vision"
          title={
            <>
              Immersive spatial storytelling &{' '}
              <span className="italic font-serif font-normal text-[#B58A3B]">craftsmanship</span>.
            </>
          }
          subtitle="Explore our curated interior design gallery, showcasing warm travertine palettes, bespoke joinery, sculpted lighting, and architectural modernism."
          align="split"
        />

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none ${
                  isActive
                    ? 'bg-[#222222] text-[#F7F3EC] shadow-sm'
                    : 'bg-white/80 text-[#85817B] hover:text-[#222222] hover:bg-white border border-[#222222]/8'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              // Asymmetric aspect ratio classes based on item data
              const aspectClasses = {
                tall: 'aspect-[3/4]',
                wide: 'aspect-[4/3] sm:aspect-[16/11]',
                square: 'aspect-square'
              }[item.aspectRatio] || 'aspect-[4/3]';

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => openLightbox(index)}
                  className="group relative rounded-2xl overflow-hidden bg-[#EDE7DD] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#222222]/8 cursor-pointer"
                >
                  <div className={`w-full ${aspectClasses} overflow-hidden relative`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-between p-6 text-white" />

                    {/* View Fullscreen Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#B58A3B] block mb-1">
                        {item.designNotes || 'Design Inspiration'}
                      </span>
                      <h4 className="text-base sm:text-lg font-light text-white tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-[#85817B] max-w-xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B58A3B]" />
          <span>
            Curated interior photography reflecting Artscape's design philosophy, material palette, and European architectural standards.
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
