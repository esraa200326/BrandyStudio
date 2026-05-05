'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
  const allProjects = [
    {
      id: 1,
      title: 'Empowering Businesses with Expertise',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Crafting Digital Experiences',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'TEST YOUR SPIRIT',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'Social Media Growth Engine',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 5,
      title: 'Brand Identity Design',
      image: 'https://images.unsplash.com/photo-1516534775068-bb6c1ca3ac28?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 6,
      title: 'Video Production Showcase',
      image: 'https://images.unsplash.com/photo-1533928298208-27ff66555d0d?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 7,
      title: 'Product Photography Series',
      image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 8,
      title: 'Modern Web Interface',
      image: 'https://images.unsplash.com/photo-1547658064-cb0620ee6e85?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 9,
      title: 'UX/UI Mobile App',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 10,
      title: 'Social Campaign Design',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 11,
      title: 'Video Content Creation',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 12,
      title: 'Lifestyle Photography',
      image: 'https://images.unsplash.com/photo-1536722411095-b4a525fb6bed?w=800&h=600&fit=crop&q=80',
    }
  ];

  return (
    <section className="w-full bg-black text-white min-h-screen justify-center text-center pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-8 mb-16">
          <div className="space-y-4 justify-center text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-[#fe3715] bg-clip-text text-transparent">
              Our Portfolio
            </h1>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allProjects.map(project => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#fe3715] hover:bg-white/10 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                


                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <p className="text-white font-semibold">View Project</p>
                    <ArrowRight className="w-6 h-6 text-[#fe3715] mx-auto" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h3 className="text-sm md:text-base font-bold leading-tight group-hover:text-[#fe3715] transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}