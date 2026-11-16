import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunMedium, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PALETTES = [
  {
    id: 'travertine-warmth',
    name: 'Warm Ivory & Gold',
    subtitle: 'Bright, airy, and welcoming',
    lighting: 'Warm ambient ceiling lights',
    image: '/images/projects/indis-living-tv-wall-preview.webp',
    colors: [
      { name: 'Warm Ivory', hex: '#F7F3EC' },
      { name: 'Champagne Gold', hex: '#B58A3B' },
      { name: 'Soft Beige', hex: '#E8DEC8' },
      { name: 'Deep Charcoal', hex: '#222222' }
    ],
    materials: [
      'Light stone-look wall panels',
      'Soft neutral upholstery',
      'Champagne gold metal trims',
      'Warm white wall paint'
    ],
    roomTypes: 'Best for: Living room, Entrance foyer, Drawing room'
  },
  {
    id: 'walnut-calacatta',
    name: 'Ivory & Walnut Accents',
    subtitle: 'Warm, practical kitchen storage',
    lighting: 'Task lights beneath overhead cabinetry',
    image: '/images/projects/indis-modular-kitchen-preview.webp',
    colors: [
      { name: 'Smoked Walnut', hex: '#3E2F28' },
      { name: 'White Marble', hex: '#F4F4F2' },
      { name: 'Bronze', hex: '#8C7A6B' },
      { name: 'Graphite', hex: '#1C1C1C' }
    ],
    materials: [
      'Dark continuous worktops',
      'Warm wood-tone cabinet accents',
      'Black metal profile handles',
      'Glass-front overhead cabinets'
    ],
    roomTypes: 'Best for: Modular kitchen, Dining area, Home office'
  },
  {
    id: 'nordic-serenity',
    name: 'Botanical Neutrals',
    subtitle: 'Peaceful master bedroom',
    lighting: 'Soft warm glow behind bed headboard',
    image: '/images/projects/indis-master-bedroom-preview.webp',
    colors: [
      { name: 'Light Oak', hex: '#D2B48C' },
      { name: 'Warm Beige', hex: '#EDE6DD' },
      { name: 'Soft Grey', hex: '#A89F91' },
      { name: 'Pure Linen', hex: '#FAF9F6' }
    ],
    materials: [
      'Botanical wall art and wood-tone panels',
      'Soft padded fabric headboard',
      'Hidden warm LED glow lights',
      'Light-toned flooring'
    ],
    roomTypes: 'Best for: Master bedroom, Walk-in wardrobe, Guest room'
  },
  {
    id: 'charcoal-brass',
    name: 'Walnut & Warm Brass',
    subtitle: 'Bold, modern, and striking',
    lighting: 'Dimmed accent spots & backlit shelves',
    image: '/images/projects/dining-display-counter-preview.webp',
    colors: [
      { name: 'Warm Walnut', hex: '#624532' },
      { name: 'Gold Brass', hex: '#C9A054' },
      { name: 'Muted Grey', hex: '#85817B' },
      { name: 'Soft White', hex: '#FFFFFF' }
    ],
    materials: [
      'Warm walnut-tone cabinet finish',
      'Brushed brass handles & trims',
      'Backlit glass display shelves',
      'Smooth stone countertop'
    ],
    roomTypes: 'Best for: Entertainment lounge, Bar counter, TV unit'
  }
];

export default function AtmosphereLab() {
  const [selectedPalette, setSelectedPalette] = useState(PALETTES[0]);
  const navigate = useNavigate();

  const handleApplyPalette = () => {
    navigate(`/contact?service=${encodeURIComponent(`Aesthetic: ${selectedPalette.name}`)}`);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#222222]/8 shadow-xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#222222]/8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[1.5px] bg-[#B58A3B]"></span>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B58A3B]">
              Materials & Lighting
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-light text-[#222222]">
            Pick a style you like for your home
          </h3>
          <p className="mt-1 text-sm text-[#85817B]">
            Click below to see the colors, materials, and lights we use to bring each room together.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {PALETTES.map((p) => {
            const isActive = selectedPalette.id === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPalette(p)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#222222] text-[#F7F3EC] shadow-sm'
                    : 'bg-[#F7F3EC] text-[#85817B] hover:text-[#222222] hover:bg-[#EFECE6]'
                }`}
              >
                {p.name.split('&')[0].trim()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Preview Stage */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Render Preview */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPalette.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[16/10] max-h-[380px] rounded-2xl overflow-hidden shadow-lg border border-[#222222]/10 bg-[#EDE7DD]"
            >
              <img
                src={selectedPalette.image}
                alt={selectedPalette.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B58A3B] block mb-1">
                    {selectedPalette.subtitle}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-light text-white">
                    {selectedPalette.name}
                  </h4>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-white/90 border border-white/10">
                  <SunMedium className="w-3.5 h-3.5 text-[#B58A3B]" />
                  <span>{selectedPalette.lighting}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Swatches & Materials in simple English */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#222222] block mb-3">
              Matching Color Palette
            </span>
            <div className="grid grid-cols-4 gap-2.5">
              {selectedPalette.colors.map((c, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-full aspect-square rounded-xl shadow-xs border border-black/10 transition-transform hover:scale-105"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="mt-1.5 text-[10px] font-mono text-[#85817B]">
                    {c.hex}
                  </span>
                  <span className="text-[9px] text-[#222222] font-medium truncate max-w-full text-center">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#222222]/8 space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#222222] block">
              Suggested Finishes
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedPalette.materials.map((m, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] text-xs text-[#222222]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B58A3B] shrink-0" />
                  <span className="truncate">{m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#222222]/8 text-xs text-[#85817B]">
            <span className="font-semibold text-[#222222] block mb-1">Where this looks best:</span>
            <p>{selectedPalette.roomTypes}</p>
          </div>

          <div className="pt-3">
            <button
              type="button"
              onClick={handleApplyPalette}
              className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold py-3.5 px-6 rounded-full bg-[#222222] text-[#F7F3EC] hover:bg-[#B58A3B] hover:text-white transition-all shadow-sm cursor-pointer"
            >
              <span>Ask About This Style</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
