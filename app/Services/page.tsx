'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Monitor, PenTool, Hash, Layout, Plus, Minus, Check, HelpCircle, Zap } from 'lucide-react';
import Footer from '../components/Footer';

const COLORS = {
  purple: '#dcc1ff',
  red: '#fe3715',
  bg: '#050505',
  surface: '#111'
};

const services = [
  {
    id: '01',
    title: 'Brand Identity',
    description: "We don't just design logos; we forge visual languages that scream your values. From typography to color psychology.",
    tags: ['Logo Design', 'Brand Strategy', 'Visual Systems', 'Guidelines'],
    icon: <PenTool size={48} />
  },
  {
    id: '02',
    title: 'UI/UX Design',
    description: "Digital experiences that feel illegal to ignore. We blend aesthetics with usability to keep users glued to the screen.",
    tags: ['Web Design', 'Mobile Apps', 'Prototyping', 'Wireframing'],
    icon: <Layout size={48} />
  },
  {
    id: '03',
    title: 'Social Media',
    description: "Stop the scroll. We create content that dominates feeds and starts conversations.",
    tags: ['Content Creation', 'Reels & TikTok', 'Copywriting', 'Management'],
    icon: <Hash size={48} />
  },
  {
    id: '04',
    title: 'Development',
    description: "Clean code, lightning speed. We build websites that perform as good as they look.",
    tags: ['Next.js', 'React', 'E-commerce', 'Animations'],
    icon: <Monitor size={48} />
  }
];

// 1. Hero Section
const Hero = () => (
  <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10"
    >
      <span className="inline-block px-4 py-1 rounded-full border border-[#dcc1ff] text-[#dcc1ff] mb-6 uppercase tracking-widest text-sm font-bold">
        What we do best
      </span>
      <h1 className="text-6xl md:text-9xl font-black text-white uppercase leading-none mb-4">
        Our <span className="text-transparent" style={{ WebkitTextStroke: `2px ${COLORS.red}` }}>Toolbox</span>
      </h1>
      <p className="text-gray-400 text-xl max-w-2xl mx-auto">
        Everything you need to build a brand that creates chaos in the market.
      </p>
    </motion.div>
    
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#fe3715] opacity-10 blur-[120px] rounded-full pointer-events-none" />
  </section>
);

// 2. Interactive Service Item
const ServiceItem = ({ service, index, expanded, setExpanded }) => {
  const isOpen = expanded === index;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => setExpanded(isOpen ? null : index)}
      className="border-t border-[#333] last:border-b group cursor-pointer relative overflow-hidden"
    >
      {/* Background Hover Effect */}
      <div className={`absolute inset-0 bg-[#dcc1ff] origin-left transition-transform duration-500 ease-in-out ${isOpen ? 'scale-x-100' : 'scale-x-0'}`} />
      
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-start justify-between">
        
        {/* Left: ID & Title */}
        <div className="flex items-baseline gap-6 md:w-1/3">
          <span className={`text-xl font-mono transition-colors duration-300 ${isOpen ? 'text-black' : 'text-[#fe3715]'}`}>
            /{service.id}
          </span>
          <h2 className={`text-4xl md:text-6xl font-black uppercase transition-colors duration-300 ${isOpen ? 'text-black' : 'text-white group-hover:text-[#dcc1ff]'}`}>
            {service.title}
          </h2>
        </div>

        {/* Right: Icon & Arrow (collapsed) OR Details (expanded) */}
        <div className="md:w-2/3 flex flex-col justify-between">
          <div className="flex justify-end mb-4">
             <motion.div 
               animate={{ rotate: isOpen ? 45 : 0 }}
               className={`p-3 rounded-full border-2 transition-colors duration-300 ${isOpen ? 'border-black text-black' : 'border-[#dcc1ff] text-[#dcc1ff]'}`}
             >
               {isOpen ? <ArrowUpRight size={32} /> : <Plus size={32} />}
             </motion.div>
          </div>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="text-xl md:text-2xl font-bold text-black mb-8 leading-relaxed max-w-3xl">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-black text-white rounded-full text-sm font-bold uppercase tracking-wider border border-black hover:bg-transparent hover:text-black hover:border-black transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex justify-end">
                  <div className="text-black opacity-20 transform scale-[2] origin-bottom-right">
                    {service.icon}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// 3. Tech Stack (Moving Marquee) - NEW SECTION
