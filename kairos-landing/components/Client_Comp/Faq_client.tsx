"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
type faqData = {
  question: string;
  answer: string;
};

type farmainData = {
  farData: faqData[];
};
function Faq_client({ farData }: farmainData) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };
  return (
    <main className="">
      <div className="space-y-4">
        {farData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-150 focus:outline-none"
              onClick={() => toggleItem(index)}
              aria-expanded={openItems.includes(index)}
              aria-controls={`faq-answer-${index}`}>
              <span className=" font-medium text-gray-900 text-[16px]">
                {item.question}
              </span>
              <FaChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openItems.includes(index) ? "transform rotate-180" : ""
                }`}
              />
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(index)
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              aria-hidden={!openItems.includes(index)}>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 md:text-lg  leading-relaxed text-sm">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Faq_client;
