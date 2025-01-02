"use client";

import { HoverEffect } from "../HoverEffect";
import FeatureCard from "./FeatureCard";

import himg01 from '../../../../public/himg01.jpg';
import himg02 from '../../../../public/himg02.jpeg';
import himg03 from '../../../../public/himg03.jpeg';

export default function HowItWorks() {
  const features = [
    {
      title: "Stall booking",
      description: "Easy booking process, processed on payment.",
      imageSrc: himg01,
    },
    {
      title: "Visitor Registration",
      description: "Secured and hustle-free online & offline registrations.",
      imageSrc: himg02,
    },
    {
      title: "Analytics & Dashboards",
      description: "Interactive live dashboards.",
      imageSrc: himg03,
    },
  ];

  return (
    <div className="bg-[#171717] text-white py-16 mt-22 rounded-3xl">
      <div className="max-w-7xl bg-[#171717] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10">
          The Eventkit Process?
        </h2>

        <HoverEffect items={features} className="mb-10" />

        <div className="flex flex-col justify-between px-4 py-6">
          <div>


          <h3 className="text-[#82e600] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-helvetica font-bold leading-[110%] mb-10 w-full max-w-[800px] ">
  With simple guidance, the customer selects their ideal stall and secures the booking effortlessly.
</h3>



          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-6 mt-6 sm:mt-0">
            <button className="bg-[#82e600] text-black px-8 sm:px-16 py-2 rounded-full hover:bg-[#6cbd00] transition-colors text-sm sm:text-base md:text-lg">
              See All
            </button>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium leading-[110%] text-center sm:text-right mt-4 sm:mt-0">
              Everything your customers <br /> require, all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
