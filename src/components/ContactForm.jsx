import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { BRAND } from '../data/brand';
import { SERVICES } from '../data/servicesData';
import Button from './Button';

export default function ContactForm({ initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || SERVICES[0].inquiryValue,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a short note about your home or requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Artscape Interiors! I would like to enquire about home interior design:
- Name: ${formData.name || 'Interested Client'}
- Phone: ${formData.phone || 'Not specified'}
- Email: ${formData.email || 'Not specified'}
- Service / Room: ${formData.service || 'General Home Interiors'}
- Note: ${formData.message || 'I would like to discuss interior design for my home in Hyderabad.'}`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppDirect = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${BRAND.contact.whatsappNumber}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#222222]/8 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-[#B58A3B]/10 text-[#B58A3B] rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-light text-[#222222]">
            Thank You, {formData.name}!
          </h3>
          <p className="mt-3 text-sm text-[#85817B] max-w-md mx-auto leading-relaxed">
            We have received your enquiry for <strong className="text-[#222222]">{formData.service}</strong>. Our team in Kondapur will call or email you soon. You can also chat with us directly on WhatsApp right now.
          </p>

          <div className="mt-8 pt-6 border-t border-[#222222]/8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              onClick={handleWhatsAppDirect}
              icon={MessageSquare}
            >
              Chat on WhatsApp Now
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  service: SERVICES[0].inquiryValue,
                  message: ''
                });
              }}
            >
              Send Another Note
            </Button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#222222] mb-2"
              >
                Your Name <span className="text-[#B58A3B]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-base sm:text-sm text-[#222222] placeholder-[#85817B]/60 focus:bg-white focus:outline-none transition-all ${
                  errors.name
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-[#222222]/10 focus:border-[#B58A3B]'
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-[#222222] mb-2"
              >
                Phone Number <span className="text-[#B58A3B]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-base sm:text-sm text-[#222222] placeholder-[#85817B]/60 focus:bg-white focus:outline-none transition-all ${
                  errors.phone
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-[#222222]/10 focus:border-[#B58A3B]'
                }`}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#222222] mb-2"
              >
                Email Address <span className="text-[#B58A3B]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@email.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-base sm:text-sm text-[#222222] placeholder-[#85817B]/60 focus:bg-white focus:outline-none transition-all ${
                  errors.email
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-[#222222]/10 focus:border-[#B58A3B]'
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Service of Interest */}
            <div>
              <label
                htmlFor="service"
                className="block text-xs font-semibold uppercase tracking-wider text-[#222222] mb-2"
              >
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#222222]/10 text-base sm:text-sm text-[#222222] focus:bg-white focus:outline-none focus:border-[#B58A3B] transition-all cursor-pointer"
              >
                {SERVICES.map((serv) => (
                  <option key={serv.id} value={serv.inquiryValue}>
                    {serv.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-[#222222] mb-2"
            >
              Tell us about your home <span className="text-[#B58A3B]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. 3BHK flat in Kondapur, need living room and kitchen interiors, planning to start next month..."
              className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-base sm:text-sm text-[#222222] placeholder-[#85817B]/60 focus:bg-white focus:outline-none transition-all resize-y ${
                errors.message
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-[#222222]/10 focus:border-[#B58A3B]'
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              icon={Send}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#128C7E] hover:text-[#075E54] py-3 px-4 rounded-full border border-[#128C7E]/20 hover:border-[#128C7E] bg-[#128C7E]/5 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Or Chat on WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
