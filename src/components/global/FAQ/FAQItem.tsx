"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isFirst: boolean;
}

export default function FAQItem({ question, answer, isFirst }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);




  return (
    <div className={`py-4 ${!isFirst ? "border-t border-gray-200  " : ""}`}>
    <button
      className="w-full flex items-center px-10  justify-between text-left"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="m-0 text-[20px] leading-[24px] font-normal px-10 py-7 text-[#232b2f]">{question}</span>
      <Plus
        className={`h-5 w-5 text-gray-600 transition-transform ${
          isOpen ? "rotate-45" : ""
        }`}
      />
    </button>
    {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
  </div>
  );
}