const TechStack = () => {
  const tools = ["Figma", "React", "Next.js", "Blender", "Adobe CC", "Tailwind", "Three.js", "Framer Motion", "Shopify"];
  
  return (
    <div className="py-12 bg-[#fe3715] overflow-hidden -rotate-1 relative z-20 border-y-4 border-black">
      <motion.div 
        className="flex whitespace-nowrap gap-12"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-4xl md:text-6xl font-black text-black uppercase">{tool}</span>
                <Zap size={30} fill="black" className="text-white" />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

// 4. Process Section (Horizontal Steps)
const Process = () => {
  const steps = [
    { title: "Discovery", desc: "We dig deep into your brain." },
    { title: "Strategy", desc: "We plan the chaos." },
    { title: "Design", desc: "We make it look sexy." },
    { title: "Launch", desc: "We show it to the world." }
  ];

  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-[#fe3715] uppercase tracking-widest font-bold mb-16">How we work</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Line Connector */}
              <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-[#333] -z-10 group-last:hidden" />
              
              <div className="w-12 h-12 bg-[#050505] border-2 border-[#dcc1ff] rounded-full flex items-center justify-center text-white font-bold mb-6 group-hover:bg-[#fe3715] group-hover:border-[#fe3715] transition-all duration-300 relative z-10 shadow-[0_0_15px_rgba(0,0,0,1)]">
                {i + 1}
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#dcc1ff] transition-colors">{step.title}</h4>
              <p className="text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Pricing Section - NEW SECTION
const Pricing = () => {
  const plans = [
    { name: "Starter", price: "$999", color: "border-[#333]", text: "text-white", btn: "bg-white text-black" },
    { name: "Growth", price: "$2499", color: "border-[#fe3715]", text: "text-[#fe3715]", btn: "bg-[#fe3715] text-white", popular: true },
    { name: "Empire", price: "Custom", color: "border-[#dcc1ff]", text: "text-[#dcc1ff]", btn: "bg-[#dcc1ff] text-black" }
  ];

  return (
    <section className="py-32 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-white text-4xl md:text-5xl font-black mb-16 uppercase text-center">
          Invest in <span className="text-[#fe3715]">Chaos</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`relative p-8 border-2 ${plan.color} bg-[#050505] flex flex-col justify-between h-full rounded-2xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#fe3715] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              
              <div>
                <h4 className={`text-2xl font-bold ${plan.text} mb-2`}>{plan.name}</h4>
                <div className="text-5xl font-black text-white mb-8">{plan.price}</div>
                <ul className="space-y-4 mb-8 text-gray-400">
                  {['Brand Strategy', 'Visual Identity', 'Social Kit', 'Basic Support'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                       <Check size={18} className={plan.popular ? "text-[#fe3715]" : "text-white"} /> 
                       {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 font-bold uppercase tracking-wider rounded-lg transition-all ${plan.btn} hover:opacity-90`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. FAQ Section - NEW SECTION
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const questions = [
    { q: "How long does a project take?", a: "Depends on the chaos. Usually 2-4 weeks for branding, 4-8 weeks for web." },
    { q: "Do you work with startups?", a: "We love startups. That's where the real energy is." },
    { q: "What is your payment structure?", a: "50% upfront to fuel the rocket, 50% before launch." },
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
        <HelpCircle className="text-[#dcc1ff]" /> FAQ
      </h3>
      
      <div className="space-y-4">
        {questions.map((item, i) => (
          <div key={i} className="border border-[#333] rounded-lg bg-[#111] overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-[#222] transition-colors"
            >
              <span className="text-lg font-bold text-white">{item.q}</span>
              {openIndex === i ? <Minus size={20} color="#fe3715"/> : <Plus size={20} color="#555"/>}
            </button>
            
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Page Layout
export default function ServicesPageDark() {
  const [expanded, setExpanded] = useState(0); // First item open by default

  return (
    <>
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#fe3715] selection:text-white pb-20">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-0 md:px-6 mb-20">
        <div className="border-b border-[#333]">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              index={index} 
              expanded={expanded} 
              setExpanded={setExpanded} 
            />
          ))}
        </div>
      </section>

      {/* شريط الأدوات المتحرك */}
      <TechStack />

      <Process />

      {/* خطط الأسعار */}
      <Pricing />

      {/* الأسئلة الشائعة */}
      <FAQ />
      
      {/* Footer CTA */}
      <section className="text-center py-20 bg-[#dcc1ff] mt-20">
        <h2 className="text-4xl md:text-6xl font-black text-black mb-8 uppercase">
          Ready to <span className="text-[#fe3715]">dominate?</span>
        </h2>
        <button className="px-10 py-4 bg-black text-white text-xl font-bold rounded-full hover:scale-105 transition-transform border-2 border-black hover:bg-transparent hover:text-black">
          Start Project
        </button>
      </section>
    </main>
    <Footer />
    </>
  );
}