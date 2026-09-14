"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  footer,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-2xl transition duration-300 shadow-input dark:shadow-none p-6 bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/40 backdrop-blur-sm justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-200 relative z-10">
        {icon}
        <div className="font-sans font-bold text-slate-100 text-lg mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-slate-400 text-xs leading-relaxed">
          {description}
        </div>
      </div>
      {footer}
    </div>
  );
};
