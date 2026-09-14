"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#10b981",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [mouseX, setMouseX] = useState(-1000);
  const [mouseY, setMouseY] = useState(-1000);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    setMouseX(clientX - left);
    setMouseY(clientY - top);
  }

  function handleMouseLeave() {
    setMouseX(-1000);
    setMouseY(-1000);
  }

  return (
    <div
      className={cn(
        "group/spotlight p-6 sm:p-8 rounded-2xl relative border border-slate-800 bg-slate-950/80 backdrop-blur-md overflow-hidden transition-all duration-300",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${color}18, transparent 80%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(150px circle at ${mouseX}px ${mouseY}px, ${color}30, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
