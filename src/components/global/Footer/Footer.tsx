"use client";

import { Zap } from "lucide-react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Logo and company info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-[#82e600]" />
                <span className="ml-2 text-xl font-semibold">foodyman</span>
              </div>
              <div className="text-gray-400 text-sm">
                <p>4517 Washington Ave. Manchester,</p>
                <p>Kentucky 39495 USA</p>
                <p>+1-202-555-0151, (555) 000-1212</p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#" 
                className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                About Foodyman
              </Link>
              <Link 
                href="#" 
                className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                Careers
              </Link>
              <Link 
                href="#" 
                className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                Add your restaurant
              </Link>
              <Link 
                href="#" 
                className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <SocialLinks />
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}