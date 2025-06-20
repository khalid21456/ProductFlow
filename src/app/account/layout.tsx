import React from "react";
import { Package } from "lucide-react";
import SideBar from "@/components/SideBar";
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen ">
        <div className="fixed inset-0 overflow-hidden pointer-events-none"></div>
        <nav className="relative z-50 px-6 py-4 backdrop-blur-sm bg-gradient-to-br from-slate-900 via-purple-500 to-slate-200 text-white overflow-hidden bg-black/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ProductFlow</span>
            </div>
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
        <div className="flex h-full">
          {/* <div className="w-1/6 h-[650px] shadow-2xl border-purple-200 rounded-2xl mt-2 ml-2 bg-purple-200">

          </div> */}
          <SideBar/>
            <div className="w-full h-screen overflow-y-auto">
            {children}
            </div>
        </div>
      </div>
    </>
  );
}
