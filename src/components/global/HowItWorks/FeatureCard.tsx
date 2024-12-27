"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function FeatureCard({ title, description, imageSrc }: FeatureCardProps) {
  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6 space-y-4">
      <div className="flex justify-between items-start">
        <h3 className="text-[#82e600] text-xl font-semibold">{title}</h3>
        <ArrowUpRight className="text-gray-500" />
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="relative h-48 w-full rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}