"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import appline from '../../../public/appline.png';
import appstore from '../../../public/appstore.png';
import googleplay from '../../../public/googleplay.svg';
import waiter from '../../../public/waiter.png';
import pos from '../../../public/pos.png';

export default function DownloadApp() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

 
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-[#83ea00] rounded-[20px] p-8 relative flex flex-col justify-between min-h-[340px]">
          <h2 className="text-[24px] sm:text-[30px] text-[#171717] font-extrabold max-w-[70%] leading-7 mt-auto">
            Download the mobile app
          </h2>
          <div className="absolute top-8 right-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M26.2789 17.8748L17.5624 9.15832L19.8604 6.86023L32.5 19.4998L19.8604 32.1392L17.5624 29.8412L26.2789 21.1248H6.5V17.8748H26.2789Z" fill="#171717"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-[#171717] rounded-[20px] p-8 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-3/4 h-3/4">
            <Image
              src={appline}
              alt="Decorative background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10">
            <h3 className="mb-6 text-white text-[24px] sm:text-[32px] font-medium">
              Enjoy exclusive content on our app, including personalized product
            </h3>

    
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              <div className="w-full max-w-[182px] h-auto cursor-pointer">
                <Image
                  src={appstore}
                  alt="App store logo"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="w-full max-w-[182px] h-auto cursor-pointer">
                <Image
                  src={googleplay}
                  alt="Google Play logo"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="w-full max-w-[182px] h-auto cursor-pointer">
                <Image
                  src={pos}
                  alt="POS logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>


            <div className="w-full flex justify-start mt-8">
              <div className="w-full max-w-[182px] h-auto cursor-pointer">
                <Image
                  src={waiter}
                  alt="Waiter app logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
