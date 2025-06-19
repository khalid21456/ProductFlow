"use client";

import "../../globals.css";

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
    
        <div>{children}</div>
      </div>
    </>
  );
}
