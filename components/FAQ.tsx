'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who is coaching suitable for?',
      answer: 'My coaching is designed for anyone looking to build strength, confidence, and sustainable fitness habits. Whether you\'re a complete beginner or have gym experience, I tailor programs to your current level, goals, and lifestyle.'
    },
    {
      question: 'Do I need gym experience?',
      answer: 'Not at all! I work with clients at all fitness levels. If you\'re new to training, I\'ll teach you proper technique, build your confidence, and create a program that progresses at your pace.'
    },
    {
      question: 'Can I do online coaching from anywhere?',
      answer: 'Yes! Online coaching is completely location-independent. You\'ll receive your personalized program, nutrition guidance, and regular check-ins through an easy-to-use app, no matter where you are in the world.'
    },
    {
      question: 'Do you offer nutrition support?',
      answer: 'Absolutely. Nutrition is a key part of achieving sustainable results. I provide realistic, flexible nutrition guidance that fits your lifestyle - no extreme diets or restrictive meal plans.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply book a free consultation using the button above. We\'ll discuss your goals, lifestyle, and which coaching option is the best fit for you. From there, we can get you started on your fitness journey.'
    }
  ];

  return (
    <section id="faq" className="bg-black py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about coaching with Debs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-gray-900 to-black border border-gold/30 rounded-xl overflow-hidden hover:border-gold transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-bold text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-4">
            Still have questions?
          </p>
          <button className="px-8 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-dark transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
