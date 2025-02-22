// "use client";

// import { Plus } from "lucide-react";
// import { useState } from "react";

// interface FAQItemProps {
//   question: string;
//   answer: string;
//   isFirst: boolean;
// }

// export default function FAQItem({ question, answer, isFirst }: FAQItemProps) {
//   const [isOpen, setIsOpen] = useState(false);




//   return (
//     <div className={`py-4 ${!isFirst ? "border-t border-gray-200  " : ""}`}>
//     <button
//       className="w-full flex items-center px-10  justify-between text-left"
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       <span className="m-0 text-[20px] leading-[24px] font-normal px-10 py-7 text-[#232b2f]">{question}</span>
//       <Plus
//         className={`h-5 w-5 text-gray-600 transition-transform ${
//           isOpen ? "rotate-45" : ""
//         }`}
//       />
//     </button>
//     {/* {isOpen && <div className="mt-2 text-gray-600  px-20">{answer}</div>} */}
//     <div
//   className={`mt-2 text-gray-600 px-20 transition-all duration-1000 ease-out-in overflow-hidden ${
//     isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
//   }`}
// >
//   {answer}
// </div>

//   </div>
//   );
// }


"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isFirst: boolean;
}

export default function FAQItem({ question, answer, isFirst }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`py-4 ${!isFirst ? "border-t border-gray-200" : ""} overflow-hidden`}
    >
      <button
        className="w-full flex items-center px-4 sm:px-6 lg:px-8 justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base sm:text-lg lg:text-xl leading-6 font-normal px-2 sm:px-4 py-4 text-[#232b2f]">
          {question}
        </span>
        <Plus
          className={`h-5 w-5 text-gray-600 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`mt-2 text-sm sm:text-base lg:text-lg text-gray-600 px-6 sm:px-8 lg:px-20 transition-all duration-700 ease-out overflow-hidden ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
}
