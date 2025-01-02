"use client";

import { Zap } from "lucide-react";
import Image from "next/image";
import reservation from '../../../public/reservation.png';
import reservationline from '../../../public/reservationine.png';
import bg1 from '../../../public/bg1.webp';

export default function TableReservation() {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-4 ">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        
 
        <div className="relative h-[490px] w-full overflow-hidden rounded-[20px]">
          <Image
            src={bg1} 
            alt="Reservation" 
            className="absolute inset-0 object-cover w-full h-full rounded-[20px] filter brightness-95"
            layout="fill" 
            objectFit="cover" 
          />
        </div>


        <div className="flex flex-col">
          
      
          <div className="bg-[#83ea00] p-4 text-[#171717] relative rounded-[20px] py-[50px] px-[50px] mb-4">
            <p className="text-2xl mb-2">Advantages</p>
            <h2 className="text-[4rem] sm:text-[5rem] md:text-[36px] lg:text-[56px] font-bold leading-tight">
              Online <br /> Stalls Reservation
            </h2>

            <div className="absolute top-[15%] right-20 w-20 h-20 rounded-full border-2 border-white flex items-center justify-center">
              <svg 
                className="w-12 h-12" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="#fff"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 10V3L4 14h7v7l9-11h-7z" 
                />
              </svg>
            </div>
          </div>

  
          <div className="bg-[#f5f4f6] rounded-[20px]">
            <div className="relative">
              <Image
                src={reservationline}
                alt="Reservation Line"
                width={248}
                height={100}
                className="absolute top-0 right-0 object-contain z-0"
              />
              <div className="relative z-10 p-8">
                <h3 className="text-3xl font-bold mb-4 text-[#171717]">
                  Find your Stalls for any occasion
                </h3>

         
                <div className='group relative cursor-pointer p-2 w-[150px] sm:w-[200px] border border-black bg-transparent rounded-full overflow-hidden text-black text-center font-semibold'>
                  <span className='translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
                    Explore more
                  </span>
                  <div className='flex gap-2 text-white bg-[#000] z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none'>
                    <span>Explore more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
