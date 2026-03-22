"use client";
import NyanCat from "@/components/nyan-cat";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import React, { Suspense } from "react";

// Mark as dynamic to prevent static generation timeout with Spline
export const dynamic = 'force-dynamic';

const NotFoundPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline 
          scene="/assets/404.spline" 
          style={{ height: "100vh" }}
        />
      </Suspense>
    </>
  );
};

export default NotFoundPage;
