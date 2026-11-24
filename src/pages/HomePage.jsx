import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Compass, Sliders, Layers, MapPin, Sun, Sunset, Moon } from 'lucide-react';
import { BRAND } from '../data/brand';
import { SERVICES } from '../data/servicesData';
import { PROJECT_COLLECTIONS } from '../data/portfolioData';
import logoImg from '../assets/logo.webp';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import GalleryCollectionCard from '../components/GalleryCollectionCard';
import GalleryLightbox from '../components/GalleryLightbox';
import AtmosphereLab from '../components/AtmosphereLab';
import SpatialEstimator from '../components/SpatialEstimator';

const HERO_SCENES = [
  {
    id: 'morning',
    name: 'Living Room',
    icon: Sun,
    image: '/images/projects/indis-living-tv-wall.webp',
    thumbnail: '/images/projects/indis-living-tv-wall-preview.webp',
    width: 1592,
    height: 988,
    mood: 'Indis Viva City · Living room design'
  },
  {
    id: 'golden',
    name: 'Master Bedroom',
    icon: Sunset,
    image: '/images/projects/indis-master-bedroom.webp',
    thumbnail: '/images/projects/indis-master-bedroom-preview.webp',
    width: 1672,
    height: 941,
    mood: 'Indis Viva City · Master bedroom design'
  },
  {
    id: 'evening',
    name: 'Entrance Foyer',
    icon: Moon,
    image: '/images/projects/indis-entrance-foyer.webp',
    thumbnail: '/images/projects/indis-entrance-foyer-preview.webp',
    width: 1520,
    height: 1034,
    mood: 'Indis Viva City · Entrance design'
  }
];

const PILLARS = [
  {
    icon: Sparkles,
    title: "Modern Luxury",
    description: "Clean, elegant lines and relaxing colors that make your home feel bright and spacious."
  },
  {
    icon: Compass,
    title: "Thoughtful Layouts",
    description: "Floorplans arranged for great natural sunlight, fresh air, and easy everyday movement."
  },
  {
    icon: Sliders,
    title: "Functional Living",
    description: "Clever built-in wardrobes, hidden storage, and clean furniture that keep your home tidy."
  },
  {
    icon: Layers,
    title: "Quality Materials",
    description: "Durable natural stone, strong wood veneers, and champagne gold hardware that last for years."
  }
];

