import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Beauty Enthusiast",
      content: "I've been using GoldSkin for 3 months now and my skin has never felt better. The hydration mist is an absolute game-changer for my dry skin!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Emily Chen",
      role: "Dermatologist",
      content: "The natural ingredients and the absence of harsh chemicals make this brand my top recommendation for patients with sensitive skin.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "Jessica Alba",
      role: "Verified Buyer",
      content: "The anti-aging serum truly works wonders. Fine lines around my eyes have noticeably reduced. Highly recommend to everyone!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Our Clients Say
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Read what our glowing community has to say about their GoldSkin experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 relative">
              <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
              
              <div className="flex text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-text-dark mb-8 relative z-10 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-text-light">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
