import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  type = 'button',
  target,
  rel,
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 select-none overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A3B]/50";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 rounded-full gap-2",
    md: "text-sm px-6 py-3 rounded-full gap-2.5",
    lg: "text-base px-8 py-4 rounded-full gap-3",
  };

  const variantStyles = {
    // Somerville-inspired primary button: deep charcoal with clean white text and subtle gold border highlight on hover
    primary: "bg-[#222222] text-[#F7F3EC] border border-[#222222] hover:bg-[#161616] hover:border-[#B58A3B] shadow-sm hover:shadow-md",
    
    // Champagne Gold luxury fill
    gold: "bg-[#B58A3B] text-[#FFFFFF] border border-[#B58A3B] hover:bg-[#A37B30] shadow-sm hover:shadow-lg hover:shadow-[#B58A3B]/20",
    
    // Architectural outline button on light background
    outline: "bg-transparent text-[#222222] border border-[#222222]/20 hover:border-[#222222] hover:bg-[#222222] hover:text-[#FFFFFF]",
    
    // Architectural outline button on dark background (like in Somerville dark footer)
    'outline-light': "bg-transparent text-[#F7F3EC] border border-white/20 hover:border-[#B58A3B] hover:bg-white/10 hover:text-white",
    
    // Pure ghost link with hover underline/arrow shift
    ghost: "bg-transparent text-[#222222] hover:text-[#B58A3B] px-0 py-0 gap-2 font-medium tracking-normal",
    
    // Pill light with backdrop blur
    glass: "bg-[#F7F3EC]/80 backdrop-blur-md text-[#222222] border border-[#222222]/10 hover:border-[#B58A3B] hover:bg-[#F7F3EC]"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        target={target}
        rel={rel}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
