'use client'

import React, { useState } from 'react'
import Nav from "@/components/Navigation/Nav";
import { Mail, Send, CheckCircle } from 'lucide-react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-blue-100/40 text-gray-900 relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-400/12 rounded-full blur-3xl"></div>
      </div>

      <Nav />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 flex-1 flex flex-col justify-center">
        <div className="text-center mb-10">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Have questions about our humidifier? We'd love to hear from you.
          </p>
          
          <div className="flex items-center justify-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/25 transition-all duration-300">
              <Mail className="w-6 h-6 text-blue-700" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-sm text-gray-600">Email us at</h3>
              <p className="text-lg text-gray-900 font-medium">mistify.device@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto w-full">

          <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-gray-300 hover:border-blue-400/60 transition-all duration-300 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 rounded-full bg-blue-500/15 flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Message Sent!</h3>
                <p className="text-gray-700 text-center text-sm">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1.5 text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none text-gray-900 placeholder-gray-400"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page