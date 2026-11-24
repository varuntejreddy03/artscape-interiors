import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const controlClass = 'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/12 text-white hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-gold cursor-pointer';

export default function GalleryLightbox({
  isOpen,
  title = 'Project Showcase',
  currentIndex,
  items,
  showOriginal,
  onClose,
  onNext,
  onPrev,
  onSelect,
}) {
  const dialogRef = useRef(null);
  const previewsRef = useRef(null);
  const currentItem = items?.[currentIndex];

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    const previews = previewsRef.current;
    const selected = previews?.children[currentIndex];
    if (selected) {
      previews.scrollLeft = selected.offsetLeft - (previews.clientWidth - selected.offsetWidth) / 2;
    }
  }, [currentIndex, isOpen]);

  if (!isOpen || !currentItem) return null;

  function handleArrowKey(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      if (event.key === 'ArrowRight') onNext();
      else onPrev();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onKeyDown={handleArrowKey}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-y-auto bg-[#171513] px-3 py-3 text-white backdrop:bg-black sm:px-6 sm:py-5"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="font-medium text-gold-light">{title}</span>
          <span className="tabular-nums text-white/70" aria-live="polite">{currentIndex + 1} / {items.length}</span>
        </div>
        <button type="button" onClick={onClose} aria-label="Close Lightbox" className={controlClass}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative mx-auto mt-3 flex max-w-6xl items-center justify-between gap-2 sm:gap-5">
        <button type="button" onClick={onPrev} aria-label="Previous Image" className={controlClass}>
          <ChevronLeft className="h-5 w-5" />
        </button>

        <motion.img
          key={currentItem.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          src={currentItem.image}
          alt={currentItem.title}
          width={currentItem.width}
          height={currentItem.height}
          decoding="async"
          className="h-[clamp(170px,50dvh,720px)] w-0 flex-1 object-contain sm:h-[clamp(200px,58dvh,800px)]"
        />

        <button type="button" onClick={onNext} aria-label="Next Image" className={controlClass}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mx-auto mt-3 max-w-2xl text-center">
        <h2 className="text-lg font-medium sm:text-xl">{currentItem.title}</h2>
        {currentItem.designNotes && (
          <div className="mt-1 flex items-center justify-center gap-2 text-xs text-gold-light">
            <Sparkles aria-hidden="true" className="h-3 w-3" />
            <span>{currentItem.designNotes}</span>
          </div>
        )}
        <p className="mt-1 text-sm leading-relaxed text-white/75">{currentItem.description}</p>
        {showOriginal && (
          <a href={currentItem.image} target="_blank" rel="noreferrer" className="mt-2 inline-block rounded-sm text-sm text-gold-light underline underline-offset-4 focus-visible:outline-2">
            View full-size board<span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>

      {onSelect && (
        <div ref={previewsRef} role="group" aria-label="Choose an image" className="relative mx-auto mt-4 flex w-fit max-w-full gap-2 overflow-x-auto p-1">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={item.title}
              aria-current={currentIndex === index ? 'true' : undefined}
              className="h-12 w-16 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-transparent opacity-70 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-white aria-[current=true]:border-gold-light aria-[current=true]:opacity-100 sm:h-14 sm:w-20"
            >
              <img src={item.thumbnail} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </dialog>
  );
}
