import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, HelpCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import SpatialEstimator from '../components/SpatialEstimator';

const FAQS = [
  {
    q: "How does the first consultation work?",
    a: "We review your home floorplan, discuss your preferred style, and note down your room requirements. We then give you an initial design approach and estimated timeline."
  },
  {
    q: "Can I hire you for just one room (like a modular kitchen or living room)?",
    a: "Yes, absolutely! While we do complete home interiors, we are happy to design individual areas like living rooms, master bedrooms, or modular kitchens."
  },
  {
    q: "Do you show 3D designs before starting work?",
    a: "Yes. We create clear 2D layouts and realistic 3D room views so you know exactly how the furniture, colors, and lighting will look before any work begins."
  },
  {
    q: "Where is the Artscape Interiors studio located?",
    a: "Our studio is located in Kondapur, Hyderabad, Telangana. We work with clients across Hyderabad and nearby areas."
  }
];

export default function ServicesPage() {
  const navigate = useNavigate();

  const handleEnquireService = (serviceName) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="bg-[#FAF8F5] overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Our Services"
        title={
          <>
            Interior design & custom{' '}
            <span className="italic font-serif font-normal text-[#B58A3B]">home solutions</span>.
          </>
        }
        subtitle="Explore our 8 interior design services. From modular kitchens and living rooms to full turnkey home execution, we make the process simple and stress-free."
        breadcrumb="Services"
        bgImage="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=80"
      />

      {/* 2. All 8 Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title={
              <>
                Solutions for every{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">room in your home</span>.
              </>
            }
            subtitle="Click 'Enquire For This Space' on any card to ask our Kondapur design team about your specific room."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onEnquire={handleEnquireService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deliverables Checklist */}
      <section className="py-20 bg-[#F7F3EC] border-t border-[#222222]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#B58A3B] uppercase block">
                Quality Promise
              </span>
              <h3 className="text-3xl font-light text-[#222222]">
                What you get with every Artscape project.
              </h3>
              <p className="text-sm text-[#85817B] leading-relaxed">
                Whether you are doing a single modular kitchen or an entire home, we guarantee clear planning, quality materials, and dedicated on-site supervision.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "2D floorplans & realistic 3D room views",
                "Actual material & finish samples to approve",
                "Furniture built to your exact wall sizes",
                "Warm false ceiling & lighting plans",
                "Smooth German soft-close drawer hardware",
                "Dedicated site supervisor for quality checks"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#222222]/6">
                  <CheckCircle2 className="w-5 h-5 text-[#B58A3B] shrink-0" />
                  <span className="text-xs font-medium text-[#222222]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Scope & Timeline Estimator */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#222222]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project Estimator"
            title={
              <>
                Plan your project scope and{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">timeline</span>.
              </>
            }
            subtitle="Select your property type and rooms to see estimated timelines and send the plan to our WhatsApp."
            align="split"
          />

          <div className="mt-8">
            <SpatialEstimator />
          </div>
        </div>
      </section>

      {/* 5. Consultation & Service FAQs in simple English */}
      <section className="py-16 sm:py-24 bg-[#F7F3EC] border-t border-[#222222]/6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions & Answers"
            title={
              <>
                Frequently asked questions about{' '}
                <span className="italic font-serif font-normal text-[#B58A3B]">working with us</span>.
              </>
            }
            subtitle="Here are clear answers to common questions about our design process and timelines."
            align="left"
          />

          <div className="mt-12 space-y-5">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-7 rounded-2xl bg-white border border-[#222222]/8">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#B58A3B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-medium text-[#222222] mb-2">{faq.q}</h4>
                    <p className="text-sm text-[#85817B] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Banner */}
      <section className="py-20 bg-[#222222] text-[#F7F3EC] rounded-t-[32px] sm:rounded-t-[48px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B58A3B] block mb-2">
              Ready to talk?
            </span>
            <h3 className="text-3xl font-light text-white">
              Schedule your home design consultation today.
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Speak with our interior design team in Kondapur, Hyderabad.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-8 py-4 rounded-full bg-[#B58A3B] text-white hover:bg-[#A37B30] transition-all shadow-md shrink-0"
          >
            <span>Request Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
