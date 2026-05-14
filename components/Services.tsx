'use client';

import { Laptop, Dumbbell, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Laptop,
      title: 'Online Coaching',
      description: 'Personalised training, nutrition guidance, check-ins, and accountability designed around your lifestyle.',
      benefits: [
        'Custom training programs',
        'Nutrition guidance & meal planning',
        'Weekly check-ins & support',
        'Flexible scheduling',
        'Train anywhere, anytime'
      ]
    },
    {
      icon: Dumbbell,
      title: '1-to-1 Personal Training',
      description: 'In-person coaching focused on technique, confidence, strength, and sustainable progress.',
      benefits: [
        'Hands-on technique coaching',
        'Personalised workout plans',
        'Form correction & safety',
        'Motivation & accountability',
        'Results-driven approach'
      ]
    }
  ];

  return (
    <section id="services" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            COACHING SERVICES
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the coaching style that fits your lifestyle and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gold/30 rounded-2xl p-8 md:p-10 hover:border-gold transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold-dark transition-all duration-300">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
