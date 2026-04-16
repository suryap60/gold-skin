import React from 'react';
import Image from 'next/image';
import { Star, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/buttons/Button';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Natural Soap",
      price: "$35.00",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=600&q=80",
      category: "Cleanser"
    },
    {
      id: 2,
      name: "Anti Aging Serum",
      price: "$45.00",
      rating: 4.9,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      category: "Serum"
    },
    {
      id: 3,
      name: "Hydrating Mist",
      price: "$55.00",
      rating: 5.0,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
      category: "Toner"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Our Best Skin Product
            </h2>
            <p className="text-text-light text-lg">
              Explore our top-rated skincare essentials loved by thousands. Handpicked to deliver visible, glowing results.
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="rounded-full">View All Products</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative h-80 w-full rounded-[2rem] overflow-hidden mb-6 bg-secondary">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-primary p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  <ShoppingBag size={20} />
                </button>
              </div>
              <div className="px-2">
                <p className="text-sm text-text-light mb-1">{product.category}</p>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-text-dark">{product.name}</h3>
                  <p className="text-lg font-bold text-primary">{product.price}</p>
                </div>
                <div className="flex items-center text-sm gap-2">
                  <div className="flex text-yellow-400">
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-text-light">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" size="lg" className="rounded-full w-full">View All Products</Button>
        </div>
      </div>
    </section>
  );
}
