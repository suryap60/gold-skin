import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { SiGooglegemini } from "react-icons/si";


export default function Hero() {
  return (
    <section className="relative w-full min-h-[1024px] bg-[#FDECEE]">
      <div className="absolute inset-0 max-w-[1440px] mx-auto w-full h-[1024px] overflow-hidden">
        
        {/* ---- EXACT BACKGROUND SHAPES PROVIDED BY USER ---- */}
        
        {/* left of screen top blur blob */}
        <div 
          className="absolute rounded-full z-0 pointer-events-none" 
          style={{ width: 250, height: 250, top: 150, left: -100, background: '#A291E2', opacity: 0.25, filter: 'blur(90px)' }} 
        />
        
        {/* left bottom blur blob */}
        <div 
          className="absolute rounded-full z-0 pointer-events-none" 
          style={{ width: 251, height: 251, top: 750, left: -126, background: '#A291E2', opacity: 0.25, filter: 'blur(90px)' }} 
        />
        
        {/* center bottom blob pulling up the pink */}
        <div 
          className="absolute z-0 pointer-events-none" 
          style={{ width: 600, height: 600, top: 750, left: 400, background: '#F8BADA', opacity: 0.15, filter: 'blur(100px)', borderRadius: '50%' }} 
        />

        {/* right bottom elipse */}
        <div 
          className="absolute rounded-full z-0 pointer-events-none bg-[#A291E2]" 
          style={{ width: 328, height: 328, top: 808, left: 1342, opacity: 0.15, filter: 'blur(90px)' }} 
        />

        {/* main image below star blob */}
        <div 
          className="absolute rounded-full z-0 pointer-events-none bg-[#A291E2]" 
          style={{ width: 331, height: 331, top: 372, left: 838, opacity: 0.1, filter: 'blur(80px)' }} 
        />

        {/* ---- /BACKGROUND SHAPES ---- */}


        {/* MAIN TITLE */}
        <h1 
          className="absolute z-20 font-vidaloka text-[#1A2232] m-0 p-0 whitespace-nowrap"
          style={{ 
             top: 150, 
             left: 108, 
             fontSize: '98px', 
             lineHeight: '110px', 
             fontWeight: 400, 
             letterSpacing: '0%' 
          }}
        >
          Happy Future<br />Skincare Shop
        </h1>

        {/* ---- LARGE RIGHT VECTORS ---- */}
        
        {/* Main large amoeba shape container */}
        <div className="absolute top-[80px] left-[550px] w-[900px] h-[800px] z-10 pointer-events-none">
          <svg viewBox="0 0 1000 900" className="w-full h-full overflow-visible">
             
             {/* Offset Outline 1 (Bottom Left skewed) */}
             <path 
               d="M380 180 C580 80 850 150 950 400 C1050 650 950 850 550 880 C250 900 100 700 50 450 C0 200 180 280 380 180 Z" 
               fill="none" 
               stroke="#1A2232" 
               strokeWidth="1"
               className="transform translate-x-[15px] translate-y-[20px] scale-[1.03] rotate-[3deg] origin-center opacity-70"
             />

             {/* Offset Outline 2 (Top Right skewed) */}
             <path 
               d="M380 180 C580 80 850 150 950 400 C1050 650 950 850 550 880 C250 900 100 700 50 450 C0 200 180 280 380 180 Z" 
               fill="none" 
               stroke="#1A2232" 
               strokeWidth="1"
               className="transform translate-x-[40px] translate-y-[-20px] scale-[1.01] rotate-[-2deg] origin-center opacity-60"
             />

             {/* Mask Definition */}
             <defs>
               <clipPath id="mainBlob">
                  <path d="M380 180 C580 80 850 150 950 400 C1050 650 950 850 550 880 C250 900 100 700 50 450 C0 200 180 280 380 180 Z" />
               </clipPath>
             </defs>
             
             {/* Main Image Container */}
             <g clipPath="url(#mainBlob)">
                {/* Background base */}
                <rect width="1000" height="900" fill="#F8F9FB" opacity="0.4" />
                {/* Tile Pattern */}
                {Array.from({ length: 40 }).map((_, i) => (
                  <text key={i} x={(i % 5) * 220 + 20} y={Math.floor(i / 5) * 110 + 50} fill="#5F6F8E" opacity="0.6" fontSize="18" fontWeight="600" className="opacity-90">Image Placeholder</text>
                ))}
             </g>
             
             {/* Main exact border overlap wrapper */}
             <path 
               d="M380 180 C580 80 850 150 950 400 C1050 650 950 850 550 880 C250 900 100 700 50 450 C0 200 180 280 380 180 Z" 
               fill="none" 
               stroke="#1A2232" 
               strokeWidth="1"
             />
          </svg>
        </div>
        
        {/* Sparkle placed accurately on the main blob border intersection */}
        <SiGooglegemini className="absolute top-[610px] left-[612px] w-[26px] h-[26px] text-[#1A2232] z-20" />


        {/* ---- LEFT PRODUCT IMAGE BLOCK ---- */}
        <div 
          className="absolute z-20"
          style={{
            width: 325,
            height: 320,
            top: 410,
            left: 108
          }}
        >
          {/* Shifted Offset Thin-line Border behind the container */}
          <div 
            className="absolute z-0"
            style={{
              width: 309,
              height: 303.78,
              top: 10,
              left: 16,
              border: '1px solid #1A2232',
              borderTopLeftRadius: 200,
              borderTopRightRadius: 200,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          />

          {/* Internal Image Container exactly matching requested boundaries acting as foreground */}
          <div 
            className="absolute top-0 left-0 overflow-hidden bg-[#F4F5F8] z-10 flex items-center justify-center border border-white"
            style={{
              width: 309,
              height: 303.78,
              borderTopLeftRadius: 200,
              borderTopRightRadius: 200,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
             <span className="text-[#5F6F8E] font-bold text-[18px]">Image Placeholder</span>
          </div>

          <SiGooglegemini className="absolute top-[-6px] left-[262px] w-[32px] h-[32px] text-[#1A2232] z-30" />
        </div>

        {/* ---- REMAINING ELEMENTS ---- */}

        {/* Rotated "Our Product" label exactly positioned vertically between elements */}
        <div className="absolute top-[600px] left-[450px] transform -rotate-90 origin-left z-20">
          <span className="font-vidaloka text-[42px] text-[#1A2232] whitespace-nowrap">Our Product</span>
        </div>


        {/* Cream Light Details */}
        <div className="absolute top-[750px] left-[108px] w-[309px] flex justify-between items-center z-20">
          <span className="font-vidaloka text-[26px] text-[#1A2232] font-medium tracking-wide">Cream Light</span>
          <span className="font-vidaloka text-[34px] text-[#8979FF]">$20.00</span>
        </div>
        
        {/* Five star rating */}
        <div className="absolute top-[800px] left-[108px] flex gap-[4px] text-[#1A2232] z-20">
          {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
        </div>

        {/* Description Paragraph */}
        <div className="absolute top-[850px] left-[108px] w-[300px] z-20">
          <p className="text-[12px] leading-[1.8] text-[#1A2232]/70 font-sans tracking-tight">
            Li Europan lingues es membres del sam<br />familie. Lor separat existentie es un myth.<br />Por scientie, musica, sport etc,.
          </p>
        </div>

        {/* Shop Now Badge */}
        <div className="absolute top-[840px] left-[500px] w-[200px] h-[70px] z-20 group cursor-pointer transition-transform duration-300">
          {/* Oval rotation border mimicking a drawn circle offset naturally */}
          <div className="absolute inset-0 border border-[#1A2232] rounded-[50%] transform -rotate-[4deg] transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="font-vidaloka text-[22px] font-bold text-[#1A2232] tracking-wide mt-[-2px]">Shop Now</span>
          </div>
        </div>

      </div>
    </section>
  );
}
