import React, { useState } from 'react';
import { Check, MessageSquare, Clock, Sparkles } from 'lucide-react';
import { BRAND } from '../data/brand';

const CONFIGURATIONS = [
  { id: '3bhk', name: '3BHK Apartment', area: '1,800 – 2,500 sq ft', weeks: '8–12 Weeks' },
  { id: '4bhk', name: '4BHK Apartment', area: '2,600 – 3,800 sq ft', weeks: '10–14 Weeks' },
  { id: 'villa', name: 'Independent Villa', area: '4,000+ sq ft', weeks: '14–18 Weeks' },
  { id: 'focused', name: 'Living & Kitchen Only', area: 'Selected Rooms', weeks: '6–8 Weeks' }
];

const SCOPE_ITEMS = [
  { id: 'living', label: 'Living Room & TV Wall Unit' },
  { id: 'kitchen', label: 'Modular Kitchen with Countertop' },
  { id: 'master', label: 'Master Bedroom & Wardrobe' },
  { id: 'joinery', label: 'Custom Wardrobes & Storage' },
  { id: 'lighting', label: 'False Ceiling & Warm LED Lights' },
  { id: 'foyer', label: 'Foyer Entry & Dining Partition' }
];

export default function SpatialEstimator() {
  const [selectedConfig, setSelectedConfig] = useState(CONFIGURATIONS[0]);
  const [selectedScope, setSelectedScope] = useState(['living', 'kitchen', 'master', 'lighting']);
  const [finishGrade, setFinishGrade] = useState('signature'); // 'signature' | 'couture'

  const toggleScope = (id) => {
    setSelectedScope((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getWhatsAppSummary = () => {
    const scopeNames = SCOPE_ITEMS.filter((i) => selectedScope.includes(i.id))
      .map((i) => `• ${i.label}`)
      .join('\n');

    const msg = `Hello Artscape Interiors! I planned a project on your website:
- Home Type: ${selectedConfig.name} (${selectedConfig.area})
- Finish Level: ${finishGrade === 'signature' ? 'Standard Luxury' : 'High-End Luxury'}
- Rooms / Work Needed:
${scopeNames}
- Estimated Timeline: ${selectedConfig.weeks}
- Location: Hyderabad
Please let me know when we can discuss floorplans and pricing.`;
    return encodeURIComponent(msg);
  };

  const handleSendWhatsApp = () => {
    const url = `https://wa.me/${BRAND.contact.whatsappNumber}?text=${getWhatsAppSummary()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#181818] text-[#F7F3EC] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#B58A3B]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[1.5px] bg-[#B58A3B]"></span>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B58A3B]">
              Project Estimator
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-light text-white">
            Plan your home and see timelines
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-white/70">
            Select your home type and the rooms you want to design. We will calculate the estimated time needed.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#B58A3B]">
          <Sparkles className="w-4 h-4" />
          <span>Instant WhatsApp Estimate</span>
        </div>
      </div>

      {/* 3 Step Interactive Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Configuration */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D8C8B2] mb-3">
              1. What type of home do you have?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CONFIGURATIONS.map((cfg) => {
                const isSelected = selectedConfig.id === cfg.id;
                return (
                  <button
                    key={cfg.id}
                    type="button"
                    onClick={() => setSelectedConfig(cfg)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/15 border-[#B58A3B] text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">{cfg.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#B58A3B]" />}
                    </div>
                    <span className="text-[11px] font-mono text-white/50 block mt-1">
                      {cfg.area}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Key Spatial Modules */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D8C8B2] mb-3">
              2. Which rooms or work do you need?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SCOPE_ITEMS.map((item) => {
                const isChecked = selectedScope.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleScope(item.id)}
                    className={`p-3 rounded-lg border text-left text-xs transition-all flex items-center gap-2.5 cursor-pointer ${
                      isChecked
                        ? 'bg-[#B58A3B]/15 border-[#B58A3B] text-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                      isChecked ? 'bg-[#B58A3B] border-[#B58A3B]' : 'border-white/30'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Finish Grade */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D8C8B2] mb-3">
              3. Choose your finish level
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFinishGrade('signature')}
                className={`p-3.5 rounded-xl border text-left cursor-pointer ${
                  finishGrade === 'signature'
                    ? 'bg-white/15 border-[#B58A3B] text-white'
                    : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                }`}
              >
                <span className="text-sm font-medium block text-white">Standard Luxury</span>
                <span className="text-[11px] text-white/60 block mt-0.5">Durable stone, oak wood & fabrics</span>
              </button>

              <button
                type="button"
                onClick={() => setFinishGrade('couture')}
                className={`p-3.5 rounded-xl border text-left cursor-pointer ${
                  finishGrade === 'couture'
                    ? 'bg-white/15 border-[#B58A3B] text-white'
                    : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                }`}
              >
                <span className="text-sm font-medium block text-white">High-End Luxury</span>
                <span className="text-[11px] text-white/60 block mt-0.5">Imported marble, walnut & brass</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider text-white/60">Estimated Time</span>
              <span className="text-xs font-mono font-semibold text-[#B58A3B] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedConfig.weeks}</span>
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-white/60 block">Summary of your project</span>
              <div className="p-3 rounded-lg bg-black/40 text-xs text-white/80 space-y-1.5 font-mono">
                <div className="text-[#B58A3B]">{selectedConfig.name} ({selectedConfig.area})</div>
                <div className="text-white/60">Quality: {finishGrade === 'signature' ? 'Standard Luxury' : 'High-End Luxury'}</div>
                <div className="text-white/60">Selected: {selectedScope.length} rooms / items</div>
              </div>
            </div>

            <div className="text-xs text-white/70 space-y-1 leading-relaxed">
              <p>✓ 2D and 3D room designs before we begin</p>
              <p>✓ One dedicated site manager for your home</p>
              <p>✓ Skilled carpenters and painters in Hyderabad</p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-widest font-semibold py-4 px-6 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send This Plan to WhatsApp</span>
            </button>
            <p className="mt-2 text-[10px] text-center text-white/50">
              Opens WhatsApp with your choices so we can share floorplan ideas and quotes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
