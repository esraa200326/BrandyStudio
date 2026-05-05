"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../img/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Animations */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-border-wrapper {
          position: relative;
          padding: 2px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #fe3715, #dcc1ff, #fe3715, #dcc1ff);
          background-size: 400% 400%;
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

      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:px-8 font-[satoshi]">
        <div className="bg-black-70 backdrop-blur-lg rounded-3xl">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center">
              <Image src={logo} alt="Logo" width={70} height={70} />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 font-[Inter]">
              <Link href="/" className="text-white/70 hover:text-white transition text-md font-medium">
                Home
              </Link>

              <Link href="/AboutUs" className="text-white/70 hover:text-white transition text-md font-medium">
                About Us
              </Link>

              <Link href="/Services" className="text-white/70 hover:text-white transition text-md font-medium">
                Services
              </Link>

              <Link href="/ContactUs" className="text-white/70 hover:text-white transition text-md font-medium">
                Contact Us
              </Link>
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block animated-border-wrapper">
              <a
                href="https://wa.me/201016404684"
                target="_blank"
                className="button-inner text-white font-medium text-sm block text-center hover:opacity-90 transition"
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-4">
              <a
                href="https://wa.me/201016404684"
                target="_blank"
                className="bg-black-90 backdrop-blur-lg text-white px-5 py-2 rounded-full font-medium text-sm"
              >
                Get In Touch
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden px-6 pb-4 space-y-4 border-t border-white/20 font-[Inter]">
              <Link href="/" className="block text-white/70 hover:text-white transition text-md font-medium">
                Home
              </Link>

              <Link href="/AboutUs" className="block text-white/70 hover:text-white transition text-md font-medium">
                About Us
              </Link>

              <Link href="/Services" className="block text-white/70 hover:text-white transition text-md font-medium">
                Services
              </Link>

              <Link href="/ContactUs" className="block text-white/70 hover:text-white transition text-md font-medium">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
