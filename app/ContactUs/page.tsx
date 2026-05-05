'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Star, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

// ألوان الهوية
const COLORS = {
  purple: '#dcc1ff',
  red: '#fe3715',
  bg: '#050505',
  surface: '#111111'
};

// 1. مكون الخلفية (نجوم وشبكة)
const BackgroundEffects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
    
    {/* Glowing Orbs */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#fe3715] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#dcc1ff] rounded-full mix-blend-screen filter blur-[128px] opacity-10" />
  </div>
);

// 2. مكون الـ "Radio Buttons" بستايل الكبسولات الخاصة بالهوية
interface ProjectTypeSelectorProps {
  selected: string;
  onChange: (type: string) => void;
}

const ProjectTypeSelector = ({ selected, onChange }: ProjectTypeSelectorProps) => {
  const types = ["Branding", "Web Design", "Social Media", "Other"];
  
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          type="button"
          className={`px-6 py-2 rounded-full border-2 transition-all duration-300 text-sm md:text-base font-bold uppercase tracking-wider
            ${selected === type 
              ? `bg-[#dcc1ff] text-black border-[#dcc1ff] shadow-[0_0_15px_#dcc1ff]` 
              : `bg-transparent text-[#dcc1ff] border-[#dcc1ff]/30 hover:border-[#dcc1ff]`
            }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

// 3. الصفحة الرئيسية
export default function ContactPageDark() {
  const [formState, setFormState] = useState('idle'); // idle, loading, success
  const [projectType, setProjectType] = useState('Branding');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 2000); // محاكاة للإرسال
  };

  return (
    <>
    <main className="min-h-screen bg-[#050505] text-[#dcc1ff] relative flex flex-col items-center justify-center p-4 md:p-10 font-sans selection:bg-[#fe3715] selection:text-white">
      <BackgroundEffects />

      <div className="max-w-7xl w-full mt-34 grid grid-cols-1 lg:grid-cols-2 gap-10 z-10 items-center">
        
        {/* Left Side: Info & Vibe */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <motion.div 
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              className="inline-block px-4 py-1 border border-[#fe3715] text-[#fe3715] rounded-full mb-6 uppercase tracking-widest text-xs font-bold"
            >
              Open for work
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9]">
              LET'S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dcc1ff] to-white">COLLAB</span>
            </h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-[#111] border border-[#dcc1ff]/20 flex items-center justify-center group-hover:bg-[#fe3715] group-hover:border-[#fe3715] transition-all duration-300">
                <Mail className="text-white w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Drop us a line</p>
                <a href="mailto:esraamohamadothman24@gmail.com" className="text-2xl font-bold text-white group-hover:text-[#fe3715] transition-colors">esraamohamadothman24@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-[#111] border border-[#dcc1ff]/20 flex items-center justify-center group-hover:bg-[#dcc1ff] group-hover:border-[#dcc1ff] transition-all duration-300">
                <MapPin className="text-white w-8 h-8 group-hover:text-black" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Base</p>
                <p className="text-2xl font-bold text-white group-hover:text-[#dcc1ff] transition-colors">Cairo, Egypt</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="hidden lg:block">
             <Star className="w-32 h-32 text-[#fe3715] animate-[spin_10s_linear_infinite] opacity-50" />
          </div>
        </motion.div>

        {/* Right Side: The "Holographic" Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
            {/* الخلفية المائلة للهوية */}
            <div className="absolute inset-0 bg-[#fe3715] rounded-[2rem] rotate-3 blur-sm opacity-20 transform scale-95" />
            
            <div className="relative bg-[#0a0a0a] border-2 border-[#dcc1ff] rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_rgba(220,193,255,0.1)]">
              {/* Star Decoration on Border */}
              <div className="absolute -top-6 -right-6 bg-[#050505] border-2 border-[#dcc1ff] p-3 rounded-full">
                 <Star fill={COLORS.purple} className="text-[#dcc1ff] w-8 h-8" />
              </div>

              <AnimatePresence mode='wait'>
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-[400px] flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-24 h-24 bg-[#fe3715] rounded-full flex items-center justify-center mb-6">
                      <Send className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">We'll create some chaos together soon.</p>
                    <button 
                        onClick={() => setFormState('idle')}
                        className="mt-8 text-[#dcc1ff] underline hover:text-white"
                    >
                        Send another?
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#fe3715]">Name</label>
                          <input required type="text" className="w-full bg-transparent border-b-2 border-[#333] py-3 text-white text-xl focus:outline-none focus:border-[#fe3715] transition-colors placeholder:text-gray-800" placeholder="John Doe" />
                        </div>
                        <div className="group">
                          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#fe3715]">Email</label>
                          <input required type="email" className="w-full bg-transparent border-b-2 border-[#333] py-3 text-white text-xl focus:outline-none focus:border-[#fe3715] transition-colors placeholder:text-gray-800" placeholder="john@brand.com" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4">I'm interested in...</label>
                        <ProjectTypeSelector selected={projectType} onChange={setProjectType} />
                      </div>

                      <div className="group">
                         <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#fe3715]">Tell us about it</label>
                         <textarea rows={3} className="w-full bg-transparent border-b-2 border-[#333] py-3 text-white text-xl focus:outline-none focus:border-[#fe3715] transition-colors placeholder:text-gray-800 resize-none" placeholder="We want to rebrand our..."></textarea>
                      </div>
                    </div>

                    <button 
                      disabled={formState === 'loading'}
                      className="w-full bg-[#dcc1ff] hover:bg-white text-black font-black text-xl py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                    >
                      {formState === 'loading' ? (
                        <span className="animate-pulse">SENDING...</span>
                      ) : (
                        <>
                          <span className="relative z-10">LAUNCH PROJECT</span>
                          <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                          <div className="absolute inset-0 bg-[#fe3715] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                          <span className="absolute inset-0 flex items-center justify-center gap-3 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                             LAUNCH PROJECT <ArrowRight className="w-6 h-6" />
                          </span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
        </motion.div>

      </div>
    </main><Footer /></>
  );
}
