"use client";

import React, { useState, useEffect } from 'react';
import { 
  Package, 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  CheckCircle,
  Github,
  Chrome,
  Building
} from 'lucide-react';

export default function AuthPages() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: '',
    agreeToTerms: false
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      company: '',
      agreeToTerms: false
    });
  };

  const benefits = [
    "AI-powered inventory management",
    "Real-time analytics dashboard",
    "Team collaboration tools",
    "Automated workflow optimization",
    "Advanced reporting features"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden flex items-center justify-center p-4">
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

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Branding & Benefits */}
          <div className="hidden lg:block space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <Package className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">ProductFlow</span>
            </div>
            
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {isSignIn ? 'Welcome Back!' : 'Join ProductFlow'}
                <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-3xl lg:text-4xl mt-2">
                  {isSignIn ? 'Ready to boost productivity?' : 'Start your journey today'}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {isSignIn 
                  ? 'Access your dashboard and continue managing your products with ease.'
                  : 'Join thousands of teams already transforming their product management workflow.'
                }
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-400 mb-4">What you'll get:</h3>
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">10,000+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
              
              {/* Mobile Brand */}
              <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">ProductFlow</span>
              </div>

              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                  {isSignIn ? 'Sign In' : 'Create Account'}
                </h2>
                <p className="text-gray-400">
                  {isSignIn 
                    ? 'Enter your credentials to access your account' 
                    : 'Fill in your details to get started'
                  }
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300">
                  <Chrome className="w-5 h-5" />
                  <span>Continue with Google</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300">
                  <Github className="w-5 h-5" />
                  <span>Continue with GitHub</span>
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-slate-900 text-gray-400 text-sm">or</span>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-5">
                
                {/* Name Fields (Sign Up Only) */}
                {!isSignIn && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all duration-300 text-white placeholder-gray-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all duration-300 text-white placeholder-gray-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Company Field (Sign Up Only) */}
                {!isSignIn && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Company</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all duration-300 text-white placeholder-gray-500"
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all duration-300 text-white placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-12 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all duration-300 text-white placeholder-gray-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password (Sign Up Only) */}
                {!isSignIn && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-12 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all duration-300 text-white placeholder-gray-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Remember Me / Forgot Password (Sign In) */}
                {isSignIn && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-green-400 bg-transparent border-2 border-white/20 rounded focus:ring-green-400 focus:ring-2"
                      />
                      <span className="text-sm text-gray-300">Remember me</span>
                    </label>
                    <button 
                      type="button" 
                      className="text-sm text-green-400 hover:text-green-300 transition-colors"
                      onClick={() => console.log('Forgot password clicked')}
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                {/* Terms Agreement (Sign Up Only) */}
                {!isSignIn && (
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-green-400 bg-transparent border-2 border-white/20 rounded focus:ring-green-400 focus:ring-2 mt-1"
                      required
                    />
                    <label className="text-sm text-gray-300">
                      I agree to the{' '}
                      <button type="button" className="text-green-400 hover:text-green-300 transition-colors">
                        Terms of Service
                      </button>
                      {' '}and{' '}
                      <button type="button" className="text-green-400 hover:text-green-300 transition-colors">
                        Privacy Policy
                      </button>
                    </label>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="group w-full bg-gradient-to-r from-green-400 to-blue-500 py-3 px-6 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{isSignIn ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Toggle Auth Mode */}
              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  {isSignIn ? "Don't have an account?" : "Already have an account?"}
                  {' '}
                  <button
                    onClick={toggleAuthMode}
                    className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                  >
                    {isSignIn ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}