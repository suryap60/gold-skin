"use client";

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
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

export default function Hero() {
  return (
    <section className="relative w-full xl:min-h-[1050px] bg-[#FFE3E3] overflow-hidden py-16 xl:py-32">

      <div
        className="hidden xl:block absolute bottom-[5%] left-[30%] w-[600px] h-[600px] bg-[#FFC6C6] mix-blend-multiply filter blur-[150px] opacity-35 pointer-events-none"
      />
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto w-full h-full pointer-events-none">

        {/* Top/Left Subtle Sparkle Component */}
        <div className="absolute bottom-[40px] left-[-156px] w-[251px] h-[251px] z-0 opacity-20">
          <StarBg fill="#A291E2" className="w-full h-full" />
        </div>

        {/* Radial Blur Blobs */}
        <div className="absolute top-[5%] left-[30%] w-[500px] h-[500px] bg-[#A291E2] mix-blend-multiply filter blur-[150px] opacity-[0.14]" />
        <div className="absolute bottom-[20%] left-[45%] w-[550px] h-[550px] bg-[#FFC6C6] mix-blend-multiply filter blur-[150px] opacity-[0.25]" />
        <div className="absolute top-[35%] right-[10%] w-[450px] h-[450px] bg-[#F48B8B] mix-blend-multiply filter blur-[140px] opacity-[0.12]" />

      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 xl:px-[108px] relative z-10">

        {/* Main Title Section */}
        <div className="mt-4 xl:mt-8 mb-12 xl:mb-24 relative z-30 pointer-events-none flex xl:block justify-center text-center xl:text-left">
          <h1 className="font-[family-name:var(--font-vidaloka)] text-[#1c2331] text-5xl md:text-6xl xl:text-[98px] leading-[1.05] tracking-tight m-0 relative pointer-events-auto">
            Happy Future<br />Skincare Shop
          </h1>
        </div>

        {/* Bento/Editorial Layout Grid */}
        <div className="relative w-full flex flex-col xl:block xl:min-h-[650px] gap-12 items-center">

          {/* 1. Left Product Section (Arch + Label on RIGHT) */}
          <div className="relative xl:absolute xl:top-[10px] xl:left-0 z-20 flex flex-col items-center xl:block">
            <div className="relative">

              {/* Arch Container with offset stroke */}
              <div className="relative inline-block mt-4 xl:mt-0">
                <div className="absolute -top-2 -right-2 xl:-top-3 xl:-right-3 w-[260px] h-[262px] md:w-[320px] md:h-[322px] xl:w-[300px] xl:h-[302px] border border-[#1c2331] border-b-0 rounded-t-[150px] transition-transform duration-500 z-0" />
                <div className="relative w-[260px] h-[250px] md:w-[320px] md:h-[310px] xl:w-[300px] xl:h-[290px] bg-[#F4F5F8] rounded-t-[150px] overflow-hidden flex items-center justify-center border border-white z-10 shadow-sm">
                  <Image
                    src="/images/placeholder.jpg"
                    alt="Hero Product"
                    fill
                    className="object-cover opacity-90"
                    priority
                  />
                  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#1c2331_1px,transparent_1px)] [background-size:20px_20px]" />
                  <SiGooglegemini className="absolute top-4 right-4 w-5 h-5 xl:w-7 xl:h-7 text-[#1c2331] z-30" />
                </div>
              </div>

              {/* "Our Product" Label set to the RIGHT of the image with safe origin rotation matching reference positioning */}
              <div className="absolute left-[285px] top-[240px] md:left-[350px] md:top-[300px] xl:left-[340px] xl:top-[260px] -rotate-90 origin-left pointer-events-none transition-all">
                <span className="font-[family-name:var(--font-vidaloka)] text-3xl md:text-4xl text-[#1c2331] whitespace-nowrap opacity-90 tracking-wide">
                  Our Product
                </span>
              </div>

            </div>

            {/* Product Info below arch */}
            <div className="mt-8 relative flex flex-col items-center xl:items-start text-center xl:text-left">
              <div className="flex justify-between items-center w-[260px] md:w-[320px] xl:w-[300px] mb-2">
                <span className="font-[family-name:var(--font-vidaloka)] text-xl xl:text-2xl text-[#1c2331]">Cream Light</span>
                <span className="font-[family-name:var(--font-vidaloka)] text-2xl xl:text-3xl text-[#8979FF]">$20.00</span>
              </div>
              <div className="flex gap-[3px] text-[#1c2331] mb-5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}
              </div>

              <p className="text-[#5A6070] text-[13px] md:text-[15px] xl:text-[13px] leading-relaxed max-w-[280px] md:max-w-[400px] xl:max-w-[280px] opacity-80 mb-8 xl:mb-0">
                Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.
              </p>
            </div>

            {/* 3. Shop Now Badge - Repositioned free-floating under product */}
            <div className="relative mt-2 xl:absolute xl:mt-0 xl:bottom-[20px] xl:left-[310px] z-30 flex justify-center w-full xl:w-auto">
              <div className="relative group cursor-pointer w-[160px] h-[65px] md:w-[200px] md:h-[80px] xl:w-[180px] xl:h-[75px] flex items-center justify-center transition-transform duration-300 hover:scale-105">
                {/* Rotating Ellipse Border Only */}
                <div className="absolute inset-0 border border-[#1c2331] rounded-[100%] transform -rotate-[12deg] transition-transform duration-500 ease-in-out group-hover:rotate-0" />
                {/* Fixed Text */}
                <span className="font-[family-name:var(--font-vidaloka)] text-xl xl:text-2xl font-bold text-[#1c2331] tracking-wider relative z-10 block mt-[2px]">Shop Now</span>
              </div>
            </div>
          </div>

          {/* 2. Right Amoeba Section - Scaled Down to protect center gap */}
          <div className="relative mt-8 xl:mt-0 xl:absolute xl:top-[-220px] xl:right-[-40px] z-10 group pointer-events-none flex justify-center xl:block">
            <div className="relative transition-transform duration-700 ease-in-out xl:group-hover:-translate-y-4 pointer-events-auto">

              {/* StarBg positioned BELOW/BEHIND the large image as requested */}
              <div className="hidden xl:block absolute bottom-[-380px] left-[150px] w-[500px] h-[500px] z-0 opacity-20 transition-transform duration-700 delay-75 group-hover:scale-105 group-hover:-translate-y-2 pointer-events-none">
                <StarBg fill="#A291E2" className="w-full h-full" />
              </div>

              {/* Scaled Wide Melted Shape Amoeba mapping exactly to reference proportions */}
              <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[720px] xl:h-[720px] z-10">

                {/* Organic Triple Stroke Effect */}
                <div
                  className="absolute -top-4 -left-5 xl:-top-8 xl:-left-10 w-[105%] h-[105%] border border-[#1c2331] opacity-70 z-0 rotate-[-12deg] -0"
                  style={{ borderRadius: '41% 59% 36% 64% / 64% 39% 61% 36%' }}
                />
                <div
                  className="absolute top-3 left-6 xl:top-6 xl:left-12 w-[95%] h-[100%] border border-[#1c2331] opacity-40 z-0 rotate-[15deg] scale-[1.02] "
                  style={{ borderRadius: '54% 46% 50% 50% / 51% 55% 45% 49%' }}
                />

                {/* Main Amoeba Image */}
                <div
                  className="relative w-full h-full bg-[#F4F5F8] overflow-hidden flex items-center justify-center border border-white shadow-xl xl:shadow-2xl z-10 "
                  style={{ borderRadius: '41% 59% 36% 64% / 64% 39% 61% 36%' }}
                >
                  <Image src="/images/placeholder.jpg" alt="Hero Visual" fill className="object-cover opacity-90" priority />
                  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#1c2331_1px,transparent_1px)] bg-[length:14px_14px] xl:bg-[length:24px_24px]" />
                </div>

                {/* Sparkle moved OUTSIDE the overflow container so it sits on the actual curved border! */}
                <div className="absolute top-[60%] left-[-15px] pointer-events-auto z-30 transition-transform duration-700 group-hover:scale-110">
                  <SiGooglegemini className="w-8 h-8 xl:w-10 xl:h-10 text-[#1c2331]" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
