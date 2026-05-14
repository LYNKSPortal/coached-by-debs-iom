'use client';

import Image from 'next/image';
import { Phone, Calendar } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black border-b border-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Image
              src="/white-logo.png"
              alt="Coached By Debs"
              width={200}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </div>
          
          <div className="flex items-center gap-3 md:gap-4">
            <button className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-white text-black font-semibold text-sm md:text-base rounded-md hover:bg-gray-100 transition-all duration-300">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Request a Callback</span>
              <span className="sm:hidden">Callback</span>
            </button>
            <button className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-gold text-black font-semibold text-sm md:text-base rounded-md hover:bg-gold-dark transition-all duration-300">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Free Consultation</span>
              <span className="sm:hidden">Consult</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
