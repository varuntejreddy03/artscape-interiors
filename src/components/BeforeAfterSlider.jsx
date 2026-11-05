import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
  afterImage = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  beforeLabel = "Before: Bare Concrete Space",
  afterLabel = "After: Finished Artscape Home"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleClick = (e) => {
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Slider Viewport with controlled laptop height and touch-pan-y for mobile scrolling */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/9] max-h-[440px] sm:max-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-[#222222]/10 cursor-ew-resize select-none bg-[#181818] touch-pan-y"
      >
        {/* AFTER IMAGE (Behind) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* After Label Badge */}
        <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-10 pointer-events-none">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#222222]/85 backdrop-blur-md text-white border border-[#B58A3B]/40 text-[10px] sm:text-xs font-medium">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B58A3B]" />
            <span className="hidden sm:inline">{afterLabel}</span>
            <span className="sm:hidden font-mono uppercase tracking-wider">After Home</span>
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped on top) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-110 brightness-90"
          />
          <div className="absolute inset-0 bg-blue-950/20 mix-blend-color" />
        </div>

        {/* Before Label Badge */}
        <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-10 pointer-events-none">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#181818]/85 backdrop-blur-md text-[#D8C8B2] border border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-wider">
            <span className="hidden sm:inline">{beforeLabel}</span>
            <span className="sm:hidden">Before Room</span>
          </div>
        </div>

        {/* SLIDER DIVIDER LINE & GOLD GRIP HANDLE */}
        <div
          className="absolute top-0 bottom-0 z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-[#B58A3B] shadow-[0_0_10px_rgba(181,138,59,0.5)]" />

          <div
            onMouseDown={handleMouseDown}
            onTouchStart={() => setIsDragging(true)}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#222222] border-2 border-[#B58A3B] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform cursor-grab active:cursor-grabbing"
          >
            <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#B58A3B]" />
          </div>
        </div>

        {/* Bottom Helper Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/80 text-[11px] font-mono tracking-wider uppercase">
            Drag divider left or right
          </div>
        </div>
      </div>

      {/* Description under slider in simple English */}
      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#85817B]">
        <span>← Before: Raw empty room</span>
        <span className="font-medium text-[#222222]">Designed and built by Artscape Interiors</span>
        <span>After: Ready to move in →</span>
      </div>
    </div>
  );
}
