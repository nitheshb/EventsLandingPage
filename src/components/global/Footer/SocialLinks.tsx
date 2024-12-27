"use client";

import { Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
        <Instagram className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
        <Twitter className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
        <Facebook className="h-5 w-5" />
      </Link>
    </div>
  );
}