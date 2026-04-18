import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SiGooglegemini } from 'react-icons/si';

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
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F6F2EB] relative overflow-hidden w-full">
      {/* Exact Right Top Gradient Block requested by User */}
      <div
        style={{
          position: 'absolute',
          width: '223px',
          height: '223px',
          top: '88px',
          right: '0px',
          opacity: 1,
          background: '#FFC6C6',
          backdropFilter: 'blur(256px)',
          filter: 'blur(100px)', /* adding normal filter blur as fallback so the color edges remain soft */
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 xl:px-[108px] relative z-10">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 relative w-full items-start">

          {/* Left Text Content */}
          <div className="w-full xl:absolute xl:top-0 xl:left-0 xl:w-[800px] shrink-0 z-20 pr-0 pt-4 xl:pt-0 pointer-events-none">
            <div className="pointer-events-auto flex items-start gap-12 xl:gap-32">
              <h2 className="font-[family-name:var(--font-vidaloka)] text-5xl sm:text-6xl lg:text-[4.5rem] text-[#1c2331] mb-6 leading-[1.05] tracking-tight">
                Our Best<br />Skin Product
              </h2>
              <div className="text-[#1A2232] mt-4 sm:mt-8 shrink-0">
                <SiGooglegemini className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
            </div>
            <p className="text-[#5a6070] text-sm sm:text-base lg:text-[1.05rem] leading-relaxed mb-12 max-w-[340px] pointer-events-auto">
              Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
            </p>
          </div>


          {/* Products Container - Swipeable Scroll on Mobile/Tablet, Static Diagonal Grid on Desktop */}
          <div
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 xl:grid xl:grid-cols-4 xl:gap-8 pb-12 pt-8 xl:pt-0 relative z-10 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => {
              // Preserving the signature staircase effect for the diagonal layout style ONLY on xl screens
              const staggerClass = index === 0 ? 'xl:mt-[360px]'
                : index === 1 ? 'xl:mt-[240px]'
                  : index === 2 ? 'xl:mt-[120px]'
                    : 'xl:mt-0';

              return (
                <div
                  key={product.id}
                  className={`flex flex-col flex-shrink-0 w-[240px] sm:w-[280px] xl:w-auto snap-center transition-all duration-300 align-start ${staggerClass}`}
                >
                  <div className="relative h-[280px] sm:h-[320px] xl:h-[350px] w-full rounded-t-full rounded-b-[24px] overflow-hidden mb-5 bg-[#F8F8F8]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1280px) 280px, 300px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-baseline px-2 w-full">
                    <h3 className="font-[family-name:var(--font-vidaloka)] text-[1.25rem] lg:text-[1.35rem] text-[#1c2331] m-0 leading-none truncate pr-2">{product.name}</h3>
                    <p className="font-[family-name:var(--font-vidaloka)] text-[1.15rem] lg:text-[1.25rem] text-[#8578CA] m-0 leading-none shrink-0">{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="absolute bottom-[20px] xl:bottom-12 right-6 xl:right-[108px] flex gap-4 xl:gap-6 z-20 hidden md:flex">

          <div className="relative w-[50px] h-[36px] xl:w-[72px] xl:h-[48px] group cursor-pointer">
            {/* Organic irregularly rotated oval border */}
            <div className="absolute inset-0 border-[1.5px] border-[#1A2232] rounded-[100%] transform -rotate-[10deg] transition-all duration-300 group-hover:bg-[#1A2232]/5 group-hover:scale-105" />
            <button
              className="absolute inset-0 w-full h-full text-[#1A2232] hover:text-[#1A2232] transition-colors duration-300 bg-transparent outline-none flex items-center justify-center transform mt-[-1px]"
              aria-label="Previous product"
            >
              <ArrowLeft strokeWidth={1.5} size={20} className="xl:w-6 xl:h-6" />
            </button>
          </div>

          <div className="relative w-[50px] h-[36px] xl:w-[72px] xl:h-[48px] group cursor-pointer">
            {/* Organic irregularly rotated oval border */}
            <div className="absolute inset-0 border-[1.5px] border-[#1A2232] rounded-[100%] transform -rotate-[10deg] transition-all duration-300 group-hover:bg-[#1A2232]/5 group-hover:scale-105" />
            <button
              className="absolute inset-0 w-full h-full text-[#1A2232] hover:text-[#1A2232] transition-colors duration-300 bg-transparent outline-none flex items-center justify-center transform mt-[-1px]"
              aria-label="Next product"
            >
              <ArrowRight strokeWidth={1.5} size={20} className="xl:w-6 xl:h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

