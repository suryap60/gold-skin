"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('/');

  // Close menu if window is resized to desktop mode
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll events for both navbar background and active section tracking
  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll Spy Logic
      const sections = ['contact', 'services', 'about'];
      let currentActive = '/';

      // Check if user has scrolled to the absolute bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentActive = '#contact';
      } else if (window.scrollY < 100) {
         currentActive = '/';
      } else {
        // Iterate backwards from bottom to top sections
        for (const id of sections) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Trigger when section top hits 1/3 of the viewport or higher
            if (rect.top <= window.innerHeight / 3) {
              currentActive = `#${id}`;
              break;
            }
          }
        }
      }

      setActiveHash(currentActive);
    };

    // Run once on mount to set initial state
    handleScrollEvent();

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setIsMenuOpen(false);
    
    // Explicitly update active hash on click for immediate feedback
    setActiveHash(targetId);
    
    // If it's a hash link, try to scroll smoothly
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetId === '/') {
       e.preventDefault();
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  // Freeze background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-[#F6F2EB]/95 backdrop-blur-md shadow-sm py-4 md:py-5' : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 xl:px-[108px] flex justify-between items-center w-full">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={(e) => handleNavClick(e as any, '/')}
            className="font-serif text-[28px] md:text-[36px] font-bold text-[#8979FF] tracking-wide relative z-[101]" 
            style={{ fontFamily: 'var(--font-vidaloka)' }}
          >
            GoldSkin
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12 text-[15px]">
            {navItems.map((item, idx) => (
              <a 
                key={idx}
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium transition-colors cursor-pointer border-b-[1.5px] pb-[2px] ${
                  activeHash === item.href 
                    ? 'text-[#8979FF] border-[#8979FF]' 
                    : 'text-[#1A2232] border-transparent hover:text-[#8979FF]'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:flex items-center justify-center bg-[#FC9B9B] text-white px-7 lg:px-8 py-3 rounded-[12px] font-medium hover:bg-[#fa8989] transition-colors text-[15px] shadow-sm tracking-wide cursor-pointer"
          >
            Contact Us
          </a>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none relative z-[101]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-[2px] bg-[#1A2232] rounded-full transition-transform duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block w-7 h-[2px] bg-[#1A2232] rounded-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-7 h-[2px] bg-[#1A2232] rounded-full transition-transform duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-[#F6F2EB] z-[90] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden flex flex-col ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-50'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center mt-12">
          {navItems.map((item, idx) => (
            <a 
              key={idx}
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-2xl font-medium tracking-wide transition-colors border-b-[2px] pb-1 ${
                activeHash === item.href 
                  ? 'text-[#8979FF] border-[#8979FF]' 
                  : 'text-[#1A2232] border-transparent hover:text-[#8979FF]'
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-8 bg-[#FC9B9B] text-white px-10 py-4 rounded-[12px] font-medium hover:bg-[#fa8989] transition-colors text-lg shadow-sm w-full max-w-[200px]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
