'use client';

import { Heart, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border-4 border-gold shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-brown to-gold-dark flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-white text-xl font-semibold">About Debs Image</p>
                  <p className="text-white/80 text-sm mt-2">Professional coaching photo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              ABOUT DEBS
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Debs' approach is built around real people, real lifestyles, and real goals. No extreme dieting, no quick fixes — just structured support, accountability, and training that helps clients become stronger, more confident, and more consistent.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              With years of experience in personal training and online coaching, Debs understands that sustainable transformation comes from building habits that fit your life, not forcing your life to fit a rigid program.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                    <Heart className="w-7 h-7 text-gold" />
                  </div>
                </div>
                <h3 className="text-white font-bold mb-1">Passionate</h3>
                <p className="text-gray-400 text-sm">Dedicated to your success</p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                    <Target className="w-7 h-7 text-gold" />
                  </div>
                </div>
                <h3 className="text-white font-bold mb-1">Results-Focused</h3>
                <p className="text-gray-400 text-sm">Proven track record</p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-gold" />
                  </div>
                </div>
                <h3 className="text-white font-bold mb-1">Sustainable</h3>
                <p className="text-gray-400 text-sm">Long-term approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
