"use client";

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div >
//         Hi there I'm using nextjs with tailwindcss with the help of cursor
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { ChevronRight, BarChart3, Package, Users, Zap, Check, Star, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function ProductManagementLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Package, title: "Smart Inventory", desc: "AI-powered stock management with predictive analytics" },
    { icon: BarChart3, title: "Advanced Analytics", desc: "Real-time insights and performance metrics" },
    { icon: Users, title: "Team Collaboration", desc: "Seamless workflow management for your entire team" },
    { icon: Zap, title: "Automation", desc: "Streamline repetitive tasks with intelligent automation" }
  ];

  const testimonials = [
    { name: "Sarah Chen", role: "Product Manager", company: "TechCorp", rating: 5, text: "Revolutionary platform that transformed our product workflow" },
    { name: "Mike Rodriguez", role: "CEO", company: "StartupXYZ", rating: 5, text: "Increased our productivity by 300% in just 2 months" },
    { name: "Emma Thompson", role: "Operations Lead", company: "GrowthCo", rating: 5, text: "The analytics features are incredibly powerful and intuitive" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-48 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'linear-gradient(45deg, #00C951, #4F39F6)',
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'linear-gradient(225deg, #4F39F6, #00C951)',
            transform: `translateY(${-scrollY * 0.15}px) rotate(${-scrollY * 0.03}deg)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-sm bg-black/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">ProductFlow</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-green-400 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-green-400 transition-colors">Reviews</a>
            <Link href="/signIn" className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              Get Started
            </button>
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm p-6">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-green-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="hover:text-green-400 transition-colors">Reviews</a>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full text-left">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm">Now with AI-powered insights</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Revolutionize Your
            <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Product Management
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Streamline workflows, boost productivity, and make data-driven decisions with our cutting-edge platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-green-400 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-300 text-lg font-semibold">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">500K+</div>
                  <div className="text-gray-300">Products Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">10K+</div>
                  <div className="text-gray-300">Happy Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Modern Teams
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage products efficiently and scale your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Teams Worldwide</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-3xl p-16 backdrop-blur-sm border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Product Management?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of teams already using ProductFlow to streamline their workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-green-400 to-blue-500 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-300 text-lg font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ProductFlow</span>
            </div>
            <div className="text-gray-400">
              © 2025 ProductFlow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
