'use client';

import Image from 'next/image';
import { Calendar, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-black py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              BUILD STRENGTH, CONFIDENCE & SUSTAINABLE RESULTS
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm Debs, a passionate and experienced coach helping real people build strength, confidence, and long-term results through coaching that fits their lifestyle, goals, and routine.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black font-bold text-lg rounded-md hover:bg-gold-dark transition-all duration-300 transform hover:scale-105">
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white hover:text-black transition-all duration-300">
                <TrendingUp className="w-5 h-5" />
                View Client Results
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/debs-posing-on-wall.jpg"
                  alt="Debs - Professional Fitness Coach"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
