import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function GalleryLightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev
}) {
  const currentItem = items && items[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl select-none"
        onClick={onClose}
      >
        {/* Top Controls Bar */}
        <div
          className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 sm:p-6 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Index Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-[#B58A3B] uppercase">
              Inspiration Showcase
            </span>
            <span className="text-white/30 text-xs">•</span>
            <span className="text-xs font-mono text-white/80">
              {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Navigation Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Image"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Navigation Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Image"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none hover:scale-105"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Lightbox Content Area */}
        <div
          className="relative max-w-5xl w-full max-h-[85vh] mx-auto px-4 sm:px-8 flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-h-[52vh] sm:max-h-[65vh] w-auto overflow-hidden rounded-xl shadow-2xl border border-white/10"
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[52vh] sm:max-h-[65vh] w-auto object-contain max-w-full"
            />
          </motion.div>

          {/* Bottom Image Details & Inspiration Notes */}
          <motion.div
            key={`caption-${currentItem.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-center max-w-2xl text-white px-4"
          >
            <h4 className="text-lg sm:text-xl font-light tracking-wide text-white">
              {currentItem.title}
            </h4>

            {currentItem.designNotes && (
              <div className="mt-1 flex items-center justify-center gap-2 text-xs font-mono text-[#B58A3B]">
                <Sparkles className="w-3 h-3" />
                <span>{currentItem.designNotes}</span>
              </div>
            )}

            <p className="mt-2 text-xs sm:text-sm text-white/70 line-clamp-2 leading-relaxed">
              {currentItem.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
