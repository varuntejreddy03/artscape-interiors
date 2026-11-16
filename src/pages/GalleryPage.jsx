import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import GalleryLightbox from '../components/GalleryLightbox';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProject, setActiveProject] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const projects = [...new Set(GALLERY_ITEMS.map((item) => item.project))];
  const filteredItems = GALLERY_ITEMS.filter((item) =>
    (activeCategory === 'all' || item.category === activeCategory) &&
    (activeProject === 'all' || item.project === activeProject)
  );

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
    <div className="bg-[#F7F3EC] overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Previous Projects & Design Studies"
        title={
          <>
            Explore our{' '}
            <span className="italic font-serif font-normal text-[#B58A3B]">project portfolio</span>.
          </>
        }
        subtitle="Explore Indis Viva City, Chanda Nagar, Kadapa, dental clinic interiors, and residential elevations in Proddutur."
        breadcrumb="Projects"
        bgImage="/images/projects/warm-display-media-wall.jpg"
      />

      <section id="indis-viva-city" className="scroll-mt-28 pt-16 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-[#EDE7DD] border border-[#222222]/8">
            <img src="/images/projects/indis-master-bedroom.webp" alt="Indis Viva City master bedroom design with botanical wall art" width="1672" height="941" className="w-full h-full object-cover min-h-64" />
            <div className="p-6 sm:p-10 space-y-5">
              <span className="text-xs font-mono tracking-widest uppercase text-[#98722C]">Featured Home Design</span>
              <h2 className="text-3xl sm:text-4xl font-light">Indis Viva City</h2>
              <p className="text-sm text-[#66615A] leading-relaxed">A connected design story in warm ivory, timber, and botanical accents. The studio’s final design presentation covers these spaces:</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[#222222]">
                {['Entrance foyer & feature partitions', 'Living room & custom TV unit', 'Pooja cabinet & doors', 'Master bedroom & wardrobes', 'Children’s bedroom & study storage', 'Guest bedroom & feature wall', 'Modular kitchen & display storage', 'Utility & laundry cabinetry'].map((detail) => (
                  <li key={detail} className="flex gap-2"><span className="text-[#98722C]" aria-hidden="true">·</span>{detail}</li>
                ))}
              </ul>
              <p className="text-xs leading-relaxed text-[#66615A] border-t border-[#222222]/10 pt-4">Design renders from the Indis Viva City presentation. These images illustrate the proposed design and finishes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Gallery & Filter Showcase in simple English */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Browse Our Projects"
            title={
              <>
                Spaces designed for{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">comfortable living</span>.
              </>
            }
            subtitle="Choose a project, then browse its rooms and details. Our portfolio includes residential interiors, commercial spaces, and elevations."
            align="split"
          />

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            <label htmlFor="project-filter" className="text-xs font-semibold uppercase tracking-wider text-[#222222]">Project</label>
            <select
              id="project-filter"
              value={activeProject}
              onChange={(event) => { setActiveProject(event.target.value); setActiveCategory('all'); setLightboxIndex(0); }}
              className="w-full sm:w-auto rounded-xl bg-white border border-[#222222]/15 px-4 py-3 text-base text-[#222222] focus:outline-2 focus:outline-[#B58A3B]"
            >
              <option value="all">All Projects</option>
              {projects.map((project) => <option key={project} value={project}>{project}</option>)}
            </select>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => { setActiveCategory(cat.id); setLightboxIndex(0); }}
                  aria-pressed={isActive}
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

          {filteredItems.length === 0 && (
            <p role="status" className="py-12 text-center text-sm text-[#66615A]">No images in this category for the selected project. Choose All Projects or another category.</p>
          )}

          {/* Asymmetric Masonry Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => {
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
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${item.title}`}
                    onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openLightbox(index); } }}
                    className="group relative rounded-2xl overflow-hidden bg-[#EDE7DD] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#222222]/8 cursor-pointer"
                  >
                    <div className={`w-full ${aspectClasses} overflow-hidden relative`}>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        decoding="async"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Overlay: Always subtly visible on touch/mobile, interactive hover on desktop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6 text-white" />

                      {/* Fullscreen Trigger */}
                      <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 group-focus-visible:opacity-100 transform translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300">
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>

                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 group-focus-visible:opacity-100 transform translate-y-0 sm:translate-y-3 sm:group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-widest text-[#B58A3B] block mb-0.5 sm:mb-1">
                          {item.designNotes || 'Design Idea'}
                        </span>
                        <h4 className="text-sm sm:text-base lg:text-lg font-light text-white tracking-wide">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <p className="px-4 py-3 text-sm font-medium text-[#222222] bg-white">{item.project}</p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Inspiration Note in simple English */}
          <div className="mt-16 text-center text-xs text-[#85817B] max-w-xl mx-auto flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B58A3B] shrink-0" />
            <span>
              Studio-supplied project renders and design studies. Final materials and execution may vary from the visuals shown.
            </span>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
