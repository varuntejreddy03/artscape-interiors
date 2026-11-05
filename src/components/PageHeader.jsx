import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  bgImage
}) {
  return (
    <div className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-[#181818] text-[#F7F3EC] rounded-b-[24px] sm:rounded-b-[40px] overflow-hidden border-b border-black/10 shadow-lg">
      {/* Background Image / Ambient Scrim */}
      {bgImage ? (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Interior background"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/80 to-transparent" />
        </div>
      ) : (
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B58A3B]/10 rounded-full blur-[100px] pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs tracking-wider uppercase text-white/50 mb-4 font-mono"
        >
          <Link to="/" className="hover:text-[#B58A3B] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-[#B58A3B]">{breadcrumb || eyebrow}</span>
        </motion.div>

        {/* Eyebrow */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-5 h-[1.5px] bg-[#B58A3B]"></span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B58A3B]">
              {eyebrow}
            </span>
          </motion.div>
        )}

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white max-w-3xl leading-[1.14]"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
