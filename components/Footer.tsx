'use client';

import Image from 'next/image';
import { Mail, MessageCircle, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gold-dark to-brown text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/white-logo.png"
              alt="Coached By Debs"
              width={250}
              height={75}
              className="h-16 md:h-20 w-auto brightness-0"
            />
          </div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Helping people build strength, confidence, and sustainable fitness habits through realistic coaching and support.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="#" 
            className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <Share2 className="w-6 h-6 text-gold" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
            aria-label="Social Media"
          >
            <MessageCircle className="w-6 h-6 text-gold" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gold" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Access</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#online-coaching" className="hover:text-white transition-colors">Online Coaching</a></li>
              <li><a href="#personal-training" className="hover:text-white transition-colors">1-to-1 Personal Training</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Client Results</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Packages</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Request a Callback</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal Section</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manx Data Protection</a></li>
              <li className="pt-2 font-semibold">IOM Registry 031470B</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contactable Hours</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li className="flex justify-between">
                <span className="font-semibold">Mon:</span>
                <span>9:00am - 5:00pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Tue:</span>
                <span>9:00am - 5:00pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Wed:</span>
                <span>9:00am - 5:00pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Thurs:</span>
                <span>9:00am - 5:00pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Fri:</span>
                <span>9:00am - 5:00pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Sat:</span>
                <span>10:00am - 2:00pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Sun:</span>
                <span>10:00am - 2:00pm</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="font-semibold">Manx Holidays:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/20 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Coached By Debs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
