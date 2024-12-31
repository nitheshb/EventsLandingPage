

"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const HoverEffect = ({ items, className }: { items: { title: string; description: string; imageSrc: string }[]; className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.imageSrc}
          className="relative group block h-full p-2 w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <h3 className="text-[#82e600] text-xl font-semibold">
                  <CardTitle className="text-[#82e600] text-4xl font-bold leading-tight">{item.title}</CardTitle>
                </h3>

                <div className="bg-[#3e3e3e] rounded-full p-6 inline-flex items-center justify-center group group-hover:text-white group-hover:bg-[#82e600]">
                  <ArrowUpRight className="text-[#fff]" />
                </div>
              </div>

              <hr className="text-[#fff] mt-4" />

              <CardDescription className="text-white text-xl font-medium">
                {item.description}
              </CardDescription>

              {/* Add this section to push the image to the bottom */}
              <div className="relative h-48 w-full rounded-xl overflow-hidden mt-auto">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:filter-none filter grayscale"
                />
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("h-full w-full overflow-hidden bg-[#1c1c1c] rounded-2xl p-4 border border-transparent relative z-20 hover:bg-[#601FEB]", className)}>
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("py-6 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};