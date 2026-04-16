import React from 'react';
import { SiGooglegemini } from "react-icons/si";
import Image from "next/image";

export default function Features() {
  return (
    <section className="relative w-full h-[1050px] bg-[#F6F2EB] overflow-hidden">
      
      {/* Main 1440px Bounding Container */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto w-full h-full relative">
        
        {/* ---- BACKGROUND BLOBS (Moved INSIDE max-w-[1440px] so they stick to elements!) ---- */}
        
        {/* Left Arch Image behind blob set */}
        <div 
          className="absolute z-0 pointer-events-none rounded-[50%]"
          style={{
            width: 240,
            height: 240,
            top: 380,
            left: 21,
            background: '#806CCB',
            opacity: 1,
            filter: 'blur(150px)'
          }}
        />

        {/* Big right circle behind ellipse blob */}
        <div 
          className="absolute z-0 pointer-events-none rounded-[50%]"
          style={{
            width: 240,
            height: 240,
            top: 696,
            left: 663,
            background: '#FFC6C6',
            opacity: 1,
            filter: 'blur(150px)'
          }}
        />

        {/* Bottom Left siGooglegemini glow! Fixed visibility and position. */}
        <div 
          className="absolute z-0 pointer-events-none rounded-[50%]"
          style={{
            width: 200,
            height: 200,
            top: 720,
            left: 170,
            background: '#A291E2',
            opacity: 0.8,
            filter: 'blur(130px)' 
          }}
        />
        {/* ------------------------------------------------ */}

        {/* Title */}
        <h2 
          className="absolute top-[90px] left-[108px] text-[68px] leading-[1.1] text-[#1A2232] tracking-tight m-0 z-20"
          style={{ fontFamily: 'var(--font-vidaloka)' }}
        >
          Every Woman<br />Deserves Beauty
        </h2>

        {/* Top Right Paragraph */}
        <p className="absolute top-[130px] left-[780px] w-[550px] text-[13px] leading-[1.8] text-[#1A2232]/80 font-sans z-20 font-medium">
          Li Europan lingues es membres del sam familie. Lor separat existentie<br />
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam<br />
          vocabular.
        </p>

        {/* ---- LEFT ARCH CONTAINER ---- */}
        <div className="absolute top-[300px] left-[108px] w-[309px] h-[340px] z-20">
          
          {/* Offset stroke (shifted Up and Right) */}
          <div 
            className="absolute top-[-10px] left-[15px] w-[309px] h-[310px] pointer-events-none z-0"
            style={{
              border: '1px solid #1A2232',
              borderTopLeftRadius: 200,
              borderTopRightRadius: 200,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          />
          {/* Main Top Left Arch Star */}
          <SiGooglegemini className="absolute top-[-25px] left-[295px] w-[32px] h-[32px] text-[#1A2232] z-30 transform" />

          {/* Main Internal Image Container */}
          <div 
            className="absolute top-0 left-0 w-full h-[310px] bg-[#F8F9FB] overflow-hidden flex flex-col items-center justify-center border border-white z-10"
            style={{
              borderTopLeftRadius: 200,
              borderTopRightRadius: 200,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <Image
              src="/images/placeholder.jpg"
              alt="Left Arch Image Placeholder"
              fill
              className="object-cover opacity-95 mix-blend-multiply"
            />
          </div>
        </div>

        {/* ---- EXACT MIDDLE TEXT BLOCK ---- */}
        <div className="absolute top-[350px] left-[450px] w-[350px] z-20">
          <h3 
            className="text-[26px] leading-[1.4] text-[#1A2232] mb-6"
            style={{ fontFamily: 'var(--font-vidaloka)' }}
          >
            The Simplified Skincare<br />Routine Fits Perfectly
          </h3>
          <p className="text-[12px] leading-[1.8] text-[#1A2232]/70 font-sans font-medium tracking-tight">
            Li Europan lingues es membres del sam<br />
            familie. Lor separat existentie es un myth.<br />
            Por scientie, musica, sport etc, litot<br />
            Europa usa li sam vocabular. Li lingues<br />
            differe solmen in li grammatica, li<br />
            pronunciation e li plu commun vocabules.
          </p>
        </div>

        {/* ---- UPPER RIGHT OVAL ---- */}
        <div className="absolute top-[290px] left-[890px] w-[320px] h-[150px] z-20">
          <div className="absolute inset-0 border-[1.5px] border-[#1A2232] rounded-[100%] transform -rotate-[5deg]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center transform mt-[-2px]">
            <span className="text-[22px] text-[#1A2232]" style={{ fontFamily: 'var(--font-vidaloka)' }}>Up to Discount</span>
            <span className="text-[52px] text-[#1A2232] leading-[1]" style={{ fontFamily: 'var(--font-vidaloka)' }}>25%</span>
          </div>
          {/* Star intersecting the top-right curve */}
          <SiGooglegemini className="absolute top-[8px] right-[-14px] w-[28px] h-[28px] text-[#1A2232] z-30" />
        </div>

        {/* ---- BIG LOWER RIGHT IRREGULAR BLOB ---- */}
        <div 
          className="absolute top-[490px] left-[780px] w-[510px] h-[510px] border border-[#1A2232] bg-[#F7F8FA] flex items-center justify-center z-10 overflow-hidden"
          style={{ borderRadius: '54% 46% 48% 52% / 51% 55% 45% 49%' }}
        >
          <Image
            src="/images/placeholder.jpg"
            alt="Large Circular Image Placeholder"
            fill
            className="object-cover"
          />
        </div>

        {/* ---- LOWER TEXT BLOCK ---- */}
        <div className="absolute top-[680px] left-[450px] w-[400px] z-20">
          <h3 
            className="text-[38px] leading-[1.2] text-[#1A2232]"
            style={{ fontFamily: 'var(--font-vidaloka)' }}
          >
            Get to Your Goals,<br />Fast Skincare
          </h3>
        </div>

        {/* Bottom Left Sparkles cluster (two stars) explicitly implemented over the glow! */}
        <div className="absolute top-[780px] left-[250px] w-[60px] h-[60px] z-30">
          <SiGooglegemini className="w-[42px] h-[42px] text-[#1A2232] transform absolute top-0 left-0" />
          <SiGooglegemini className="w-[18px] h-[18px] text-[#1A2232] transform absolute top-[36px] left-[44px]" />
        </div>

      </div>
    </section>
  );
}