export default function HomePage() {
  const navigate = useNavigate();
  const [activeScene, setActiveScene] = useState(HERO_SCENES[0]);
  const [activeProject, setActiveProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const featuredServices = SERVICES.slice(0, 4);

  const handleEnquireService = (serviceName) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
  };

  const openLightbox = (project) => {
    setLightboxIndex(0);
    setActiveProject(project);
  };

  return (
    <div className="bg-[#F7F3EC] overflow-hidden">
      {/* 1. CINEMATIC HERO SECTION (Laptop & Desktop Balanced) */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] lg:max-h-[860px] flex flex-col justify-end pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-[#1B1917] rounded-b-[24px] sm:rounded-b-[40px] overflow-hidden border-b border-black/10 shadow-lg">
        {/* Dynamic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false} mode="sync">
            <motion.img
              key={activeScene.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={activeScene.image}
              srcSet={`${activeScene.thumbnail} 768w, ${activeScene.image} ${activeScene.width}w`}
              sizes="(max-width: 1023px) 150vh, 100vw"
              width={activeScene.width}
              height={activeScene.height}
              alt={activeScene.mood}
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />
        </div>

        {/* Ambient Halo */}
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-[#B58A3B]/10 blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
            {/* Left Headline & Content */}
            <div className="max-w-2xl lg:max-w-3xl">
              {/* Studio location */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 text-white mb-3 sm:mb-4"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0 text-[#B58A3B]" aria-hidden="true" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#D8C8B2]">
                  Artscape Interiors • Kondapur, Hyderabad
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-[1.1] font-sans"
              >
                Spaces that inspire.{' '}
                <span className="italic font-serif font-normal text-[#D8C8B2] block sm:inline">
                  Interiors that belong.
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/85 max-w-xl font-light leading-relaxed"
              >
                {BRAND.heroSupportingText}
              </motion.p>

              {/* Action Buttons with mobile thumb-friendly targets */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5"
              >
                <Link
                  to="/gallery"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold px-6 py-3.5 sm:px-7 rounded-full bg-[#B58A3B] text-white hover:bg-[#A37B30] shadow-sm hover:shadow-lg transition-all text-center"
                >
                  <span>Explore Our Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-medium px-6 py-3.5 sm:px-7 rounded-full bg-transparent text-[#F7F3EC] border border-white/20 hover:border-[#B58A3B] hover:bg-white/10 hover:text-white transition-all text-center"
                >
                  <span>Let's Talk</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Interactive Scene Switcher (Compact for Laptop & Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/15 w-full sm:max-w-xs self-stretch sm:self-auto lg:self-end"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B58A3B]">
                  Explore the Project
                </span>
                <span className="text-[9px] font-mono text-white/60">Indis Viva City</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {HERO_SCENES.map((scene) => {
                  const Icon = scene.icon;
                  const isActive = activeScene.id === scene.id;
                  return (
                    <button
                      key={scene.id}
                      type="button"
                      onClick={() => setActiveScene(scene)}
                      className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-white/20 border-[#B58A3B] text-white shadow-sm'
                          : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#B58A3B]' : 'text-white/60'}`} />
                      <span className="text-[9px] font-medium tracking-tight text-center truncate max-w-full">
                        {scene.name}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-[9px] text-white/60 text-center font-mono italic">
                {activeScene.mood}
              </p>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 sm:mt-10 pt-4 sm:pt-5 border-t border-white/10 flex items-center justify-between text-white/60 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[#B58A3B] tracking-wider uppercase text-[11px]">
                Modern Luxury
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:inline text-[11px]">Kondapur, Hyderabad</span>
            </div>

            <Link
              to="/about"
              className="flex items-center gap-1.5 text-white/80 hover:text-[#B58A3B] transition-colors"
            >
              <span className="uppercase text-[10px] tracking-wider">About Our Studio</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#222222]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Project · Indis Viva City"
            title={<>One home. <span className="italic font-serif text-[#B58A3B]">Every detail considered.</span></>}
            subtitle="A coordinated home design, from the welcoming foyer and pooja space to the living room, bedrooms, kitchen, and utility."
            align="split"
          />
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <img src="/images/projects/indis-living-tv-wall.webp" srcSet="/images/projects/indis-living-tv-wall-preview.webp 768w, /images/projects/indis-living-tv-wall.webp 1592w" sizes="(min-width: 1024px) 50vw, 100vw" alt="Indis Viva City living room TV wall design" width="1592" height="988" loading="lazy" decoding="async" className="w-full rounded-3xl border border-[#222222]/8" />
            <div className="space-y-5">
              <p className="text-xs font-mono tracking-widest uppercase text-[#B58A3B]">From concept to comfort</p>
              <h3 className="text-2xl sm:text-3xl font-light">Warm finishes. Thoughtful storage. A home that flows.</h3>
              <p className="text-sm leading-relaxed text-[#85817B]">The design brings together custom TV cabinetry, botanical bedroom walls, playful children’s storage, a modular kitchen, and practical laundry cabinetry.</p>
              <p className="text-xs text-[#85817B]">Project design renders from the studio’s Indis Viva City presentation.</p>
              <Link to="/gallery#indis-viva-city" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#222222] hover:text-[#B58A3B]">Explore this project <ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US TEASER */}
      <section className="py-16 sm:py-24 bg-[#F7F3EC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title={
              <>
                Designing spaces with{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">meaning</span> and purpose.
              </>
            }
            subtitle="Based in Kondapur, Hyderabad, Artscape Interiors creates peaceful, modern homes where you and your family can truly relax."
            align="split"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Architectural Photo Vignette */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[460px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#222222]/8 bg-[#EFECE6]">
                <img
                  src="/images/projects/geometric-entry-partition-preview.webp"
                  alt="Modern clean living space"
                  width="1007"
                  height="647"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge (Contained safely on mobile) */}
              <div className="absolute bottom-2 right-2 sm:-bottom-6 sm:right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#222222]/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] max-w-[260px] sm:max-w-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg overflow-hidden bg-[#F7F3EC] p-0.5 border border-[#B58A3B]/40 shrink-0">
                    <img src={logoImg} alt="Artscape Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#222222]">
                      Kondapur Studio
                    </h4>
                    <p className="text-[10px] text-[#85817B] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#B58A3B]" />
                      <span>Hyderabad, Telangana</span>
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-[#222222]/80 leading-relaxed italic border-t border-[#222222]/6 pt-1.5 font-serif">
                  "{BRAND.supportingMessage}"
                </p>
              </div>
            </div>

            {/* Content in simple English */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg sm:text-xl lg:text-2xl font-light text-[#222222] leading-snug">
                We believe a great home should feel open, calm, and designed specifically around how you live every day.
              </p>
              <p className="text-sm text-[#85817B] leading-relaxed">
                Every project at Artscape begins by understanding your needs. We blend clean modern design with warm natural materials and smart storage so that every room looks uncluttered and feels welcoming.
              </p>

              {/* Four Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-4 rounded-2xl bg-white/70 border border-[#222222]/6 hover:border-[#B58A3B]/40 hover:bg-white transition-all duration-300"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#B58A3B]/10 flex items-center justify-center text-[#B58A3B] mb-2.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-medium text-[#222222]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#85817B] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#222222] hover:text-[#B58A3B] transition-colors"
                >
                  <span>Learn More About Artscape</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B58A3B]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MATERIAL & STYLE EXPLORER */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#222222]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Styles & Finishes"
            title={
              <>
                Explore our signature{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">interior styles</span>.
              </>
            }
            subtitle="Click on any style below to see matching colors, wood finishes, and lighting options."
            align="split"
          />

          <div className="mt-6 sm:mt-8">
            <AtmosphereLab />
          </div>
        </div>
      </section>

      {/* 5. SERVICES PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#F7F3EC] relative border-t border-[#222222]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Interior design services for{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">your whole home</span>.
              </>
            }
            subtitle="From individual room renovations to complete turnkey home interiors, we handle everything from planning to move-in."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onEnquire={handleEnquireService}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-full bg-[#222222] text-[#F7F3EC] hover:bg-[#161616] hover:text-[#B58A3B] transition-all shadow-sm"
            >
              <span>View All 8 Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. GALLERY PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] relative border-t border-[#222222]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title={
              <>
                Take a look at our{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">project collection</span>.
              </>
            }
            subtitle="Open a project to see its rooms and details together, or explore design references and concept boards in the portfolio."
            align="split"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PROJECT_COLLECTIONS.map((project) => (
              <GalleryCollectionCard key={project.id} collection={project} onOpen={openLightbox} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-full bg-[#B58A3B] text-white hover:bg-[#A37B30] transition-all shadow-sm"
            >
              <span>Explore the Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. PROJECT ESTIMATOR */}
      <section className="py-16 sm:py-24 bg-[#F7F3EC] border-t border-[#222222]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project Planner"
            title={
              <>
                Plan your project scope and{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">estimated timeline</span>.
              </>
            }
            subtitle="Choose your home type and rooms below to see the estimated time needed and send it to our studio on WhatsApp."
            align="split"
          />

          <div className="mt-6 sm:mt-8">
            <SpatialEstimator />
          </div>
        </div>
      </section>

      {activeProject && (
        <GalleryLightbox
          isOpen
          title={activeProject.title}
          currentIndex={lightboxIndex}
          items={activeProject.items}
          onClose={() => setActiveProject(null)}
          onNext={() => setLightboxIndex((index) => (index + 1) % activeProject.items.length)}
          onPrev={() => setLightboxIndex((index) => (index - 1 + activeProject.items.length) % activeProject.items.length)}
          onSelect={setLightboxIndex}
        />
      )}
    </div>
  );
}
