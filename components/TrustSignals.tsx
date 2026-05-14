'use client';

import { Award, Users, Apple, MapPin } from 'lucide-react';

export default function TrustSignals() {
  const signals = [
    {
      icon: Award,
      title: 'Qualified Personal Trainer',
      description: 'Certified & experienced'
    },
    {
      icon: Users,
      title: 'Online & In-Person Coaching',
      description: 'Flexible training options'
    },
    {
      icon: Apple,
      title: 'Sustainable Nutrition Support',
      description: 'No extreme dieting'
    },
    {
      icon: MapPin,
      title: 'Isle of Man Based',
      description: 'Local & online services'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {signals.map((signal, index) => (
            <div 
              key={index}
              className="bg-black border border-gold/30 rounded-lg p-6 text-center hover:border-gold transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                  <signal.icon className="w-8 h-8 text-gold" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{signal.title}</h3>
              <p className="text-gray-400 text-sm">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
