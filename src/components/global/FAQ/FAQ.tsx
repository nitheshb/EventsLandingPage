"use client";

import FAQItem from "./FAQItem";
const faqData = [
  {
    question: "Is there any fee for registration to EventKit?",
    answer: "Eventkit offers a free plan with basic features. We also have paid plans available with enhanced features, such as priority stall selection and real-time analytics."
  },
  {
    question: "How secure is my information on EventKit?",
    answer: "We take the security of your data very seriously. Eventkit utilizes industry-standard security measures to protect your information, such as encryption and secure data storage."
  },
  // {
  //   question: "What browsers are compatible with EventKit?",
  //   answer: "Eventkit is compatible with most modern web browsers, including Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge."
  // },
  {
    question: "Can I customize my stall design and layout?",
    answer: "The level of customization allowed may vary depending on the specific expo and your chosen stall package. Please inquire with the expo organizers or your Eventkit representative for details."
  },
  {
    question: "How can I promote my presence at the expo?",
    answer: "You can promote your presence at the expo through various channels, such as social media, email marketing, and onsite signage."
  },
  {
    question: "How can I track stall bookings and manage attendee data?",
    answer: "Eventkit provides features for tracking stall bookings and managing attendee data, such as real-time reports and analytics dashboards."
  },
  {
    question: "What is the difference between a standard stall and a premium stall?",
    answer: "Premium stalls typically offer more space, better locations, and additional amenities compared to standard stalls."
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