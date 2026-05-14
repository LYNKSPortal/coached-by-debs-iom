'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-gold border-b border-gold-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-black font-semibold hover:text-white transition-colors duration-200 border-b-2 border-white">
              Home
            </a>
            <a href="#about" className="text-black font-semibold hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-white">
              About Me
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-black font-semibold hover:text-white transition-colors duration-200 border-b-2 border-transparent group-hover:border-white">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gold rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#online-coaching" className="block px-4 py-3 text-white hover:bg-gold hover:text-black transition-colors duration-200">
                  Online Coaching
                </a>
                <a href="#personal-training" className="block px-4 py-3 text-white hover:bg-gold hover:text-black transition-colors duration-200">
                  1-to-1 Personal Training
                </a>
              </div>
            </div>
            <a href="#faq" className="text-black font-semibold hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-white">
              FAQ
            </a>
            <a href="#results" className="text-black font-semibold hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-white">
              Client Results
            </a>
            <a href="#pricing" className="text-black font-semibold hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-white">
              Pricing & Packages
            </a>
          </div>

          <button 
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a href="#home" className="block py-2 text-black font-semibold hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="block py-2 text-black font-semibold hover:text-white transition-colors">
              About Me
            </a>
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-2 text-black font-semibold hover:text-white transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <a href="#online-coaching" className="block py-2 text-black hover:text-white transition-colors">
                    Online Coaching
                  </a>
                  <a href="#personal-training" className="block py-2 text-black hover:text-white transition-colors">
                    1-to-1 Personal Training
                  </a>
                </div>
              )}
            </div>
            <a href="#faq" className="block py-2 text-black font-semibold hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#results" className="block py-2 text-black font-semibold hover:text-white transition-colors">
              Client Results
            </a>
            <a href="#pricing" className="block py-2 text-black font-semibold hover:text-white transition-colors">
              Pricing & Packages
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
