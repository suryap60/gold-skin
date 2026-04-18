"use client";

import React, { useState, useEffect } from 'react';
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
    },
    {
      id: 4,
      name: "James Anderson",
      content: "“Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot.”",
    },
    {
      id: 5,
      name: "Emily Carter",
      content: "“Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot.”",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalDots = 3; // Fixed to 3 dots as requested


  // Ensure activeIndex is valid on resize boundaries
  useEffect(() => {
    if (activeIndex >= totalDots) {
      setActiveIndex(Math.max(0, totalDots - 1));
    }
  }, [totalDots, activeIndex]);

  return (
    <section className="py-24 lg:py-32 bg-[#F6F2EB] relative overflow-hidden w-full">
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

        {/* Testimonials Slider */}
        <div className="relative z-10 w-full mb-12 lg:mb-20 overflow-hidden py-8 -my-8">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(-${activeIndex * (isMobile ? 100 : (100 / 3))}%)`
            }}
          >
            {testimonials.map((testimonial, index) => {
              const isCenter = isMobile
                ? index === activeIndex
                : index === activeIndex + 1;

              return (
                <div
                  key={testimonial.id}
                  className="w-full min-w-full md:min-w-[33.333333%] md:w-[33.333333%] px-3 lg:px-4 flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    // Make clicking slightly offset items move the slider
                    if (!isMobile) {
                      if (index > activeIndex + 1 && activeIndex < totalDots - 1) setActiveIndex(activeIndex + 1);
                      if (index < activeIndex + 1 && activeIndex > 0) setActiveIndex(activeIndex - 1);
                    }
                  }}
                >
                  <div
                    className={`
                      p-8 lg:p-11 rounded-[16px] flex flex-col transition-all duration-700 w-full h-full
                      ${isCenter
                        ? 'bg-[#FC9B9B] scale-100 md:scale-[1.05] z-20'
                        : 'bg-white scale-[0.97] md:scale-95 z-10'}
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
                      text-[17px] leading-[1.7] mb-12 flex-grow font-light transition-colors duration-700
                      ${isCenter ? 'text-white/95' : 'text-[#4A5060]'}
                    `}>
                      {testimonial.content}
                    </p>

                    {/* Card Footer */}
                    <div className="flex justify-between items-center mt-auto w-full">
                      <h4 className={`
                        font-[family-name:var(--font-vidaloka)] text-xl lg:text-2xl m-0 transition-colors duration-700
                        ${isCenter ? 'text-white' : 'text-[#525252]'}
                      `}>
                        {testimonial.name}
                      </h4>

                      {/* Star Rating */}
                      <div className={`flex gap-[2px] transition-colors duration-700 ${isCenter ? 'text-white' : 'text-[#1A2232]'}`}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-[22px] lg:h-[22px]">
                            <path d="M12 2.25l2.94 6.75 7.31.75-5.5 4.97 1.62 7.13L12 18.06l-6.37 3.79 1.62-7.13L1.75 9.75l7.31-.75L12 2.25z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Pagination Controls */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {Array.from({ length: 3 }).map((_, i) => {
            // Map the 3 dots correctly to the active state.
            // When mobile (5 items), we might have more pages, but visually we lock to 3 dots
            const isActive = isMobile
              ? (i === 0 && activeIndex <= 1) || (i === 1 && activeIndex === 2) || (i === 2 && activeIndex >= 3)
              : activeIndex === i;

            return (
              <button
                key={i}
                onClick={() => {
                  if (isMobile) {
                    if (i === 0) setActiveIndex(0);
                    if (i === 1) setActiveIndex(2);
                    if (i === 2) setActiveIndex(4); // Last item
                  } else {
                    setActiveIndex(i);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#806CCB]' : 'bg-[#8F8F8F] hover:bg-[#806CCB]/60'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}


