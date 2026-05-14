'use client';

import { Laptop, Dumbbell, Zap, Sun, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      icon: Sun,
      name: '8-Week Summer Program',
      description: 'Get holiday-ready with our intensive summer transformation program',
      features: [
        '8 weeks of structured training',
        'Summer-focused nutrition plan',
        'Weekly progress tracking',
        'Group support & accountability',
        'Beach body confidence boost'
      ],
      highlight: false,
      badge: 'Limited Time'
    },
    {
      icon: Laptop,
      name: 'Online Coaching',
      description: 'Perfect for those who want flexibility and remote support',
      features: [
        'Personalised training program',
        'Nutrition guidance',
        'Weekly check-ins',
        'App-based tracking',
        'Ongoing support'
      ],
      highlight: false
    },
    {
      icon: Dumbbell,
      name: 'Personal Training',
      description: 'In-person sessions for hands-on coaching and accountability',
      features: [
        '1-to-1 training sessions',
        'Technique coaching',
        'Custom workout plans',
        'Nutrition support',
        'Progress tracking'
      ],
      highlight: true
    },
    {
      icon: Zap,
      name: 'Hybrid Coaching',
      description: 'Combine online and in-person for the ultimate experience',
      features: [
        'In-person sessions',
        'Online programming',
        'Full nutrition support',
        'Priority support',
        'Best value option'
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="bg-gradient-to-b from-black to-gray-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            PRICING & PACKAGES
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the package that fits your goals and lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${
                pkg.highlight 
                  ? 'bg-gold border-2 border-gold-dark shadow-2xl' 
                  : 'bg-black border border-gold/30 hover:border-gold'
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                </div>
              )}
              
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  pkg.highlight ? 'bg-black' : 'bg-gold'
                }`}>
                  <pkg.icon className={`w-8 h-8 ${pkg.highlight ? 'text-gold' : 'text-black'}`} />
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold text-center mb-3 ${
                pkg.highlight ? 'text-black' : 'text-white'
              }`}>
                {pkg.name}
              </h3>
              
              <p className={`text-center mb-6 ${
                pkg.highlight ? 'text-black/80' : 'text-gray-400'
              }`}>
                {pkg.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-2 ${
                    pkg.highlight ? 'text-black' : 'text-gray-300'
                  }`}>
                    <span className={`mt-1 ${pkg.highlight ? 'text-black' : 'text-gold'}`}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-bold text-lg rounded-lg transition-all duration-300 ${
                pkg.highlight 
                  ? 'bg-black text-gold hover:bg-gray-900' 
                  : 'bg-gold text-black hover:bg-gold-dark'
              }`}>
                View Package
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Not sure which package is right for you?
          </p>
          <button className="mt-4 px-8 py-3 bg-transparent border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-black transition-all duration-300">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
