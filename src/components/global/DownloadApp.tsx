"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import appline from '../../../public/appline.png'
import appstore from '../../../public/appstore.png'
import googleplay from '../../../public/googleplay.svg'
import waiter from '../../../public/waiter.png'
import pos from '../../../public/pos.png'



export default function DownloadApp() {
  return (



  //   <div className="w-full max-w-6xl mx-auto p-6">
  //   <div className="grid md:grid-cols-2 gap-0">
  //     {/* Left block - Green section */}
  //     <div className="bg-[#7CD32F] rounded-l-2xl p-8 relative flex flex-col justify-between min-h-[300px]">
  //       <h2 className="text-3xl md:text-4xl font-bold max-w-[70%]">
  //         Download the mobile app
  //       </h2>
  //       <div className="absolute top-8 right-8">
  //         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
  //           <svg 
  //             className="w-6 h-6" 
  //             fill="none" 
  //             viewBox="0 0 24 24" 
  //             stroke="currentColor"
  //           >
  //             <path 
  //               strokeLinecap="round" 
  //               strokeLinejoin="round" 
  //               strokeWidth={2} 
  //               d="M17 8l4 4m0 0l-4 4m4-4H3" 
  //             />
  //           </svg>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Right block - Black section */}
  //     <div className="bg-black rounded-r-2xl p-8 relative overflow-hidden">
  //       {/* Curved line decoration */}
  //       <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
  //         <svg viewBox="0 0 200 200" className="w-full h-full">
  //           <path
  //             d="M 0 200 Q 100 100 200 0 L 200 200 Z"
  //             fill="#4A5"
  //             opacity="0.2"
  //           />
  //         </svg>
  //       </div>

  //       <div className="relative z-10">
  //         <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 max-w-[80%]">
  //           Enjoy exclusive content on our app, including personalized product
  //         </h3>

  //         {/* App store buttons */}
  //         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  //           <button className="bg-[#111] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#222] transition-colors">
  //             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
  //               <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  //             </svg>
  //             <span>App Store</span>
  //           </button>
            
  //           <button className="bg-[#111] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#222] transition-colors">
  //             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
  //               <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
  //             </svg>
  //             <span>Google Play</span>
  //           </button>
            
  //           <button className="bg-[#111] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#222] transition-colors">
  //             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
  //               <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z"/>
  //             </svg>
  //             <span>POS Android & iOS</span>
  //           </button>
            
  //           <button className="bg-[#111] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#222] transition-colors">
  //             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
  //               <path d="M12,3A4,4 0 0,1 16,7A4,4 0 0,1 12,11A4,4 0 0,1 8,7A4,4 0 0,1 12,3M16,13.54C16,14.6 15.72,15.6 15.2,16.5C14.68,17.4 13.95,18.09 13,18.57V19C13,19.55 12.55,20 12,20C11.45,20 11,19.55 11,19V18.57C10.05,18.09 9.32,17.4 8.8,16.5C8.28,15.6 8,14.6 8,13.54C8,12.46 8.28,11.44 8.8,10.5C9.32,9.56 10.05,8.83 11,8.35V8C11,7.45 11.45,7 12,7C12.55,7 13,7.45 13,8V8.35C13.95,8.83 14.68,9.56 15.2,10.5C15.72,11.44 16,12.46 16,13.54Z"/>
  //             </svg>
  //             <span>Waiter app Android & iOS</span>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>


  <div className="w-full max-w-[1440px] mx-auto">
  <div className="grid grid-cols-6 gap-2">
  
  <div className="col-span-2 bg-[#83ea00] rounded-l-2xl p-8 relative flex flex-col justify-between min-h-[340px]">
  <h2 className="text-[30px] text-[#171717] font-extrabold max-w-[70%] leading-7 mt-auto">
    Download the mobile app
  </h2>
  <div className="absolute top-8 right-8">
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">

    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M26.2789 17.8748L17.5624 9.15832L19.8604 6.86023L32.5 19.4998L19.8604 32.1392L17.5624 29.8412L26.2789 21.1248H6.5V17.8748H26.2789Z" fill="#171717"></path></svg>

    </div>
  </div>
</div>



    <div className="col-span-4 bg-[#171717] rounded-r-2xl p-8 relative overflow-hidden">
      
      <div className="absolute right-0 bottom-0 w-3/4 h-3/4">

          <Image
    src={appline}
    alt="Decorative background"
    className="w-full h-full object-cover"
  />
      </div>

      <div className="relative z-10">
        <h3 className="mb-6 text-white text-[32px] font-medium ">
          Enjoy exclusive content on our app, including personalized product
        </h3>

   
       

       <div className="grid grid-cols-4 gap-16">
  <div className="w-[182px] h-[58px] cursor-pointer">
    <Image
      src={appstore}
      alt="App store logo"
      className="w-full h-full object-contain"
    />
  </div>

  <div className="w-[182px] h-[58px] cursor-pointer">
    <Image
      src={googleplay}
      alt="Google Play logo"
      className="w-full h-full object-contain"
    />
  </div>

  <div className="w-[182px] h-[58px] cursor-pointer">
    <Image
      src={pos}
      alt="POS logo"
      className="w-full h-full object-contain"
    />
  </div>
</div>

<div className="w-full flex justify-start mt-8">
  <div className="w-[182px] h-[58px] cursor-pointer">
    <Image
      src={waiter}
      alt="Waiter app logo"
      className="w-full h-full object-contain"
    />
  </div>
</div>








      </div>
    </div>
  </div>
</div>


  );
}