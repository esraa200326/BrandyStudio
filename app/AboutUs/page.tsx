'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Star, Heart, Fingerprint, Target, Eye, Zap } from 'lucide-react';
import Footer from '../components/Footer';

// تعريف ألوان الدارك مود
const COLORS = {
  purple: '#dcc1ff', // لون فاتح للتباين
  red: '#fe3715',    // الأحمر النيون
  bg: '#050505',     // أسود عميق للخلفية
  surface: '#111111', // لون الكروت
  text: '#ffffff',
  border: '#333333'
};

// مكون النجمة الدوارة
const SpinningStar = () => (
  <motion.div 
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="absolute mt-26 -top-10 -right-10 text-[#fe3715] opacity-20"
  >
    <Star size={200} fill={COLORS.red} strokeWidth={0} />
  </motion.div>
);

// 1. Hero Section (Dark)
const Hero = () => {
  return (
    <section className="h-screen relative flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      <SpinningStar />
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="relative z-10 text-center"
      >
        <span className="inline-block px-8 py-2 rounded-full text-black text-xl md:text-3xl font-bold mb-6 rotate-[-5deg] border-2 border-white bg-[#dcc1ff] shadow-[4px_4px_0px_0px_#fff]">
          NOT JUST DESIGN
        </span>
        
        <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-white uppercase mix-blend-difference">
          We Create <br />
          <span className="text-transparent" style={{ WebkitTextStroke: `2px ${COLORS.red}` }}>Visual</span> Chaos
        </h1>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-black border-2 border-[#dcc1ff] text-[#dcc1ff] flex items-center justify-center rotate-12 shadow-[0_0_20px_rgba(220,193,255,0.3)]"
      >
        <p className="font-bold text-center leading-tight">EST.<br/>2026</p>
      </motion.div>
    </section>
  );
};

// 2. Marquee Section (Dark Context)
const Marquee = () => {
  return (
    <div className="py-10 overflow-hidden bg-[#fe3715] rotate-[-2deg] scale-110 border-y-4 border-black relative z-20">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(5)].map((_, i) => (
          <h2 key={i} className="text-6xl md:text-8xl font-black text-black px-10 flex items-center gap-6">
            BRANDING <span className="text-white">●</span> UI/UX <span className="text-white">●</span> STRATEGY <span className="text-white">●</span>
          </h2>
        ))}
      </motion.div>
    </div>
  );
};

