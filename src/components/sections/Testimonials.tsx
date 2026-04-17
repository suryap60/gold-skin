import React from 'react';
import { StarBg } from '../ui/buttons/StarBg';

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
      {/* Exact Right Top Gradient Block requested by User */}
      <div 
        style={{
          position: 'absolute',
          width: '223px',
          height: '223px',
          top: '88px',
          left: '1257px',
          opacity: 1,
          background: '#FFC6C6',
          backdropFilter: 'blur(256px)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Left Bottom Star Background specifically requested by User text */}
      <div className="absolute left-[-100px] bottom-[-100px] lg:left-[-150px] lg:bottom-[-180px] w-[350px] lg:w-[480px] h-[350px] lg:h-[480px] z-0 pointer-events-none opacity-80">
        <StarBg fill="#D5CDED" className="w-full h-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[108px] relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-row items-center gap-6 lg:gap-10 mb-12 lg:mb-16">
          <h2 className="font-[family-name:var(--font-vidaloka)] text-5xl sm:text-6xl lg:text-[4.5rem] tracking-tight text-[#1c2331] m-0 leading-none">
            Our Clients Say
          </h2>
          <div className="text-[#1A2232] mt-4 lg:mt-6 hidden sm:block">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:w-10 lg:h-10">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-14 relative z-10">
          {testimonials.map((testimonial, index) => {
            const isCenter = index === 1;
            
            // Dynamic styling based on exact UI highlighting the middle card 
            const cardBg = isCenter ? 'bg-[#FA8D8D]' : 'bg-white';
            const textColor = isCenter ? 'text-white/90' : 'text-[#5a6070]';
            const nameColor = isCenter ? 'text-white' : 'text-[#1A2232]';
            const starColor = isCenter ? 'text-white' : 'text-[#1A2232]';

            return (
              <div 
                key={testimonial.id} 
                className={`${cardBg} p-8 lg:p-10 rounded-[20px] lg:rounded-[24px] shadow-[0px_10px_40px_rgba(0,0,0,0.03)] flex flex-col transition-colors duration-300 w-full relative z-10`}
              >
                {/* Circular Avatar Placeholder accurately imitating the graphic pattern UI */}
                <div className="w-16 h-16 rounded-full bg-[#f8f9fb] flex items-center justify-center overflow-hidden mb-8 border border-gray-100 flex-wrap relative">
                  <div 
                    className="absolute inset-[0] w-[150%] h-[150%] flex flex-wrap opacity-30 transform -rotate-12 translate-x-[-10px] translate-y-[-10px]" 
                    style={{ fontSize: '7px', lineHeight: '14px', color: '#6881c1', fontWeight: 600, wordSpacing: '2px'}}
                  >
                    Image Placeholder Image Placeholder Image Placeholder Image Placeholder Image Placeholder
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className={`${textColor} text-[15px] lg:text-[16px] leading-[1.8] mb-12 flex-grow`}>
                  {testimonial.content}
                </p>
                
                {/* Footer details: Name & Star Rating */}
                <div className="flex justify-between items-center mt-auto w-full">
                  <h4 className={`font-[family-name:var(--font-vidaloka)] text-xl lg:text-[1.35rem] ${nameColor} m-0 leading-none`}>
                    {testimonial.name}
                  </h4>
                  
                  {/* 5 Filled Stars right-aligned matching image EXACTLY without lucide-react dep for absolute fill control */}
                  <div className={`flex gap-[2px] lg:gap-1 ${starColor}`}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] lg:w-5 lg:h-5">
                         <path d="M12 2.25l2.94 6.75 7.31.75-5.5 4.97 1.62 7.13L12 18.06l-6.37 3.79 1.62-7.13L1.75 9.75l7.31-.75L12 2.25z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators Below strictly matching styling (Purple/Grey dots) */}
        <div className="flex justify-center items-center gap-3">
          <div className="w-[10px] h-[10px] rounded-full bg-[#cbd5e1] transition-colors" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#8578CA] transition-colors" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#cbd5e1] transition-colors" />
        </div>

      </div>
    </section>
  );
}
