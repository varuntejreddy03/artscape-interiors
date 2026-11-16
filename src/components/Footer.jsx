import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp, Mail, Phone, MapPin, Clock } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import logoImg from '../assets/logo.webp';
import { BRAND } from '../data/brand';

const CURRENT_YEAR = new Date().getFullYear();

const FOOTER_NAV = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#181818] text-[#F7F3EC] rounded-t-[32px] sm:rounded-t-[48px] relative pt-16 sm:pt-20 pb-12 overflow-hidden border-t border-white/5">
      {/* Background ambient architectural glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B58A3B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Somerville-Style Hero Statement Banner */}
        <div className="pb-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-medium tracking-[0.2em] text-[#B58A3B] uppercase block mb-3">
              Start Your Transformation
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
              Ready to elevate your space?{' '}
              <Link
                to="/contact"
                className="text-[#B58A3B] hover:text-[#C9A054] italic font-serif underline decoration-1 underline-offset-8 transition-colors inline-flex items-center gap-2 group"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-8 h-8 inline transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full bg-[#B58A3B] text-white hover:bg-[#A37B30] shadow-sm hover:shadow-lg transition-all"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Multi-column Studio Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-16 border-b border-white/10">
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3.5 inline-flex">
              <div className="w-28 h-[76px] rounded-xl overflow-hidden bg-[#F7F3EC] border border-[#B58A3B]/40 shrink-0">
                <img
                  src={logoImg}
                  alt="Artscape Interiors"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-semibold tracking-[0.16em] uppercase text-white block">
                  ARTSCAPE
                </span>
                <span className="text-xs tracking-[0.26em] text-[#B58A3B] uppercase font-medium">
                  INTERIORS
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              {BRAND.tagline}
            </p>

            <p className="text-xs text-[#D8C8B2] italic font-serif text-sm">
              "{BRAND.supportingMessage}"
            </p>

            {/* Social Link */}
            <div className="pt-2">
              <a
                href={BRAND.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-white/80 hover:text-[#B58A3B] bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#B58A3B]" />
                <span>Follow on Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-white/40" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 6-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B58A3B]">
              Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Hours (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B58A3B] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Studio Hours</span>
            </h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li>
                <span className="block font-medium text-white">Monday – Saturday</span>
                <span className="text-[#D8C8B2]">10:00 AM – 5:00 PM</span>
              </li>
              <li>
                <span className="block font-medium text-white">Sunday</span>
                <span className="text-[#D8C8B2]">10:00 AM – 2:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Studio Location & Contact (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B58A3B]">
              Studio Location
            </h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B58A3B] shrink-0 mt-0.5" />
                <span>{BRAND.location.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B58A3B] shrink-0" />
                <a
                  href={`tel:${BRAND.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B58A3B] shrink-0" />
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {BRAND.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {CURRENT_YEAR} Artscape Interiors. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-white/40">Kondapur, Hyderabad</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/70 hover:text-[#B58A3B] transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
