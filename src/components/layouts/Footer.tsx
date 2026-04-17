"use client";

import React from 'react';
import Link from 'next/link';
import { FiTwitter , FiInstagram, FiFacebook, FiYoutube  } from "react-icons/fi";


export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-24 pb-12 w-full border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[108px]">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Sitemap */}
          <div>
            <h4 className="font-[family-name:var(--font-vidaloka)] text-2xl mb-8">Sitemap</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white transition-colors text-[15px]">About us</Link></li>
              <li><Link href="/services" className="text-white transition-colors text-[15px]">Services</Link></li>
              <li><Link href="/blog" className="text-white transition-colors text-[15px]">Blog</Link></li>
              <li><Link href="/contact" className="text-white transition-colors text-[15px]">Contact us</Link></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-[family-name:var(--font-vidaloka)] text-2xl mb-8">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white transition-colors text-[15px]">Powder</Link></li>
              <li><Link href="#" className="text-white transition-colors text-[15px]">Skin Gel</Link></li>
              <li><Link href="#" className="text-white transition-colors text-[15px]">Cosmetics</Link></li>
              <li><Link href="#" className="text-white transition-colors text-[15px]">Toning</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-[family-name:var(--font-vidaloka)] text-2xl mb-8">Help</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white transition-colors text-[15px]">Guide</Link></li>
              <li><Link href="#" className="text-white transition-colors text-[15px]">Tips & Trick</Link></li>
              <li><Link href="#" className="text-white transition-colors text-[15px]">FAQ</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-[family-name:var(--font-vidaloka)] text-2xl mb-8">Subscribe</h4>
            
            {/* Horizontal Input with flush button matching reference exactly */}
            <form 
              className="flex bg-[#525252] rounded-[16px] overflow-hidden mb-8 max-w-[340px]" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="flex-1 bg-transparent px-5 py-3 text-white placeholder-white outline-none border-none text-[13px]"
              />
              <button 
                type="submit"
                className="bg-[#FFC6C6] text-[#1A2232] px-6 py-3 font-medium transition-all text-sm font-medium transition-all duration-300 "
              >
                Send
              </button>
            </form>

            {/* Social Icons Style matching reference precisely */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#FFC6C6] text-[#000000] flex items-center justify-center hover:scale-110 transition-transform">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#FFC6C6] text-[#FFC6C6] flex items-center justify-center hover:text-white hover:border-white transition-all">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#FFC6C6] text-[#FFC6C6] flex items-center justify-center hover:text-white hover:border-white transition-all">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#FFC6C6] text-[#FFC6C6] flex items-center justify-center hover:text-white hover:border-white transition-all">
                <FiYoutube  size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider and Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[#FFFFFF] text-[13px] tracking-wide">
            &copy; 2023 All rights reserved. This is Your Company
          </p>
        </div>
      </div>
    </footer>
  );
}
