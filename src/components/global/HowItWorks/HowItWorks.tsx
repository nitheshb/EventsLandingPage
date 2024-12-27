"use client";

import FeatureCard from "./FeatureCard";

export default function HowItWorks() {
  const features = [
    {
      title: "You place products",
      description: "What should be placed in the institution?",
      imageSrc: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    },
    {
      title: "QR Scanning",
      description: "Or attaches the phone to an NFC chip",
      imageSrc: "https://images.unsplash.com/photo-1598291286794-d417e2685f85?w=800&q=80",
    },
    {
      title: "Opening the menu",
      description: "Does not require installation",
      imageSrc: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&q=80",
    },
  ];

  return (
    <div className="bg-[##171717] text-white py-16 mt-22 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">How does it work?</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <h3 className="text-[#82e600] text-2xl font-semibold max-w-md">
            Easily guided, the customer selects suitable dishes and makes an order.
          </h3>
          <div className="text-right">
            <p className="text-white text-xl mb-4">
              Everything your customers
              <br />
              need in one service
            </p>
            <button className="bg-[#82e600] text-black px-8 py-3 rounded-full hover:bg-[#6cbd00] transition-colors">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}