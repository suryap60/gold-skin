import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Sunscreen",
      price: "$55.00",
      image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Anti-Aging",
      price: "$75.00",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Cleansers",
      price: "$10.00",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Moisturizers",
      price: "$15.00",
      image: "https://images.unsplash.com/photo-1615397323287-3d12d46e3f3b?auto=format&fit=crop&w=600&q=80",
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
          filter: 'blur(100px)', /* adding normal filter blur as fallback so the color edges remain soft */
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* 4-Pointed Star Icon */}
      <div className="absolute top-[28%] lg:top-[28%] left-[40%] lg:left-[43%] text-[#1c2331] z-10 w-8 h-8 lg:w-10 lg:h-10 hidden md:block">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[108px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative w-full items-start">

          {/* Left Text Content */}
          <div className="w-full lg:absolute lg:top-0 lg:left-0 lg:w-[420px] shrink-0 z-20 pr-0 pt-10 lg:pt-0 pointer-events-none">
            <div className="pointer-events-auto">
              <h2 className="font-[family-name:var(--font-vidaloka)] text-5xl sm:text-6xl lg:text-[4.5rem] text-[#1c2331] mb-6 leading-[1.05] tracking-tight">
                Our Best<br />Skin Product
              </h2>
              <p className="text-[#5a6070] text-base lg:text-[1.05rem] leading-relaxed mb-12 max-w-[340px]">
                Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
              </p>
            </div>
          </div>

          {/* Right Carousel / Grid: Arranged Left Bottom to Right Top smoothly */}
          <div className="w-full flex items-start overflow-x-auto gap-4 lg:gap-8 pb-32 pt-8 lg:pt-0 lg:pb-12 hide-scrollbar relative z-10 px-4 -mx-4 lg:mx-0 lg:px-0">
            {products.map((product, index) => {
              // Map indexes directly to responsive Tailwind classes for SSR-safe staircase effect
              // Product 0 (Sunscreen) starts furthest left at the bottom. The items climb upwards to Top Right.
              const staggerClass = index === 0 ? 'mt-0 lg:mt-[360px]'
                : index === 1 ? 'mt-0 lg:mt-[240px]'
                  : index === 2 ? 'mt-0 lg:mt-[120px]'
                    : 'mt-0 lg:mt-0';

              return (
                <div
                  key={product.id}
                  className={`flex-none w-[240px] lg:w-[280px] flex flex-col transition-all duration-300 ${staggerClass}`}
                >
                  <div className="relative h-[320px] lg:h-[350px] w-full rounded-t-[1000px] rounded-b-[24px] overflow-hidden mb-5 bg-[#F8F8F8]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-baseline px-1">
                    <h3 className="font-[family-name:var(--font-vidaloka)] text-[1.25rem] lg:text-[1.35rem] text-[#1c2331] m-0 leading-none">{product.name}</h3>
                    <p className="font-[family-name:var(--font-vidaloka)] text-[1.15rem] lg:text-[1.25rem] text-[#8578CA] m-0 leading-none">{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="absolute bottom-[20px] lg:bottom-12 right-4 lg:right-[108px] flex gap-4 lg:gap-6 z-20">

          <div className="relative w-[60px] h-[40px] lg:w-[72px] lg:h-[48px] group cursor-pointer">
            {/* Organic irregularly rotated oval border */}
            <div className="absolute inset-0 border-[1.5px] border-[#1A2232] rounded-[100%] transform -rotate-[10deg] transition-all duration-300 group-hover:bg-[#1A2232]/5 group-hover:scale-105" />
            <button
              className="absolute inset-0 w-full h-full text-[#1A2232] hover:text-[#1A2232] transition-colors duration-300 bg-transparent outline-none flex items-center justify-center transform mt-[-1px]"
              aria-label="Previous product"
            >
              <ArrowLeft strokeWidth={1.5} size={24} />
            </button>
          </div>

          <div className="relative w-[60px] h-[40px] lg:w-[72px] lg:h-[48px] group cursor-pointer">
            {/* Organic irregularly rotated oval border */}
            <div className="absolute inset-0 border-[1.5px] border-[#1A2232] rounded-[100%] transform -rotate-[10deg] transition-all duration-300 group-hover:bg-[#1A2232]/5 group-hover:scale-105" />
            <button
              className="absolute inset-0 w-full h-full text-[#1A2232] hover:text-[#1A2232] transition-colors duration-300 bg-transparent outline-none flex items-center justify-center transform mt-[-1px]"
              aria-label="Next product"
            >
              <ArrowRight strokeWidth={1.5} size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
