import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, Sliders, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import logoImg from '../assets/logo.webp';

const PILLARS_EXPANDED = [
  {
    icon: Sparkles,
    number: "01",
    title: "Modern Luxury",
    tagline: "Clean, calming, and clutter-free",
    description: "To us, modern luxury means a home that feels spacious, peaceful, and balanced. We use soft neutral colors, clean lines, and warm lighting so your space never feels crowded."
  },
  {
    icon: Compass,
    number: "02",
    title: "Smart Space Planning",
    tagline: "Making every square foot work for you",
    description: "Before picking colors or furniture, we study your floorplan carefully. We make sure you get good natural sunlight, easy walking paths, and plenty of well-placed storage."
  },
  {
    icon: Sliders,
    number: "03",
    title: "Practical Daily Living",
    tagline: "Designed for real life and family routines",
    description: "A beautiful home must also be easy to live in. We include smart storage for your kitchen, practical wardrobe organizers, and durable surfaces that are easy to clean."
  },
  {
    icon: Layers,
    number: "04",
    title: "Quality Materials",
    tagline: "Finishes that stay beautiful for years",
    description: "We pick materials that look great and last long: natural stone countertops, smooth wood veneers, soft fabrics, and champagne gold metal accents."
  }
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Meet & Discuss Your Home",
    desc: "We look at your floorplan, understand your family's daily routine, and talk about your style preferences and budget."
  },
  {
    step: "02",
    title: "2D Layouts & 3D Views",
    desc: "We share 2D space plans and realistic 3D pictures so you can see exactly how each room will look before any work starts."
  },
  {
    step: "03",
    title: "Pick Actual Materials",
    desc: "You touch and choose physical samples of wood finishes, stone countertops, wall colors, fabrics, and light fixtures."
  },
  {
    step: "04",
    title: "Build & Move In",
    desc: "Our skilled carpenters, electricians, and painters carry out the work with strict quality checks right up to cleaning and handover."
  }
];

const MATERIALS = [
  { name: "Natural Stone & Travertine", desc: "Durable, heat-resistant, and easy-to-clean stone for countertops, vanities, and TV wall accents." },
  { name: "Oak & Walnut Wood Finishes", desc: "Warm, natural wood textures for custom wardrobes, dining tables, and wall paneling." },
  { name: "Champagne Gold Trims", desc: "Subtle gold handles, hanging lamps, and frame details that add a classy touch." },
  { name: "Soft Fabrics & Linens", desc: "Comfortable sofa fabrics, padded bed headrests, and curtains that soften every room." }
];

export default function AboutPage() {
  return (
    <div className="bg-[#F7F3EC] overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="About Artscape"
        title={
          <>
            Designing spaces with{' '}
            <span className="italic font-serif font-normal text-[#B58A3B]">meaning</span> and purpose.
          </>
        }
        subtitle="Artscape Interiors is a boutique interior design studio in Kondapur, Hyderabad. We help homeowners turn empty spaces into warm, modern, and functional homes."
        breadcrumb="About Us"
        bgImage="/images/projects/indis-living-tv-wall-preview.webp"
      />

      {/* 2. Story Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#B58A3B] uppercase block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222] tracking-tight leading-tight">
                "Elevating spaces with modern luxury, precision & purpose."
              </h2>
              <p className="text-base sm:text-lg text-[#85817B] leading-relaxed">
                We believe that a great home should make everyday life easier, calmer, and more enjoyable for your family.
              </p>
              <p className="text-sm sm:text-base text-[#85817B] leading-relaxed">
                Located in Kondapur, Hyderabad, Artscape Interiors works closely with clients across the city. Whether you have just received the keys to a new flat or want to renovate your existing home, our team takes care of the entire process from the first drawing to final cleaning.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B58A3B]/10 flex items-center justify-center text-[#B58A3B]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#222222]">Turnkey Service</h4>
                    <p className="text-xs text-[#85817B]">From 3D plans to final handover</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B58A3B]/10 flex items-center justify-center text-[#B58A3B]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#222222]">Custom Built</h4>
                    <p className="text-xs text-[#85817B]">Furniture sized to your exact walls</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Composition */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#222222]/8 bg-[#EDE7DD]">
                <img
                  src="/images/projects/indis-master-bedroom-preview.webp"
                  alt="Modern clean bedroom"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Logo Card (Safely contained on mobile) */}
              <div className="absolute bottom-2 left-2 sm:-bottom-8 sm:left-4 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#222222]/10 max-w-[260px] sm:max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#F7F3EC] p-0.5 border border-[#B58A3B]/40 shrink-0">
                    <img src={logoImg} alt="Artscape Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#222222] block">
                      ARTSCAPE INTERIORS
                    </span>
                    <span className="text-[10px] text-[#B58A3B] uppercase tracking-widest font-mono">
                      Kondapur • Hyderabad
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Core Pillars */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#222222]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title={
              <>
                The four values behind{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">every home we design</span>.
              </>
            }
            subtitle="Every room we plan follows these four simple principles to make sure it looks great and works well for you."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS_EXPANDED.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-[#222222]/8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-[#B58A3B]/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#B58A3B]/10 flex items-center justify-center text-[#B58A3B]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-mono font-light text-[#B58A3B]">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light text-[#222222] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-[#B58A3B] mb-4">
                    {pillar.tagline}
                  </p>
                  <p className="text-sm text-[#85817B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Our 4-Step Process in simple English */}
      <section className="py-16 sm:py-24 bg-[#F7F3EC] border-t border-[#222222]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title={
              <>
                A simple 4-step journey to your{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">new home</span>.
              </>
            }
            subtitle="We keep everything clear and transparent from day one so there are never any surprises."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white/80 rounded-2xl p-7 border border-[#222222]/6 relative overflow-hidden"
              >
                <span className="text-3xl font-mono font-light text-[#B58A3B]/40 block mb-4">
                  {step.step}
                </span>
                <h4 className="text-lg font-medium text-[#222222] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[#85817B] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Materials We Use */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#222222]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Materials"
            title={
              <>
                Quality materials that{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">stand the test of time</span>.
              </>
            }
            subtitle="We use genuine materials known for strength, easy maintenance, and lasting good looks."
            align="split"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS.map((mat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#222222]/8">
                <span className="w-2 h-2 rounded-full bg-[#B58A3B] block mb-3" />
                <h4 className="text-base font-medium text-[#222222] mb-2">{mat.name}</h4>
                <p className="text-xs text-[#85817B] leading-relaxed">{mat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Consultation Banner */}
      <section className="py-20 bg-[#222222] text-[#F7F3EC] rounded-t-[32px] sm:rounded-t-[48px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B58A3B] block mb-2">
                Let's Work Together
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-white">
                Ready to design your dream home in Hyderabad?
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Contact our design team in Kondapur. We will gladly look over your floorplans and discuss ideas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="text-xs uppercase tracking-wider font-semibold px-6 py-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-8 py-4 rounded-full bg-[#B58A3B] text-white hover:bg-[#A37B30] transition-all shadow-md"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
