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
      <div className="min-h-screen  text-black overflow-hidden">
    
        <div>{children}</div>
      </div>
    </>
  );
}
