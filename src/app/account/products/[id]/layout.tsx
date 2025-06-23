"use client";

import "../../../globals.css"

import React from "react";
export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
        <div>{children}</div>
    </React.Fragment>
  );
}