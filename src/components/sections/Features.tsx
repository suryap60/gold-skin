import React from 'react';
import Image from "next/image";
import { SiGooglegemini } from 'react-icons/si';
import { StarBg } from '../ui/buttons/StarBg';


export default function Features() {
  return (
    <section className="relative w-full min-h-[1100px] bg-[#F6F4F0] overflow-hidden py-32 pb-64">

      <div className="absolute inset-0 w-full h-full flex justify-center z-0 pointer-events-none overflow-visible">
        <StarBg
          className="absolute bottom-[-50px] left-[-190px] w-[500px] h-[500px]"
          fill="rgba(162, 145, 226, 0.4)"
        />
      </div>
      {/* Background Decorative Blobs */}
      <div
        className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] bg-[#A291E2] mix-blend-multiply filter blur-[120px] opacity-25 pointer-events-none"
      />
      {/* Moved Pink Blur to the LEFT of the large image area as requested */}
      <div
        className="absolute bottom-[5%] left-[30%] w-[600px] h-[600px] bg-[#FFC6C6] mix-blend-multiply filter blur-[150px] opacity-35 pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[108px] relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 relative">
          <h2 className="font-[family-name:var(--font-vidaloka)] text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1c2331] max-w-2xl tracking-[-0.02em]">
            Every Woman<br />Deserves Beauty
          </h2>
          <p className="text-[#4A5060] text-[15px] lg:text-[16px] max-w-sm mt-8 lg:mt-4 leading-relaxed opacity-80">
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
          </p>
        </div>

        {/* Bento/Editorial Grid Layout */}
        <div className="relative h-[850px] w-full mt-10">

          {/* 1. Left Arch Image Card */}
          <div className="absolute top-0 left-0 z-20">
            <div className="relative">
              {/* Offset stroke */}
              <div className="absolute -top-4 -right-4 w-[320px] h-[350px] border border-[#1c2331] rounded-t-full z-0">
                <SiGooglegemini className="absolute -top-3 -right-3 w-8 h-8 text-[#1c2331] z-30" />
              </div>
              {/* Main Card */}
              <div className="relative w-[320px] h-[350px] bg-[#F3F4F6] rounded-t-full overflow-hidden flex items-center justify-center border border-white z-10 shadow-sm">
                <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#1c2331_1px,transparent_1px)] [background-size:20px_20px]" />
                <span className="text-[10px] font-bold text-[#1c2331] opacity-20 text-center leading-loose p-4 uppercase tracking-[0.2em]">
                  Image Placeholder Image Placeholder Image Placeholder
                </span>
              </div>
            </div>
          </div>

          {/* 2. Middle Top Text Block */}
          <div className="absolute top-[20px] left-[390px] max-w-[340px] z-20">
            <h3 className="font-[family-name:var(--font-vidaloka)] text-[30px] lg:text-[34px] leading-[1.2] text-[#1c2331] mb-6">
              The Simplified Skincare Routine Fits Perfectly
            </h3>
            <p className="text-[#5A6070] text-[14px] leading-[1.8] opacity-90 font-medium tracking-tight">
              Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.
            </p>
          </div>

          {/* 3. Discount Oval Badge with -10deg rotated border */}
          <div className="absolute top-[-40px] right-[50px] z-20">
            <div className="relative px-12 py-10 min-w-[300px] h-[160px] flex flex-col items-center justify-center">
              {/* Rotated border ONLY as requested */}
              <div className="absolute inset-0 border border-[#1c2331] rounded-[100%] transform -rotate-[10deg] z-0" />

              <div className="relative z-10 flex flex-col items-center">
                <span className="font-[family-name:var(--font-vidaloka)] text-[22px] text-[#1c2331]">Up to Discount</span>
                <span className="font-[family-name:var(--font-vidaloka)] text-[68px] leading-none text-[#1c2331]">25%</span>
              </div>
              <SiGooglegemini className="absolute top-0 -right-2 w-8 h-8 text-[#1c2331] z-30" />
            </div>
          </div>

          {/* 4. Bottom Middle Text */}
          <div className="absolute bottom-[280px] left-[390px] z-20">
            <h3 className="font-[family-name:var(--font-vidaloka)] text-[44px] lg:text-[54px] leading-[1.1] text-[#1c2331]">
              Get to Your Goals,<br />Fast Skincare
            </h3>
          </div>

          {/* 5. Large Lower Right Organic Blob Image */}
          <div className="absolute bottom-[-150px] right-[-50px] z-10">
            <div className="relative">
              {/* Irregular offset organic stroke around shape as requested */}
              <div
                className="absolute -top-6 -left-6 w-[600px] h-[600px] border border-[#1c2331] z-0"
                style={{ borderRadius: '54% 46% 48% 52% / 51% 55% 45% 49%' }}
              />
              {/* Main Organic Blob Shape */}
              <div
                className="w-[600px] h-[600px] bg-[#F3F4F6] overflow-hidden flex items-center justify-center border border-white shadow-2xl relative z-10"
                style={{ borderRadius: '54% 46% 48% 52% / 51% 55% 45% 49%' }}
              >
                <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#1c2331_1px,transparent_1px)] [background-size:24px_24px]" />
                <span className="text-[12px] font-bold text-[#1c2331] opacity-20 text-center leading-loose p-8 uppercase tracking-[0.3em]">
                  Image Placeholder Image Placeholder Image Placeholder Image Placeholder
                </span>
              </div>
            </div>
          </div>

          {/* 6. Isolated Floating Sparkle Bottom Left */}
          <div className="absolute bottom-[240px] left-[200px] z-30 flex flex-col gap-1">
            <SiGooglegemini className="w-15 h-15 text-[#1c2331]" />
            <SiGooglegemini className="w-5 h-5 text-[#1c2331] ml-10 mt-[-18px]" />
          </div>

        </div>

      </div>
    </section>
  );
}
