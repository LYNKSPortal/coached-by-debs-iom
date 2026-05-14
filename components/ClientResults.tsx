'use client';

import { Star, TrendingUp, Heart, Target } from 'lucide-react';

export default function ClientResults() {
  const stats = [
    { number: '100+', label: 'Clients Coached', icon: Target },
    { number: '95%', label: 'Client Satisfaction', icon: Star },
    { number: '500+', label: 'Training Sessions', icon: TrendingUp },
    { number: '100%', label: 'Confidence First', icon: Heart }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      result: 'Lost 20kg & gained confidence',
      quote: 'Debs helped me build a sustainable approach to fitness. No crash diets, just real results that last.',
      rating: 5
    },
    {
      name: 'Emma L.',
      result: 'Stronger than ever',
      quote: 'The strength training completely transformed how I feel. I\'m lifting weights I never thought possible.',
      rating: 5
    },
    {
      name: 'Rachel K.',
      result: 'Consistent for 18 months',
      quote: 'For the first time, I\'ve stuck with a fitness routine. Debs makes it realistic and achievable.',
      rating: 5
    }
  ];

  return (
    <section id="results" className="bg-gradient-to-b from-gray-900 to-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            CLIENT RESULTS
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real people, real transformations, sustainable results
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-black border border-gold/30 rounded-xl p-6 text-center hover:border-gold transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black border border-gold/30 rounded-xl p-6 md:p-8 hover:border-gold transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gold/30 pt-4">
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-gold text-sm">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Join hundreds of clients who have transformed their fitness journey
          </p>
          <button className="px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold-dark transition-all duration-300 transform hover:scale-105">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
}