// --- SECTION: The Process (Dark Cards) ---
const TheProcess = () => {
  const steps = [
    { num: "01", title: "Discovery", desc: "We dig deep. We stalk your competitors. We find the gap.", color: COLORS.purple, text: 'text-black' },
    { num: "02", title: "Chaos", desc: "We break things. We sketch bad ideas until the genius one appears.", color: '#111', text: 'text-white' },
    { num: "03", title: "Refine", desc: "We polish the chaos into a diamond. Pixel perfect addiction.", color: COLORS.red, text: 'text-white' },
    { num: "04", title: "Launch", desc: "We push the button. World domination follows shortly after.", color: COLORS.purple, text: 'text-black' },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-b-4 border-[#333]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-black mb-16 uppercase text-center md:text-left text-white">
          The <span className="bg-[#dcc1ff] text-black px-4 transform -skew-x-12 inline-block">Methodology</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className={`relative p-8 md:p-12 border-2 border-white/20 rounded-[2rem] flex flex-col justify-between transition-all duration-200`}
              style={{ 
                backgroundColor: step.color,
                boxShadow: step.color === '#111' ? '8px 8px 0px 0px #dcc1ff' : '8px 8px 0px 0px #000'
              }}
            >
              <div className="flex justify-between items-start mb-6">
                 <span className={`text-6xl font-black opacity-30 ${step.text}`}>{step.num}</span>
                 <div className={`p-3 border-2 border-black rounded-full ${step.text === 'text-white' ? 'bg-black text-white border-white' : 'bg-white text-black'}`}>
                    <ArrowUpRight size={24} />
                 </div>
              </div>
              <div>
                <h3 className={`text-4xl font-bold mb-4 uppercase ${step.text}`}>
                  {step.title}
                </h3>
                <p className={`text-xl font-medium ${step.text} opacity-90`}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SECTION: The Stats (Dark) ---
const TheNumbers = () => {
  return (
    <section className="py-24 bg-black text-white border-b-4 border-[#333] overflow-hidden relative">
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 top-20 opacity-20 text-[#333]"
      >
        <Star size={300} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {[
            { label: "Projects Killed", val: "150+" },
            { label: "Awards Won", val: "12" },
            { label: "Coffees / Day", val: "∞" },
            { label: "Happy Clients", val: "99%" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="flex flex-col border-l-4 border-[#fe3715] pl-6"
            >
              <span className="text-6xl md:text-7xl font-black text-[#dcc1ff] mb-2">{item.val}</span>
              <span className="text-xl font-bold uppercase tracking-widest text-gray-400">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SECTION: The Manifesto (Values - Dark) ---
const Manifesto = () => {
  const values = [
    "Ugly is the new beautiful.",
    "Function over fluffy animation.",
    "Data beats opinion.",
    "No boring meetings.",
    "We ship fast or we die."
  ];

  return (
    <section className="py-32 px-6 flex justify-center items-center bg-[#fe3715] relative overflow-hidden">
       {/* Background noise texture */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-multiply"></div>

       <div className="max-w-4xl w-full bg-[#111] border-4 border-black p-10 md:p-20 shadow-[20px_20px_0px_0px_#000] rotate-1">
          <h2 className="text-5xl font-black mb-10 text-center uppercase text-white underline decoration-4 decoration-[#dcc1ff]">The Manifesto</h2>
          <ul className="space-y-6">
            {values.map((val, i) => (
              <motion.li 
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-200 border-b-2 border-[#333] pb-4 last:border-0"
              >
                <div className="min-w-[40px] h-[40px] bg-[#dcc1ff] text-black rounded-full flex items-center justify-center text-lg font-black">
                  {i + 1}
                </div>
                {val}
              </motion.li>
            ))}
          </ul>
       </div>
    </section>
  );
};

// 3. The Story (Dark Cards)
const Story = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="min-h-[200vh] relative bg-[#050505]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-20">
          
          {/* Card 1 */}
          <div className="min-w-[400px] md:min-w-[600px] aspect-square bg-[#111] rounded-[3rem] border-4 border-[#333] p-10 flex flex-col justify-between relative shadow-[15px_15px_0px_0px_#dcc1ff]">
             <Fingerprint size={60} color={COLORS.red} />
             <div>
               <h3 className="text-5xl font-bold mb-4 text-white">The Origin</h3>
               <p className="text-xl font-medium text-gray-400">We started with a laptop and too much coffee. No corporate rules, just pure passion for breaking the grid.</p>
             </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[400px] md:min-w-[600px] aspect-square rounded-[3rem] border-4 border-black p-10 flex flex-col justify-between relative shadow-[15px_15px_0px_0px_#000]" style={{ backgroundColor: COLORS.red }}>
             <Star size={60} color="white" fill="white" />
             <div className="text-white">
               <h3 className="text-5xl font-bold mb-4">Our Vibe</h3>
               <p className="text-xl font-medium text-white/90">We don't do "safe". We combine bold typography with soft colors to create contrast that stops the scroll.</p>
             </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[400px] md:min-w-[600px] aspect-square bg-black rounded-[3rem] overflow-hidden border-4 border-[#dcc1ff] relative shadow-[15px_15px_0px_0px_rgba(254,55,21,0.5)]">
             <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500 opacity-60" alt="Team" />
             <div className="absolute bottom-0 left-0 w-full p-6 bg-black/50 backdrop-blur-md border-t border-white/10">
                <p className="text-[#dcc1ff] font-bold text-2xl">Create. Disrupt. Repeat.</p>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

// --- SECTION: Identity (Who We Are - Dark) ---
const Identity = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#050505] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 right-[-100px] w-96 h-96 bg-[#dcc1ff] rounded-full blur-[100px] opacity-10"></div>
      <div className="absolute bottom-20 left-[-100px] w-96 h-96 bg-[#fe3715] rounded-full blur-[100px] opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xl font-bold tracking-widest uppercase border-b-4 border-[#fe3715] pb-2 text-white">The DNA</span>
          <h2 className="text-6xl md:text-8xl font-black mt-6 uppercase leading-none text-white">
            Who Are We?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 1. WHO WE ARE (Large Dark Box) */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-12 bg-[#111] border-2 border-[#333] rounded-[2rem] p-10 md:p-16 relative shadow-[10px_10px_0px_0px_#fe3715]"
          >
            <Zap className="mb-6 text-[#dcc1ff]" size={60} strokeWidth={2} />
            <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase text-white">The Glitch in the System</h3>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-400">
              We are a collective of digital rebels, designers, and strategists who grew tired of the "same old" corporate aesthetic. 
              We believe that <span className="bg-[#fe3715] text-white px-2">chaos creates character</span>. 
              We don't just build websites; we build digital experiences that punch you in the face (respectfully).
            </p>
          </motion.div>

          {/* 2. MISSION (Red Box - Keep Colorful for Contrast) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-[#fe3715] text-white border-4 border-black rounded-[2rem] p-10 relative shadow-[10px_10px_0px_0px_#222] rotate-[-1deg] hover:rotate-0 transition-transform duration-300"
          >
            <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 border-white">
              <Target size={32} color="white" />
            </div>
            <h3 className="text-4xl font-black mb-4 uppercase">Our Mission</h3>
            <p className="text-lg md:text-xl font-bold opacity-90">
              To annihilate boring design. We exist to help bold brands find their voice in a noisy world by breaking every rule in the design handbook.
            </p>
          </motion.div>

          {/* 3. VISION (Purple Box) */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             viewport={{ once: true }}
             className="lg:col-span-6 bg-[#dcc1ff] text-black border-4 border-black rounded-[2rem] p-10 relative shadow-[10px_10px_0px_0px_#222] rotate-[1deg] hover:rotate-0 transition-transform duration-300"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 border-black">
              <Eye size={32} color="black" />
            </div>
            <h3 className="text-4xl font-black mb-4 uppercase">Our Vision</h3>
            <p className="text-lg md:text-xl font-bold">
              A world where every brand has a soul. We envision a digital landscape dominated by authenticity, raw creativity, and zero stock photos.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// 4. Team Section (Dark)
const TeamMember = ({ name, role, img, color }) => (
  <motion.div 
    whileHover={{ scale: 1.04, rotate: 1.5 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="group relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden border-2 border-[#333] bg-[#111]"
  >
    <img
      src={img}
      alt={name}
      className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
    <div className="absolute inset-0 flex flex-col justify-end p-6">
      <div 
        className="absolute top-5 right-5 p-3 rounded-full border-2 border-black rotate-12 group-hover:rotate-0 transition-all duration-300"
        style={{ backgroundColor: color }}
      >
        <ArrowUpRight size={22} color="black" />
      </div>
      <h4 className="text-3xl font-black text-white uppercase leading-tight group-hover:text-[#dcc1ff] transition-colors">{name}</h4>
      <p className="mt-1 text-sm text-gray-400 font-mono max-w-[90%]">{role}</p>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#050505] relative z-20 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-black mb-16 text-center uppercase text-white">
          Our <span className="underline decoration-wavy decoration-[#fe3715] text-[#dcc1ff]">Superpowers</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMember name="Brand Strategy" role="We build brands with purpose, not noise." img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" color={COLORS.red} />
          <TeamMember name="Creative Design" role="Visuals that speak before words." img="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80" color={COLORS.purple} />
          <TeamMember name="Digital Growth" role="Scaling brands with data & creativity." img="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80" color={COLORS.red} />
        </div>
      </div>
    </section>
  );
};

// 5. Footer / CTA (Already Dark, enhanced glow)
const Bottom = () => {
  return (
    <section className="py-32 px-6 bg-black text-center text-white relative overflow-hidden border-t border-[#222]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20" style={{ backgroundColor: COLORS.red }}></div>
      <div className="relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-8">Got a Crazy Idea?</h2>
        <button 
          className="px-12 py-6 rounded-full text-2xl font-bold text-white border-2 border-[#fe3715] hover:bg-[#fe3715] hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(254,55,21,0.2)]"
          style={{ backgroundColor: 'transparent' }}
        >
          LET'S TALK
        </button>
      </div>
    </section>
  );
};

export default function AboutPageNew() {
  return (
    <>
    <main className="font-sans bg-[#050505] selection:bg-[#fe3715] selection:text-white">
      <Hero />
      <Marquee />
      <Identity />
      <TheProcess />
      <Story />
      <TheNumbers />
      <Manifesto />
      <Team />
      <Bottom />
      <Footer />
    </main>
    </>
  );
}