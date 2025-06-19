"use client";

import "../globals.css";

import { useState, useEffect } from "react";
import {
  Package,
} from "lucide-react";
import Link from "next/link";
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <div className="h-20 bg-green-500 shadow-amber-200"></div>
            <div>{children}</div> */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 -left-48 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: "linear-gradient(45deg, #00C951, #4F39F6)",
              transform: `translateY(${scrollY * 0.1}px) rotate(${
                scrollY * 0.05
              }deg)`,
            }}
          />
          <div
            className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: "linear-gradient(225deg, #4F39F6, #00C951)",
              transform: `translateY(${-scrollY * 0.15}px) rotate(${
                -scrollY * 0.03
              }deg)`,
            }}
          />
        </div>
        <nav className="relative z-50 px-6 py-4 backdrop-blur-sm bg-black/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ProductFlow</span>
            </div>

            {/* <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-green-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="hover:text-green-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="hover:text-green-400 transition-colors"
              >
                Reviews
              </a>
            </div> */}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm p-6">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="hover:text-green-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="hover:text-green-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="hover:text-green-400 transition-colors"
              >
                Reviews
              </a>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full text-left">
                Get Started
              </button>
            </div>
          </div>
        </nav>
        <div>{children}</div>
      </div>
    </>
  );
}
