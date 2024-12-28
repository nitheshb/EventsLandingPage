"use client";

import Link from "next/link";

export default function FooterLinks() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex space-x-6">
      <Link 
        href="#" 
        className="text-sm text-gray-400 hover:text-white transition-colors"
      >
        Privacy Policy
      </Link>
      <Link 
        href="#" 
        className="text-sm text-gray-400 hover:text-white transition-colors"
      >
        Terms
      </Link>
      <span className="text-sm text-gray-400">&copy; {currentYear}</span>
    </div>
  );
}