"use client";

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { StarBg } from '../ui/buttons/StarBg';

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

export default function Hero() {
  return (
    <section className="relative w-full min-h-[1050px] bg-[#FAF3F3] overflow-hidden py-32">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto w-full h-full pointer-events-none">
        
        {/* Top/Left Subtle Sparkle Component */}
        <div className="absolute top-[120px] left-[50px] w-[200px] h-[200px] z-0 opacity-20">
          <StarBg fill="#806CCB" className="w-full h-full" />
        </div>

        {/* Radial Blur Blobs */}
        <div className="absolute top-[5%] left-[30%] w-[500px] h-[500px] bg-[#A291E2] mix-blend-multiply filter blur-[150px] opacity-[0.14]" />
        <div className="absolute bottom-[20%] left-[45%] w-[550px] h-[550px] bg-[#FFC6C6] mix-blend-multiply filter blur-[150px] opacity-[0.25]" />
        <div className="absolute top-[35%] right-[10%] w-[450px] h-[450px] bg-[#F48B8B] mix-blend-multiply filter blur-[140px] opacity-[0.12]" />

      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[108px] relative z-10">
        
        {/* Main Title Section */}
        <div className="mt-8 mb-24">
          <h1 className="font-[family-name:var(--font-vidaloka)] text-[#1c2331] text-7xl lg:text-[105px] leading-[1.05] tracking-tight m-0">
            Happy Future<br />Skincare Shop
          </h1>
        </div>

        {/* Bento/Editorial Layout Grid */}
        <div className="relative min-h-[650px] w-full">
          
          {/* 1. Left Product Section (Arch + Label on RIGHT) */}
          <div className="absolute top-[10px] left-0 z-20">
            <div className="relative flex items-center">
               
               {/* Arch Container with offset stroke */}
               <div className="relative">
                  <div className="absolute -top-3 -right-3 w-[300px] h-[310px] border border-[#1c2331] rounded-t-full z-0" />
                  <div className="relative w-[300px] h-[310px] bg-[#F4F5F8] rounded-t-full overflow-hidden flex items-center justify-center border border-white z-10 shadow-sm">
                    <Image 
                      src="/images/placeholder.jpg" 
                      alt="Hero Product" 
                      fill 
                      className="object-cover opacity-90"
                      priority
                    />
                    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#1c2331_1px,transparent_1px)] [background-size:20px_20px]" />
                    <SparkleIcon className="absolute top-4 right-4 w-7 h-7 text-[#1c2331] z-30" />
                  </div>
               </div>

               {/* "Our Product" Label set to the RIGHT of the image as requested */}
               <div className="ml-10 rotate-90 origin-center translate-y-[-20px]">
                  <span className="font-[family-name:var(--font-vidaloka)] text-[40px] text-[#1c2331] whitespace-nowrap opacity-90 tracking-wide">Our Product</span>
               </div>

            </div>

             {/* Product Info below arch */}
             <div className="mt-8">
                <div className="flex justify-between items-center w-[300px] mb-2">
                  <span className="font-[family-name:var(--font-vidaloka)] text-2xl text-[#1c2331]">Cream Light</span>
                  <span className="font-[family-name:var(--font-vidaloka)] text-3xl text-[#8979FF]">$20.00</span>
                </div>
                <div className="flex gap-[3px] text-[#1c2331] mb-5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-[#5A6070] text-[13px] leading-relaxed max-w-[280px] opacity-80">
                  Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.
                </p>
             </div>
          </div>

          {/* 2. Right Amoeba Section (Reduced Size + StarBg below) */}
          <div className="absolute top-[-50px] right-[-40px] z-10">
            <div className="relative">
               
               {/* StarBg positioned BELOW/BEHIND the large image as requested */}
               <div className="absolute bottom-[-100px] left-[-120px] w-[450px] h-[450px] z-0 opacity-[0.85]">
                  <StarBg fill="#DED7F1" className="w-full h-full" />
               </div>

               {/* Reduced Size Amoeba (640px) */}
               <div className="relative w-[640px] h-[640px] z-10">
                  
                  {/* Organic Triple Stroke Effect */}
                  <div 
                    className="absolute -top-4 -left-4 w-full h-full border border-[#1c2331] opacity-70 z-0"
                    style={{ borderRadius: '48% 52% 54% 46% / 46% 54% 50% 50%' }}
                  />
                  <div 
                    className="absolute top-2 left-6 w-full h-full border border-[#1c2331] opacity-40 z-0 rotate-[3deg] scale-[1.01]"
                    style={{ borderRadius: '54% 46% 50% 50% / 51% 55% 45% 49%' }}
                  />

                  {/* Main Amoeba Image */}
                  <div 
                    className="relative w-full h-full bg-[#F4F5F8] overflow-hidden flex items-center justify-center border border-white shadow-2xl z-10"
                    style={{ borderRadius: '54% 46% 48% 52% / 51% 55% 45% 49%' }}
                  >
                    <Image 
                      src="/images/placeholder.jpg" 
                      alt="Hero Visual" 
                      fill 
                      className="object-cover opacity-90"
                      priority
                    />
                    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#1c2331_1px,transparent_1px)] [background-size:24px_24px]" />
                    
                    {/* Sparkle on the border edge */}
                    <div className="absolute top-[42%] left-[-1px] pointer-events-auto">
                      <SparkleIcon className="w-9 h-9 text-[#1c2331]" />
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* 3. Shop Now Badge - Repositioned to balance smaller amoeba */}
          <div className="absolute bottom-[160px] left-[520px] z-30">
            <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="px-14 py-11 border border-[#1c2331] rounded-[100%] flex items-center justify-center transform -rotate-[12deg] bg-white/5 backdrop-blur-sm">
                <span className="font-[family-name:var(--font-vidaloka)] text-2xl font-bold text-[#1c2331] tracking-wider mt-[-2px]">Shop Now</span>
              </div>
            </div>
          </div>

          {/* 4. Bottom Right Sparkle with Text */}
          <div className="absolute bottom-[60px] right-[100px] z-30 flex items-center gap-4">
             <SparkleIcon className="w-10 h-10 text-[#1c2331]" />
             <span className="font-[family-name:var(--font-vidaloka)] text-3xl text-[#1c2331] opacity-80 mt-1">Secret</span>
          </div>

        </div>

      </div>
    </section>
  );
}
