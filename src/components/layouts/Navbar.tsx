import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-8">
      <div className="max-w-[1440px] mx-auto px-[100px] flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="font-serif text-[36px] font-bold text-[#8979FF] tracking-wide" style={{ fontFamily: 'var(--font-vidaloka)' }}>
          GoldSkin
        </Link>
        
        {/* Links */}
        <div className="hidden md:flex items-center space-x-12 text-[15px] text-[#1A2232]">
          <Link href="/" className="font-medium text-[#8979FF] border-b-[1.5px] border-[#8979FF] pb-[2px]">Home</Link>
          <Link href="#about" className="font-medium hover:text-[#8979FF] transition-colors">About Us</Link>
          <Link href="#services" className="font-medium hover:text-[#8979FF] transition-colors">Services</Link>
          <Link href="#contact" className="font-medium hover:text-[#8979FF] transition-colors">Contact Us</Link>
        </div>

        {/* Contact Us Button */}
        <Link href="#contact" className="hidden md:flex items-center justify-center bg-[#F99B9B] text-white px-8 py-3 rounded-[12px] font-medium hover:bg-[#fa8989] transition-colors text-[15px] shadow-sm tracking-wide">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
