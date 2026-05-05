'use client';

import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      // استخدام EmailJS أو API أخرى للإرسال
      // هنا نستخدم بريد مباشر عبر API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
          to: 'esraamohamadothman24@gmail.com'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-transparent text-white pt-20 pb-20 overflow-hidden relative" suppressHydrationWarning>
      {/* Background Gradient Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#dcc1ff] to-transparent opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#fe3715] to-transparent opacity-10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-10 mt-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-white to-[#fe3715] bg-clip-text text-transparent">
                Get in touch with us
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                We&apos;re here to help! Whether you have a question about our services, need assistance with your account, or want to provide feedback, our team is ready to assist you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Email */}
              <div className="group">
                <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Email</p>
                <a 
                  href="mailto:esraamohamadothman24@gmail.com"
                  className="text-2xl font-semibold hover:text-[#fe3715] transition-colors group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3 w-fit"
                >
                  esraamohamadothman24@gmail.com
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Phone */}
              <div className="group">
                <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Phone</p>
                <a 
                  href="https://wa.me/201016404684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold hover:text-[#fe3715] transition-colors group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3 w-fit"
                >
                  +20 101 640 4684
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Available</p>
                <p className="text-white font-medium">Saturday to Thursday, 9 AM - 12 PM UTC</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://wa.me/201016404684"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-black border-2 border-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:esraamohamadothman24@gmail.com"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#dcc1ff] to-orange-500 rounded-full font-semibold hover:shadow-lg hover:shadow-[#dcc1ff]/50 transition-all duration-300"
              >
                <Mail className="w-5 text-black h-5" />
                <h5 className='text-black'>Send Email</h5>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            {/* Form Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl opacity-50 blur-xl" />
            
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10">
              <div className="space-y-6" suppressHydrationWarning>
                {/* Name Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name..."
                      autoComplete="given-name"
                      disabled={loading}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#fe3715] focus:ring-1 focus:ring-[#fe3715]/30 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name..."
                      autoComplete="family-name"
                      disabled={loading}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#fe3715] focus:ring-1 focus:ring-[#fe3715]/30 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address..."
                    autoComplete="email"
                    disabled={loading}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#fe3715] focus:ring-1 focus:ring-[#fe3715]/30 transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    How can we help you?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                    rows={5}
                    disabled={loading}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#fe3715] focus:ring-1 focus:ring-[#fe3715]/30 transition-all duration-300 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading || submitted}
                  className="w-full group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#dcc1ff] to-orange-500 rounded-full font-semibold hover:shadow-lg hover:shadow-[#dcc1ff]/50 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <Send className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <h5 className='text-black'>Send Message</h5>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform text-black" />
                    </>
                  )}
                </button>

                {submitted && (
                  <p className="text-center text-green-400 text-sm">
                    ✓ Thank you for reaching out! We&apos;ll get back to you soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}