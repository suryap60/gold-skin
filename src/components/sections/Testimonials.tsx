import React from 'react';
import { StarBg } from '../ui/buttons/StarBg';
import { SiGoogle, SiGooglegemini } from 'react-icons/si';

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dandi Sambu",
      content: "“Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot.”",
    },
    {
      id: 2,
      name: "Siscka Khuly",
      content: "“Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot.”",
    },
    {
      id: 3,
      name: "Marisa Osewa",
      content: "“Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot.”",
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F6F4F0] relative overflow-hidden w-full">
      {/* Background Gradients/Blobs as seen in reference */}
      <div 
        className="absolute w-[300px] h-[300px] top-[10%] right-[-5%] bg-[#FFC6C6] blur-[100px] opacity-40 rounded-full pointer-events-none z-0"
      />
      
      {/* Left Bottom Decorative Star (StarBg component) */}
      <div className="absolute left-[0px] bottom-[0px] w-[400px] h-[400px] z-0 pointer-events-none opacity-90">
        <StarBg fill="#DED7F1" className="w-full h-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[108px] relative z-10">
        
        {/* Section Title with Sparkle */}
        <div className="flex items-center gap-6 lg:gap-32 mb-16 lg:mb-20">
          <h2 className="font-[family-name:var(--font-vidaloka)] text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em] text-[#1c2331] m-0 leading-[1.1]">
            Our Clients Say
          </h2>
          <div className="text-[#1A2232] mt-4">
            <SiGooglegemini className="w-8 h-8 lg:w-9 lg:h-9" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20 relative z-10">
          {testimonials.map((testimonial, index) => {
            const isCenter = index === 1;
            
            return (
              <div 
                key={testimonial.id} 
                className={`
                  p-8 lg:p-11 rounded-[16px] flex flex-col transition-all duration-300 w-full relative z-10
                  ${isCenter ? 'bg-[#FC9B9B] shadow-[0px_20px_60px_rgba(244,139,139,0.25)]' : 'bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.03)]'}
                `}
              >
                {/* Profile Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-[#f8f9fb] flex items-center justify-center overflow-hidden mb-8 border border-[#eaebed] relative">
                  <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#6881c1_1px,transparent_1px)] [background-size:10px_10px]" />
                  <div className="w-full h-full flex items-center justify-center text-[8px] font-bold text-[#6881c1] opacity-30 text-center leading-tight p-2 uppercase">
                    Image Placeholder
                  </div>
                </div>

                {/* Content */}
                <p className={`
                  text-[17px] leading-[1.7] mb-12 flex-grow font-light
                  ${isCenter ? 'text-white/95' : 'text-[#4A5060]'}
                `}>
                  {testimonial.content}
                </p>
                
                {/* Card Footer */}
                <div className="flex justify-between items-center mt-auto w-full">
                  <h4 className={`
                    font-[family-name:var(--font-vidaloka)] text-xl lg:text-2xl m-0
                    ${isCenter ? 'text-white' : 'text-[#525252]'}
                  `}>
                    {testimonial.name}
                  </h4>
                  
                  {/* Star Rating */}
                  <div className={`flex gap-[2px] ${isCenter ? 'text-white' : 'text-[#1A2232]'}`}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-[22px] lg:h-[22px]">
                         <path d="M12 2.25l2.94 6.75 7.31.75-5.5 4.97 1.62 7.13L12 18.06l-6.37 3.79 1.62-7.13L1.75 9.75l7.31-.75L12 2.25z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Pagination Style matching reference */}
        <div className="flex justify-center items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#8F8F8F] transition-all" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#806CCB] transition-all" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#8F8F8F] transition-all" />
        </div>

      </div>
    </section>
  );
}

