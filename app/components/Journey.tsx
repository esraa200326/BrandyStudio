'use client';

import React, { useState, useEffect } from 'react';

export default function CustomerJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'You come with an idea.',
      description: 'A spark. A thought. A "maybe this could work."'
    },
    {
      number: '02',
      title: 'We turn it into a plan.',
      description: 'Research, strategy, positioning — the backbone your idea needs.'
    },
    {
      number: '03',
      title: 'Your brand starts taking shape.',
      description: 'Identity, visuals, tone, website… everything finally feels real.'
    },
    {
      number: '04',
      title: 'We prepare it for the world.',
      description: 'Content, photos, messaging, experience — all aligned.'
    },
    {
      number: '05',
      title: 'You launch with confidence.',
      description: 'A brand that not only looks good… but works.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.journey-section');
      let currentStep = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentStep = index;
        }
      });

      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#fe3715] to-transparent transform md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                className="journey-section relative"
              >
                {/* Desktop Layout - Alternating */}
                <div className="hidden md:flex">
                  {index % 2 === 0 ? (
                    // Left content, right dot
                    <>
                      <div className="w-1/2 pr-12 text-right">
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-1/2 pl-12 flex items-center justify-start">
                        <div
                          className={`transition-all duration-500 ${
                            activeStep >= index
                              ? 'w-16 h-16 bg-[#fe3715] scale-100'
                              : 'w-8 h-8 bg-gray-600 scale-75'
                          } rounded-full flex items-center justify-center font-bold text-black text-xl`}
                        >
                          {step.number}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Left dot, right content
                    <>
                      <div className="w-1/2 pr-12 flex items-center justify-end">
                        <div
                          className={`transition-all duration-500 ${
                            activeStep >= index
                              ? 'w-16 h-16 bg-[#fe3715] scale-100'
                              : 'w-8 h-8 bg-gray-600 scale-75'
                          } rounded-full flex items-center justify-center font-bold text-black text-xl`}
                        >
                          {step.number}
                        </div>
                      </div>
                      <div className="w-1/2 pl-12">
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`transition-all duration-500 ${
                        activeStep >= index
                          ? 'w-14 h-14 bg-[#fe3715] scale-100'
                          : 'w-10 h-10 bg-gray-600 scale-75'
                      } rounded-full flex items-center justify-center font-bold text-black text-lg flex-shrink-0`}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div className="pb-12">
                    <h3 className="text-xl font-bold mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}