import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import InstagramIcon from '../components/InstagramIcon';
import { BRAND, getStudioStatus } from '../data/brand';
import logoImg from '../assets/logo.webp';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  const [studioStatus, setStudioStatus] = useState(getStudioStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStudioStatus(getStudioStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FAF8F5] overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Contact Us"
        title={
          <>
            Let's design your{' '}
            <span className="italic font-serif font-normal text-[#B58A3B]">dream home</span>.
          </>
        }
        subtitle="Get in touch with our design studio in Kondapur, Hyderabad. Tell us about your home and we will be happy to guide you."
        breadcrumb="Contact Us"
        bgImage="/images/projects/geometric-entry-partition-preview.webp"
      />

      {/* 2. Main Contact Grid in simple English */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title={
              <>
                Visit our Kondapur studio or{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">send us a message</span>.
              </>
            }
            subtitle="Whether you already have a floorplan or just want to explore design ideas, we are here to help."
            align="split"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Studio Card & Map */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Identity Card */}
              <div className="bg-white rounded-2xl p-7 border border-[#222222]/8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#F7F3EC] p-1 border border-[#B58A3B]/40 shrink-0">
                      <img src={logoImg} alt="Artscape Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-wider text-[#222222] uppercase">
                        ARTSCAPE INTERIORS
                      </h3>
                      <p className="text-xs text-[#85817B]">Kondapur Studio</p>
                    </div>
                  </div>

                  {/* Live Status Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium border ${
                    studioStatus.isOpen
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-stone-100 text-stone-600 border-stone-200'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      studioStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'
                    }`} />
                    <span>{studioStatus.isOpen ? 'Open Now' : 'Closed'}</span>
                  </div>
                </div>

                <p className="text-xs text-[#85817B] italic font-serif leading-relaxed border-l-2 border-[#B58A3B] pl-3 py-0.5">
                  "{BRAND.tagline}"
                </p>

                {/* Direct Contact Channels */}
                <div className="space-y-4 pt-2">
                  {/* Phone */}
                  <a
                    href={`tel:${BRAND.contact.phone}`}
                    className="flex items-start gap-3 text-sm text-[#222222] hover:text-[#B58A3B] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#FAF8F5] group-hover:bg-[#B58A3B]/10 flex items-center justify-center text-[#B58A3B] shrink-0 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#85817B]">Call Us Directly</span>
                      <span className="font-medium">{BRAND.contact.phoneDisplay}</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${BRAND.contact.email}`}
                    className="flex items-start gap-3 text-sm text-[#222222] hover:text-[#B58A3B] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#FAF8F5] group-hover:bg-[#B58A3B]/10 flex items-center justify-center text-[#B58A3B] shrink-0 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[11px] uppercase tracking-wider text-[#85817B]">Email Us</span>
                      <span className="font-medium truncate block">{BRAND.contact.email}</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-3 text-sm text-[#222222]">
                    <div className="w-9 h-9 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#B58A3B] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#85817B]">Studio Location</span>
                      <span className="font-medium">{BRAND.location.fullAddress}</span>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3 text-sm text-[#222222]">
                    <div className="w-9 h-9 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#B58A3B] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-xs space-y-1">
                      <span className="block text-[11px] uppercase tracking-wider text-[#85817B]">Working Hours</span>
                      <p><strong className="text-[#222222]">Monday – Saturday:</strong> 10:00 AM – 5:00 PM</p>
                      <p><strong className="text-[#222222]">Sunday:</strong> 10:00 AM – 2:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social & WhatsApp Buttons */}
                <div className="pt-2 border-t border-[#222222]/8 flex items-center justify-between">
                  <a
                    href={BRAND.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#222222] hover:text-[#B58A3B] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#B58A3B]" />
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`https://wa.me/${BRAND.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#128C7E] hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Google Map of Kondapur */}
              <div className="rounded-2xl overflow-hidden border border-[#222222]/8 shadow-sm bg-white p-2">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                  <iframe
                    title="Artscape Interiors Kondapur Hyderabad"
                    src={BRAND.location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[20%] contrast-[1.05]"
                  />
                </div>
                <div className="p-3 text-right">
                  <a
                    href={BRAND.location.mapDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#85817B] hover:text-[#B58A3B] inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B58A3B] block mb-1">
                  Enquiry Form
                </span>
                <h3 className="text-2xl font-light text-[#222222]">
                  {serviceParam ? `Enquiry for ${serviceParam}` : 'Tell us about your home'}
                </h3>
              </div>

              <ContactForm key={serviceParam || 'default'} initialService={serviceParam} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
