// "use client";

// import Image from "next/image";
// import { ArrowRight, QrCode } from "lucide-react";
// import HowItWorks from "./HowItWorks/HowItWorks";

// import scanqr from '../../../public/scanqr.png'


// import welcomeherovector from'../../../public/welcomeherovector.png'


// export default function QRSection() {
//   return (




//   <div>











// <div className="w-full max-w-[1440px] mx-auto mt-[10px] relative">



// <div className="relative bg-gray-50 rounded-3xl p-8 pb-32 group">
//   <div className="absolute right-[30%] bottom-0 w-3/4 h-3/4">
//     <Image
//       src={welcomeherovector}
//       alt="Decorative background"
//       className="w-full h-full object-cover"
//     />
//   </div>
//   <div className="flex flex-col md:flex-row justify-between items-start">
//     <div className="max-w-[550px] z-10">
//       <h1 className="text-[#121212] leading-[1.2] text-[76px] font-extrabold mb-3">
//         Contact-less
//         <br />
//         QR Menu
//       </h1>

//       <div>

// </div>




//       <p className="text-gray-600 text-[20px] leading-[24px] tracking-[-4%] font-medium mb-[65px] text-[hsla(0,0%,9%,.5)]">
//         Eventkit allows attendees to browse stall options and book their
//         favorite through a user-friendly interface.
//       </p>






// <button
//     type="submit"
//     className="flex items-center justify-center rounded-[8px] box-border font-medium transition duration-500 ease-in-out transform hover:scale-105 px-4 py-2 text-xs 2xl:text-base 2xl:leading-4 bg-btn-pattern hover:bg-primary-700 text-black  bg-[#82e600] shadow-btn"
//   >

//     About 
//   </button>

      
//     </div>
//   </div>
// </div>


//   <div className="absolute left-[68%] bg-[#171717] transform -translate-x-[80%] -translate-y-[80%] ">

// <div className="relative bg-black h-[500px] w-full">

//   <div className="absolute -z-10 w-[320px] h-[480px] p-4 bg-[#82e600] rounded-full">
//     <Image
//       src={scanqr}
//       alt="Reservation Line"
//       width={250}
//       height={250}
//       className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] object-contain z-0"
//     />
//   </div>

 
// </div>






    
//   </div>

//   <div className="bg-[#171717] gap-2 text-white rounded-[20px] p-8  mt-[10px]">


//     <HowItWorks />
  
//   </div>



// </div>

//   </div>







//   );
// }




"use client";

import Image from "next/image";
import { ArrowRight, QrCode } from "lucide-react";
import HowItWorks from "./HowItWorks/HowItWorks";

import scanqr from '../../../public/scanqr.png'
import welcomeherovector from '../../../public/welcomeherovector.png'

export default function QRSection() {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-5 relative">


      <div className="relative bg-gray-50 rounded-3xl p-8 pb-32 group">
     
        <div className="absolute right-[28%] bottom-0 ">
          <Image
            src={welcomeherovector}
            alt="Decorative background"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="max-w-full md:max-w-[550px] z-10">
            <h1 className="text-[#121212] leading-[1.2] text-[45px] sm:text-[46px] lg:text-[66px] font-extrabold mb-3">
              Own the Space,
              <br />
              Rule the Expo.
            </h1>

            <p className="text-gray-600 text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] tracking-[-4%] font-medium mb-[40px] sm:mb-[65px] text-[hsla(0,0%,9%,.5)]">
              Eventkit allows attendees to browse stall options and book their
              favorite through a user-friendly interface.
            </p>

            <button
              type="submit"
              className="flex items-center justify-center rounded-[8px] box-border font-medium transition duration-500 ease-in-out transform hover:scale-105 px-4 py-2 text-xs sm:text-sm md:text-base 2xl:text-base 2xl:leading-4 bg-btn-pattern hover:bg-primary-700 text-black bg-[#82e600] shadow-btn"
            >
              About
            </button>
          </div>
        </div>
      </div>


      <div className="absolute left-[68%] bg-[#171717] transform -translate-x-[80%] -translate-y-[80%] sm:-translate-y-[70%] md:-translate-y-[50%] lg:-translate-y-[70%]">
        <div className="relative bg-black h-[300px] sm:h-[400px] md:h-[500px] w-full">
          <div className="absolute -z-10 w-[250px] sm:w-[300px] md:w-[320px] h-[400px] sm:h-[450px] md:h-[480px] p-4 bg-[#82e600] rounded-full">
            <Image
              src={scanqr}
              alt="QR Code"
              width={250}
              height={250}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain z-0"
            />
          </div>
        </div>
      </div>


      <div className="bg-[#171717] gap-2 text-white rounded-[20px] p-8 mt-10">
        <HowItWorks />
      </div>
    </div>
  );
}
