import React from 'react';

// Custom perfectly contoured 4-point Organic Star SVG matching the Figma aesthetic shape
const StarBg = ({ className, fill }: { className?: string; fill: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" fill={fill} />
  </svg>
);

// High-end minimalist line-art for Facial Wash
const FacialWashIcon = () => (
  <svg viewBox="0 0 24 24" width="42" height="42" stroke="currentColor" strokeWidth="1.3" fill="none" className="text-white">
    <path d="M5 9c0-6 4-8 7-8s7 2 7 8" strokeLinecap="round" />
    <path d="M6 9c0 5 2.5 10 6 10s6-5 6-10" />
    <path d="M9 12h1M14 12h1" strokeLinecap="round" />
    <circle cx="6" cy="16" r="3" />
    <circle cx="8" cy="18" r="2" />
    <path d="M4 14l-1 2" strokeLinecap="round" />
  </svg>
);

// High-end minimalist line-art for Microneedling
const MicroneedlingIcon = () => (
  <svg viewBox="0 0 24 24" width="42" height="42" stroke="currentColor" strokeWidth="1.3" fill="none" className="text-white">
    <path d="M5 9c0-6 4-8 7-8s7 2 7 8" strokeLinecap="round" />
    <circle cx="12" cy="2" r="1.5" fill="currentColor" stroke="none" />
    <path d="M6 9c0 5 2.5 10 6 10s6-5 6-10" />
    <path d="M9 12c1 0.5 2 0 2 0M16 12c-1 0.5-2 0-2 0" strokeLinecap="round" />
    <rect x="13" y="17" width="5" height="3" rx="0.5" />
    <path d="M16 17v-2h3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// High-end minimalist line-art for HydraFacial
const HydraFacialIcon = () => (
  <svg viewBox="0 0 24 24" width="42" height="42" stroke="currentColor" strokeWidth="1.3" fill="none" className="text-white">
    <path d="M4 11A8 8 0 0 1 20 11" strokeLinecap="round" />
    <path d="M5 11c-1.5 0-2 1.5-2 2.5" strokeLinecap="round" />
    <path d="M19 11c1.5 0 2 1.5 2 2.5" strokeLinecap="round" />
    <path d="M6 11c0 5 2.5 10 6 10s6-5 6-10" />
    <path d="M8 12c1 -0.5 2 0 2 0M16 12c-1 -0.5-2 0-2 0" strokeLinecap="round" />
    <path d="M12 1v3M6 2.5l1.5 2.5M18 2.5l-1.5 2.5" strokeLinecap="round" />
  </svg>
);

export default function Services() {
  const services = [
    {
      icon: FacialWashIcon,
      title: "Facial Wash",
    },
    {
      icon: MicroneedlingIcon,
      title: "Microneedling",
    },
    {
      icon: HydraFacialIcon,
      title: "HydraFacial",
    }
  ];

  return (
    <section className="relative w-full py-[120px] bg-[#FA9E9E] overflow-hidden">
      
      {/* Absolute Background Shape Elements spanning effectively behind layout bounds */}
      <div className="absolute inset-0 w-full h-full flex justify-center z-0 pointer-events-none overflow-visible">
        {/* Center Top Big Star (Very light coral / white overlay) */}
        <StarBg 
          className="absolute top-[30px] w-[600px] h-[600px]" 
          fill="rgba(255, 255, 255, 0.25)" 
        />
        {/* Left partial Star */}
        <StarBg 
          className="absolute top-[350px] left-[-150px] w-[500px] h-[500px]" 
          fill="rgba(255, 255, 255, 0.2)" 
        />
        {/* Bottom Right purple star */}
        <StarBg 
          className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px]" 
          fill="rgba(162, 145, 226, 0.4)" 
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-[60px] lg:px-[108px] flex flex-col items-center">
        
        {/* Section Title */}
        <h2 
          className="text-[64px] leading-[1.1] text-[#1A2232] tracking-tight m-0 z-20 mb-[60px]"
          style={{ fontFamily: 'var(--font-vidaloka)' }}
        >
          Our Service Skincare
        </h2>

        {/* Dynamic Cards Grid mapping the robust UI logic */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-[30px] w-full max-w-[1200px]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="flex-1 w-full lg:max-w-[380px] bg-[#F6F2EB] rounded-[16px] px-[24px] py-[44px] flex flex-col items-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative z-20 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="w-[84px] h-[84px] bg-[#806CCB] rounded-full flex items-center justify-center mb-[28px]">
                  <Icon />
                </div>
                
                <h3 
                  className="text-[28px] text-[#1A2232] tracking-wide mb-[16px]"
                  style={{ fontFamily: 'var(--font-vidaloka)' }}
                >
                  {service.title}
                </h3>
                
                {/* Specific centralized hard-coded layout body block matched directly to the UI image details */}
                <p className="font-sans text-[13px] text-[#1A2232]/80 leading-[1.8] font-medium text-center">
                  Li Europan lingues es membres del sam<br />
                  familie. Lor separat existentie es un myth.<br />
                  Por scientie, musica, sport etc, litot Europa<br />
                  usa li sam vocabular.
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
