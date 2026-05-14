'use client';

import { Stethoscope, Heart, Users, Shield } from 'lucide-react';

export default function MedicalSupport() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                <Stethoscope className="w-10 h-10 text-gold" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              MEDICALLY SUPERVISED WEIGHT MANAGEMENT
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Personally managed by Debs with comprehensive support when lifestyle changes need additional help
            </p>
          </div>

          <div className="bg-black border border-gold/30 rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              For some people, diet and exercise alone may not be enough to achieve sustainable weight loss, especially when factors such as hormones, metabolism, emotional eating, or long-term health conditions are involved.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              That's why <span className="text-gold font-semibold">Debs is pleased to offer access to medically supervised weight management support</span>, including treatments such as <span className="text-white font-semibold">Mounjaro®</span>, <span className="text-white font-semibold">Ozempic®</span>, and other clinically approved weight loss medications where appropriate. <span className="text-white font-semibold">Debs will personally oversee your entire journey</span>, ensuring you receive the care and support you need.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              <span className="text-gold font-semibold">Under Debs' guidance</span>, these treatments can provide additional support alongside healthy lifestyle changes, helping you feel more in control of your appetite, energy levels, and overall wellbeing. Debs will be with you every step of the way, monitoring your progress and adjusting your plan as needed.
            </p>
            
            <div className="bg-gold/5 border border-gold/20 rounded-xl p-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-gold font-semibold">Every person is different</span>, so <span className="text-white font-semibold">Debs conducts all consultations personally</span> on an individual basis to ensure treatment is safe, suitable, and tailored to your personal goals. You'll receive dedicated one-to-one support throughout your entire weight management journey.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black border border-gold/30 rounded-xl p-6 text-center hover:border-gold transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">Debs' Personal Care</h3>
              <p className="text-gray-400 text-sm">Direct oversight & support</p>
            </div>

            <div className="bg-black border border-gold/30 rounded-xl p-6 text-center hover:border-gold transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">One-to-One with Debs</h3>
              <p className="text-gray-400 text-sm">Personal consultations</p>
            </div>

            <div className="bg-black border border-gold/30 rounded-xl p-6 text-center hover:border-gold transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">Complete Support</h3>
              <p className="text-gray-400 text-sm">Debs manages everything</p>
            </div>

            <div className="bg-black border border-gold/30 rounded-xl p-6 text-center hover:border-gold transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">Clinically Approved</h3>
              <p className="text-gray-400 text-sm">Safe & regulated treatments</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold-dark transition-all duration-300 transform hover:scale-105">
              Book a Consultation
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Speak directly with Debs about your weight management options
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
