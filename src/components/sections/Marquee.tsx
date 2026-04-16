import React from 'react';
import { SiGooglegemini } from "react-icons/si";



export default function Marquee() {
  // Using the exact sequence from the reference image, swapped "Serum" for "Secret" as requested
  const words = ["Skincare Product", "Cream", "Moisturizer", "Toner", "Secret", "Cleanser"];

  return (
    <div className="w-full overflow-hidden bg-[#F6F2EB] border-y border-[#E2DBD1] py-6 my-0">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
        {/* Repeat enough times to fill the screen endlessly to prevent layout jump */}
        {[1, 2, 3, 4, 5, 6].map((groupIndex) => (
          <div key={groupIndex} className="flex items-center space-x-12 mx-6">
            {words.map((word, index) => (
              <React.Fragment key={`${groupIndex}-${index}`}>
                <span className="font-vidaloka text-[#1A2232] text-[36px] tracking-wide" style={{ fontFamily: 'var(--font-vidaloka)' }}>
                  {word}
                </span>
                <SiGooglegemini className="w-[32px] h-[32px] text-[#806CCB] " />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
