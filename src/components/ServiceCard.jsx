import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service, onEnquire, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      className="group relative flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-[#222222]/8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(181,138,59,0.12)] hover:border-[#B58A3B]/40 transition-all duration-500"
    >
      {/* Top Image Container with aspect ratio and smooth zoom */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#EDE7DD]">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Category Number Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-[#222222]/80 backdrop-blur-md text-[#F7F3EC] border border-white/10">
            {service.number}
          </span>
        </div>

        {/* Floating Quick Action icon */}
        <button
          type="button"
          onClick={() => onEnquire && onEnquire(service.inquiryValue)}
          aria-label={`Enquire about ${service.title}`}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F7F3EC]/90 backdrop-blur-md text-[#222222] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#B58A3B] hover:text-white cursor-pointer"
        >
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#222222] group-hover:text-[#B58A3B] transition-colors duration-300">
            {service.title}
          </h3>

          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[#B58A3B]/90">
            {service.tagline}
          </p>

          <p className="mt-3 text-sm text-[#85817B] leading-relaxed line-clamp-3">
            {service.description}
          </p>

          {/* Feature highlights */}
          <ul className="mt-5 space-y-2 pt-4 border-t border-[#222222]/6">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#222222]/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B58A3B] mt-1.5 shrink-0" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-6 pt-4 border-t border-[#222222]/6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onEnquire && onEnquire(service.inquiryValue)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#222222] hover:text-[#B58A3B] transition-colors cursor-pointer group/btn"
          >
            <span>Enquire For This Space</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#B58A3B]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
