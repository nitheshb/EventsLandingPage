"use client";

import FAQItem from "./FAQItem";

const faqData = [
  {
    question: "Can I group multiple menus under one QR Code?",
    answer: "Yes, you can group multiple menus under a single QR code. This allows you to organize different meal times, special menus, or seasonal offerings efficiently."
  },
  {
    question: "Does Instalacarte work with POS systems?",
    answer: "Yes, our system integrates seamlessly with most popular POS systems to ensure smooth operation of your restaurant."
  },
  {
    question: "Is it possible to use a QR menu as a website for a restaurant?",
    answer: "Yes, the QR menu can serve as a digital menu website for your restaurant, accessible both through QR scanning and direct URL."
  },
  {
    question: "Why it doesn't work?",
    answer: "If you're experiencing issues, please check your internet connection, QR code visibility, and ensure your device's camera is enabled for QR scanning."
  },
  {
    question: "How do I generate a QR code for the menu?",
    answer: "Simply upload your menu through our platform, customize the design, and we'll automatically generate a unique QR code for your restaurant."
  }
];


export default function FAQ() {
  return (
    <div className="py-16 px-16 mt-4 rounded-[20px] mb-4 bg-[#f5f4f6]">
      <h2 className="mb-6 text-[42px] leading-[42px] font-medium text-[#000]">
        Frequently asked questions
      </h2>
      <div className="border-2 border-[#e9e9e9] rounded-[20px] ">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
}