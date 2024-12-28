"use client";

import Image from "next/image";
import { ArrowRight, QrCode } from "lucide-react";
import HowItWorks from "./HowItWorks/HowItWorks";

import scanqr from '../../../public/scanqr.png'


import welcomeherovector from'../../../public/welcomeherovector.png'


export default function QRSection() {
  return (

  

  

  //   <div className="w-full max-w-6xl mx-auto p-6">
  //   {/* Top Section */}
  //   <div className="relative bg-gray-50 rounded-3xl p-8 mb-4">
  //     <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
  //       {/* Left content */}
  //       <div className="max-w-md">
  //         <h1 className="text-4xl md:text-5xl font-bold mb-4">
  //           Contact-less<br />QR Menu
  //         </h1>
  //         <p className="text-gray-600 mb-6">
  //           Make a QR code menu for your restaurant, bar or cafeso customers can enjoy a contactless dining experience.
  //         </p>
  //         <button className="px-8 py-2 rounded-full bg-white border-2 border-black hover:bg-black hover:text-white transition-colors">
  //           Submit
  //         </button>
  //       </div>

  //       {/* Right content - QR and floating images */}
  //       <div className="relative mt-8 md:mt-0">
  //         {/* Green circle with QR */}
  //         <div className="bg-[#7CD32F] rounded-full w-64 h-64 flex flex-col items-center justify-center p-6 relative">
  //           <p className="text-sm font-medium mb-2">Scan the code to<br />see the menu</p>
  //           <div className="w-32 h-32 bg-white p-2 rounded-lg">
  //             {/* Placeholder for QR code */}
  //             <div className="w-full h-full bg-gray-200" />
  //           </div>
  //         </div>

  //         {/* Floating circular images */}
  //         <div className="absolute -top-12 -left-20 w-16 h-16 rounded-full overflow-hidden">
  //           <Image
  //             src="/qr-scan-1.jpg"
  //             alt="QR scanning"
  //             width={64}
  //             height={64}
  //             className="object-cover"
  //           />
  //         </div>
  //         <div className="absolute top-1/4 -left-32 w-16 h-16 rounded-full overflow-hidden">
  //           <Image
  //             src="/qr-scan-2.jpg"
  //             alt="QR scanning"
  //             width={64}
  //             height={64}
  //             className="object-cover"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  //   {/* Bottom Section - How it works */}
  //   <div className="bg-black text-white rounded-3xl p-8">
  //     <h2 className="text-3xl font-bold mb-8">How does it work?</h2>
      
  //     <div className="grid md:grid-cols-3 gap-6">
  //       {/* Step 1 */}
  //       <div className="bg-gray-900 rounded-xl p-6">
  //         <div className="flex justify-between items-start mb-4">
  //           <h3 className="text-[#7CD32F] text-xl font-bold">You place<br />products</h3>
  //           <svg className="w-6 h-6 text-[#7CD32F]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  //           </svg>
  //         </div>
  //         <p className="text-gray-400 text-sm mb-4">What should be placed in the institution?</p>
  //         <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-800">
  //           <Image
  //             src="/step-1.jpg"
  //             alt="Step 1"
  //             width={320}
  //             height={160}
  //             className="w-full h-full object-cover"
  //           />
  //         </div>
  //       </div>

  //       {/* Step 2 */}
  //       <div className="bg-gray-900 rounded-xl p-6">
  //         <div className="flex justify-between items-start mb-4">
  //           <h3 className="text-[#7CD32F] text-xl font-bold">QR<br />Scanning</h3>
  //           <svg className="w-6 h-6 text-[#7CD32F]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  //           </svg>
  //         </div>
  //         <p className="text-gray-400 text-sm mb-4">Or attaches the phone to an NFC chip</p>
  //         <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-800">
  //           <Image
  //             src="/step-2.jpg"
  //             alt="Step 2"
  //             width={320}
  //             height={160}
  //             className="w-full h-full object-cover"
  //           />
  //         </div>
  //       </div>

  //       {/* Step 3 */}
  //       <div className="bg-gray-900 rounded-xl p-6">
  //         <div className="flex justify-between items-start mb-4">
  //           <h3 className="text-[#7CD32F] text-xl font-bold">Opening the<br />menu</h3>
  //           <svg className="w-6 h-6 text-[#7CD32F]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  //           </svg>
  //         </div>
  //         <p className="text-gray-400 text-sm mb-4">Does not require installation</p>
  //         <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-800">
  //           <Image
  //             src="/step-3.jpg"
  //             alt="Step 3"
  //             width={320}
  //             height={160}
  //             className="w-full h-full object-cover"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>


  <div>











<div className="w-full max-w-[1440px] mx-auto mt-[10px] relative">










  <div className="relative bg-gray-50 rounded-3xl p-8 pb-32">
  <div className="absolute right-[30%] bottom-0 w-3/4 h-3/4">
<Image
src={welcomeherovector}
alt="Decorative background"
className="w-full h-full object-cover"
/>
</div>
    <div className="flex flex-col  md:flex-row justify-between items-start">

      <div className="max-w-[550px] z-10">
        <h1 className=" text-[#121212]  leading-[1.2] text-[76px] font-extrabold mb-3 ">
          Contact-less<br />QR Menu
        </h1>
        <p className="text-gray-600  text-[20px] leading-[24px] tracking-[-4%] font-medium mb-[68px] text-[hsla(0,0%,9%,.5)]">
          Eventkit allows attendees to browse stall options and book their favorite through a user friendly interface
        </p>
        {/* <button className="px-8 py-2 rounded-full bg-white text-[#121212] border-2 border-black hover:bg-black hover:text-white transition-colors">
          Submit
        </button> */}

<div className='group relative cursor-pointer p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold'>
        <span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
          About
        </span>
        <div className='flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'>
          <span>About</span>
          <ArrowRight />
        </div>
        <div className='absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] dark:group-hover:bg-[#82e600] group-hover:bg-[#000] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] '></div>
      </div>
      </div>




      {/* <div className="absolute right-[8%] top-[90%] z-20">
            <div className="w-[300px] h-[400px]  ">
              <Image
                src={welcomeherovector}  // Using the imported image
                width={120}
                height={120}
                alt="QR code scanning"
                className="object-cover w-full h-full"
              />
            </div>
          </div> */}




{/*  
    <div className="absolute right-[35%] top-[90%]">
      <div className="w-[120px] h-[120px] rounded-full border-2 border-white  overflow-hidden shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80"
          width={170}
          height={170}
          alt="QR code scanning"
          className="object-cover w-full h-full"
        />
      </div>
    </div> */}

    {/* <div className="absolute right-[35%] top-[26%]">
      <div className="w-[120px] h-[120px] rounded-full border-2 border-white  overflow-hidden shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?w=800&q=80"
          width={170}
          height={170}
          alt="Restaurant menu"
          className="object-cover w-full h-full"
        />
      </div>
    </div> */}

    {/* <div className="absolute right-[46%] bottom-[25%]">
      <div className="w-[90px] h-[90px] rounded-full border-2 border-white  overflow-hidden shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1533745848184-3db07256e163?w=800&q=80"
          width={100}
          height={100}
          alt="Mobile ordering"
          className="object-cover w-full h-full"
        />
      </div>
    </div> */}


      {/* Floating circular images */}
      {/* <div className="relative mt-8 md:mt-0">
        <div className="absolute top-0 -left-20 w-16 h-16 rounded-full overflow-hidden">
          <Image
            src="/qr-scan-1.jpg"
            alt="QR scanning"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <div className="absolute top-20 -left-32 w-16 h-16 rounded-full overflow-hidden">
          <Image
            src="/qr-scan-2.jpg"
            alt="QR scanning"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
      </div> */}
    </div>
  </div>


  <div className="absolute left-[68%] bg-[#171717] transform -translate-x-[80%] -translate-y-[80%] ">

<div className="relative bg-black h-[500px] w-full">

  <div className="absolute -z-10 w-[320px] h-[480px] p-4 bg-[#82e600] rounded-full">
    <Image
      src={scanqr}
      alt="Reservation Line"
      width={250}
      height={250}
      className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] object-contain z-0"
    />
  </div>

 
</div>






    
  </div>

  <div className="bg-[#171717] gap-2 text-white rounded-[20px] p-8  mt-[10px]">
    {/* <h2 className="text-3xl font-bold mb-8">How does it work?</h2> */}

    <HowItWorks />
    
    {/* <div className="grid md:grid-cols-3 gap-6">
     
      <div className="bg-gray-900 rounded-xl p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-[#7CD32F] text-xl font-bold">You place<br />products</h3>
          <svg className="w-6 h-6 text-[#7CD32F]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <p className="text-gray-400 text-sm mb-4">What should be placed in the institution?</p>
        <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-800">
          <Image
            src="/step-1.jpg"
            alt="Step 1"
            width={320}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    
      <div className="bg-gray-900 rounded-xl p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-[#7CD32F] text-xl font-bold">QR<br />Scanning</h3>
          <svg className="w-6 h-6 text-[#7CD32F]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <p className="text-gray-400 text-sm mb-4">Or attaches the phone to an NFC chip</p>
        <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-800">
          <Image
            src="/step-2.jpg"
            alt="Step 2"
            width={320}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    
      <div className="bg-gray-900 rounded-xl p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-[#7CD32F] text-xl font-bold">Opening the<br />menu</h3>
          <svg className="w-6 h-6 text-[#7CD32F]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <p className="text-gray-400 text-sm mb-4">Does not require installation</p>
        <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-800">
          <Image
            src="/step-3.jpg"
            alt="Step 3"
            width={320}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div> */}
  </div>



</div>

  </div>







  );
}