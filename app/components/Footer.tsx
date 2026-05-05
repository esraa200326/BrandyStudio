'use client';

import React from 'react';
import { Mail, Instagram, Facebook, Linkedin, Music2, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white pt-24 pb-8 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#fe3715] to-transparent opacity-5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#fe3715] to-transparent opacity-5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-[#fe3715] bg-clip-text text-transparent">
                Brandyy Studio
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transform your vision into reality with creative solutions that drive results and elevate your brand.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-gray-400 text-sm uppercase tracking-wider">Follow us</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#fe3715] hover:border-[#fe3715] transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#fe3715] hover:border-[#fe3715] transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#fe3715] hover:border-[#fe3715] transition-all duration-300 group"
                >
                  <Music2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#fe3715] hover:border-[#fe3715] transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-white">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Home
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Services
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Portfolio
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Case Studies
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  About Us
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Contact Us
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Careers
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Blog
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Documentation
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Tutorials
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Support
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a href="mailto:esraamohamadothman24@gmail.com" className="text-white/70 hover:text-[#fe3715] transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  Get in Touch
                  <Mail className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm">
            © {currentYear} Brandyy Studio. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-[#fe3715] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-[#fe3715] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-[#fe3715] transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}