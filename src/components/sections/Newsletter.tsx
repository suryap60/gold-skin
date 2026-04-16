"use client";

import React from 'react';
import { Button } from '../ui/buttons/Button';

export default function Newsletter() {
  return (
    <section className="bg-primary py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 text-center shadow-2xl transform -translate-y-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-bl-full -z-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-lavender rounded-tr-full -z-0"></div>
        
        <div className="relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark mb-4">
            Subscribe Newsletter
          </h2>
          <p className="text-text-light text-lg mb-10 max-w-xl mx-auto">
            Get the latest updates on new product drops, skincare tips, and exclusive offers straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              required
              className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-dark placeholder-gray-400"
            />
            <Button size="lg" className="rounded-full px-8 py-4 sm:w-auto w-full">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
