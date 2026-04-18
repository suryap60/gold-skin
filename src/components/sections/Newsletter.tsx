"use client";

import React from 'react';

export default function Newsletter() {
  return (
    <section id="contact" className="bg-[#FC9B9B] py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center relative z-10">

        {/* Title */}
        <h2 className="font-[family-name:var(--font-vidaloka)] text-4xl sm:text-5xl lg:text-[4rem] text-white mb-6 leading-tight">
          Subscribe Newsletter
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 text-[15px] lg:text-[16px] max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
          Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.
        </p>

        {/* Newsletter Form */}
        <div className="max-w-[720px] mx-auto">
          <form
            className="flex bg-[#FBBFBF] rounded-[16px] overflow-hidden shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter email address"
              required
              className="flex-1 bg-transparent px-8 lg:px-10 py-5 lg:py-6 text-white placeholder-white/70 outline-none border-none text-[16px] lg:text-[18px]"
            />
            <button
              type="submit"
              className="bg-[#806CCB] hover:bg-[#725dbb] text-white px-10 lg:px-16 py-5 lg:py-6 font-medium transition-all duration-300 text-[16px] lg:text-[18px] min-w-fit"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}


