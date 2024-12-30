"use client";

import { HoverEffect } from "../HoverEffect";
import FeatureCard from "./FeatureCard";

import himg01 from '../../../../public/himg01.jpg'
import himg02 from '../../../../public/himg02.jpeg'
import himg03 from '../../../../public/himg03.jpeg'

export default function HowItWorks() {
  const features = [
    {
      title: "Stall booking",
      description: "Easy booking process,processed on payment ",
      imageSrc: himg01,
    },
    {
      title: "Visitor Registration",
      description: "Secured and hustle free online & offline registrations.",
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
        <h2 className="text-4xl font-bold">The Eventkit Process?</h2>
        
        {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div> */}




         <HoverEffect items={features} className="mb-10" /> 

        {/* <div className="flex bg-[#171717] flex-col">

          <div>

          <h3 className="text-[#82e600] text-2xl   text font-helvetica text-[50px]  font-bold leading-[110%] mb-10">
            Easily guided, the customer <br /> selects suitable dishes and  <br /> makes an order.
          </h3>



          </div>


          <div className="">

          <button className="bg-[#82e600] text-black px-16 py-2 rounded-full hover:bg-[#6cbd00] transition-colors">
              See All
            </button>
            <p className="text-white   text-right text-[32px] font-medium leading-[110%]">
              Everything your customers
              <br />
              need in one service
            </p>

          </div>
        </div> */}

<div className="flex bg-[#171717] flex-col  justify-between px-4 py-6">
  <div>
    <h3 className="text-[#82e600] text-2xl text font-helvetica text-[50px] font-bold leading-[110%] mb-10">
      {/* Easily guided, the customer <br /> selects suitable dishes and <br /> makes an order. */}
      With simple guidance, the customer <br /> selects their ideal stall and secures  <br />  the booking effortlessly
    </h3>
  </div>

  <div className="flex items-center justify-between space-x-6">
    <button className="bg-[#82e600] text-black px-16 py-2 rounded-full hover:bg-[#6cbd00] transition-colors">
      See All
    </button>
    <p className="text-white text-[32px] font-medium leading-[110%] text-right">
      {/* Everything your customers <br /> need in one service */}
      Everything your customers  <br /> require, all in one place
    </p>
  </div>
</div>

      </div>

      
    </div>
  );
}



