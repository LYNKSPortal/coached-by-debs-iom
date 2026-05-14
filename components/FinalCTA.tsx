'use client';

import { Calendar, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-gold-dark via-gold to-gold-light py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
          READY TO START YOUR FITNESS JOURNEY?
        </h2>
        
        <p className="text-xl md:text-2xl text-black/80 mb-10 leading-relaxed">
          Book a free consultation and let's create a plan that works for your goals, lifestyle, and confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-gold font-bold text-lg rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            <Calendar className="w-5 h-5" />
            Book Free Consultation
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            <Phone className="w-5 h-5" />
            Request a Callback
          </button>
        </div>
      </div>
    </section>
  );
}
