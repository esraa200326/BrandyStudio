'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Play, Globe, Zap, Code } from 'lucide-react';
import { HeroGeometric } from '@/app/components/Hero';
import BlurText from "@/app/components/TextOverlay";
import CircularGallery from '@/app/components/Scroll';
import Slider from '@/app/components/MiniSlider';
import Journey from '@/app/components/Journey';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
const COLORS = {
  purple: '#dcc1ff',
  red: '#fe3715',
  bg: '#030303', // أسود أعمق
  grid: '#ffffff10' // لون الشبكة الخافت
};

// 1. مكون تتبع الماوس (Spotlight Effect)
const Spotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: useTransform(
          [mouseX, mouseY],
          ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(254, 55, 21, 0.15), transparent 40%)`
        ),
      }}
    />
  );
};
// 2. الخلفية الشبكية المتحركة (Animated Grid)
const BackgroundGrid = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    
    <div className="absolute inset-0 
      bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),
      linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] 
      bg-[size:50px_50px] 
      [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
    />

    {/* كرة ضوء علوية */}
    <div className="absolute top-[-15%] left-[20%] 
      w-[600px] h-[600px] 
      bg-[#dcc1ff] 
      rounded-full 
      blur-[200px] 
      opacity-[0.04]" 
    />

    {/* كرة ضوء سفلية */}
    <div className="absolute bottom-[-15%] right-[20%] 
      w-[600px] h-[600px] 
      bg-[#fe3715] 
      rounded-full 
      blur-[200px] 
      opacity-[0.04]" 
    />

  </div>
);

// 5. قسم المشاريع (Parallax with Glass Effect)
const ProjectCard = ({ title, cat, img, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-[#ffffff10] bg-[#0a0a0a]"
    >
      <img 
        src={img} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
      
      <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-end">
          <div>
            <span className="inline-block px-3 py-1 bg-[#fe3715] text-white text-xs font-bold uppercase rounded-full mb-3">
              {cat}
            </span>
            <h3 className="text-4xl font-bold text-white mb-2">{title}</h3>
          </div>
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-[#dcc1ff] group-hover:text-black transition-all">
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsGrid = () => (
  <section className="py-32 px-6 md:px-20 relative z-10">
    <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
      <h2 className="text-5xl font-bold text-white">SELECTED <span className="text-[#fe3715]">WORKS</span></h2>
      <p className="text-gray-400 max-w-sm text-right">Cases where we broke the rules and built something extraordinary.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard index={0} title="Neon Verse" cat="Web3 Design" img="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000" />
      <ProjectCard index={1} title="Urban Soul" cat="Rebranding" img="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000" />
      <ProjectCard index={2} title="Tech Flow" cat="SaaS Platform" img="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000" />
      <ProjectCard index={3} title="Future Labs" cat="Strategy" img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000" />
    </div>
  </section>
);

// المكون الرئيسي للصفحة
export default function HomeRedefined() {
  return (
    <>
              <style>{`
        @keyframes rotate-gradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animated-border-wrapper {
          position: relative;
          padding: 2px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #fe3715, #dcc1ff, #fe3715, #dcc1ff);
          background-size: 400% 400%;
          animation: rotate-gradient 8s linear infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-border-wrapper {
          animation: gradient-shift 3s ease infinite;
        }

        .button-inner {
          background: black;
          border-radius: 9999px;
          padding: 0.5rem 1.5rem;
          position: relative;
          z-index: 1;
        }
      `}</style>


    <main className="bg-[#030303] min-h-screen font-sans selection:bg-[#fe3715] selection:text-white cursor-default">
      <Spotlight />
      <BackgroundGrid />
          <div className="w-full h-screen rounded-2xl bg-[#000000]">      
      {/* Hero Section with Border */}
      <div className="relative h-full rounded-2xl flex items-center">
        <div className="w-full h-full  overflow-hidden bg-[#000000] relative">
          
  <HeroGeometric />

          
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pl-8 md:pl-12 pointer-events-none z-10">
            <div className="w-full flex flex-col items-center justify-center">
              <BlurText 
                text="Brand Building Partner" 
                className="text-5xl md:text-6xl lg:text-7xl text-center justify-center font-bold text-[#dcc1ff] text-shadow-dark text-shadow-xl leading-tight drop-shadow-lg"
                delay={100}
                animateBy="words"
                direction="top"
                threshold={0.1}
                rootMargin="0px"
                stepDuration={0.5}
                easing={(t: number) => t}
              />
            <BlurText 
                text="Turn your idea into a brand people trust" 
                className="text-4xl md:text-2xl lg:text-4xl md:w-full font-light text-center justify-center leading-tight mt-5 w-7xl text-shadow-2xs text-[#ecddff] leading-tight"
                delay={100}
                animateBy="words"
                direction="top"
                threshold={0.1}
                rootMargin="0px"
                stepDuration={0.5}
                easing={(t: number) => t}
              />
              <BlurText 
                text="from strategy to identity to launch" 
                className="text-4xl md:text-2xl lg:text-4xl md:w-full font-light text-center justify-center leading-tight mt-5 w-7xl text-shadow-2xs text-[#ecddff] leading-tight"
                delay={100}
                animateBy="words"
                direction="top"
                threshold={0.1}
                rootMargin="0px"
                stepDuration={0.5}
                easing={(t: number) => t}
              />
            </div>
              <div className="animated-border-wrapper mt-8">
  <a href='https://wa.me/201016404684' className="button-inner text-center backdrop-blur-lg font-[Inter] text-[#ecddff] font-medium text-lg hover:opacity-90 transition block px-6 py-3 cursor-pointer">
    Talk to Us on WhatsApp
  </a>
</div>
          </div>
        </div>
        </div>
        

<div className='w-full my-3 flex flex-col items-center justify-center'>
  <div>
      <h1 className="bg-gradient-to-r from-[#fe3715] to-white bg-clip-text text-transparent text-4xl font-bold text-center mt-24 sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl leading-tight drop-shadow-lg">
        Your Journey With Us
      </h1>
  </div>
<Journey />
</div>
<Slider />
  <div>
      <h1 className="bg-gradient-to-r from-[#fe3715] to-white bg-clip-text text-transparent text-3xl font-bold text-center mt-24 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight drop-shadow-lg">
        Our Services
      </h1>
  </div>
<CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
<Contact />
          
<Footer />
      </div>
    </main>
    </>
  );
}