import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left', 'center', 'split'
  dark = false,
  className = '',
  rightElement = null
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto max-w-3xl',
    split: 'text-left'
  };

  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {align === 'split' ? (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#222222]/10">
          <div className="max-w-2xl">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-3"
              >
                <span className="w-6 h-[1.5px] bg-[#B58A3B]"></span>
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B58A3B]">
                  {eyebrow}
                </span>
              </motion.div>
            )}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight ${
                dark ? 'text-white' : 'text-[#222222]'
              }`}
            >
              {title}
            </motion.h2>
          </div>

          <div className="max-w-md lg:pb-1">
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-base leading-relaxed ${
                  dark ? 'text-[#D8C8B2]/80' : 'text-[#85817B]'
                }`}
              >
                {subtitle}
              </motion.p>
            )}
            {rightElement}
          </div>
        </div>
      ) : (
        <div className={alignClasses[align] || alignClasses.left}>
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 mb-3 ${
                align === 'center' ? 'justify-center' : ''
              }`}
            >
              <span className="w-6 h-[1.5px] bg-[#B58A3B]"></span>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B58A3B]">
                {eyebrow}
              </span>
              {align === 'center' && <span className="w-6 h-[1.5px] bg-[#B58A3B]"></span>}
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] ${
              dark ? 'text-white' : 'text-[#222222]'
            }`}
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`mt-4 text-base sm:text-lg leading-relaxed ${
                dark ? 'text-[#D8C8B2]/80' : 'text-[#85817B]'
              } ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
    </div>
  );
}
