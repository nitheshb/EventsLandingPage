"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-gray-600">{question}</span>
        <Plus className={`h-5 w-5 text-gray-600 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}