import React, { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { frequentlyAskQuesData } from "../../../data/constents";

const FrequentlyAskQues = () => {
  const [accordionIndex, setAccordionIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="!mt-[100px] max_width_container !px-[20px]">
      <div className="flex flex-col gap-[20px] justify-center items-center">
        <div className="relative !z-[999] h2_semibold text-[var(--dark-blue-color)] !select-none">
          Frequently Ask Question
          <div className="absolute sm:top-[-125px] top-[-45px] left-0 !z-[9]">
            <img
              src="/assets/logos/welcoming-underline.png"
              alt=""
              className="sm:w-[600px] w-[220px]"
            />
          </div>
        </div>
        <div className="text-[var(--body-text-color)] b1_regular max-w-[455px] sm:text-center">
          We use only the best quality materials on the market in order to
          provide the best products to our patients.
        </div>
      </div>
      <div className="!mt-[66px]">
        <div className="flex justify-center items-center">
          <div className="!w-[630px] flex flex-col gap-5">
            {frequentlyAskQuesData.map((val, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col sm:gap-[20px] gap-[10px] !px-7  ${
                    accordionIndex === index &&
                    "bg-[var(--mid-blue-color)]  rounded-[10px] !py-5 !px-7 "
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <ol className="list-disc w-fit">
                      <li
                        className={`!cursor-pointer b1_medium  ${
                          accordionIndex === index
                            ? "text-[var(--secondary-white-color)]"
                            : "text-[var(--dark-blue-color)]"
                        }`}
                        onClick={() => handleToggleAccordion(index)}
                      >
                        {val.title}
                      </li>
                    </ol>
                    <div>
                      <GoPlusCircle
                        size={24}
                        color={`${
                          accordionIndex === index ? "white" : "black"
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`w-full h-[1.3px]  ${
                      accordionIndex === index ? "bg-[#fff]" : "bg-[#CFCFCF]"
                    }`}
                  ></div>

                  <div
                    className={`transition-[max-height] b1_regular overflow-hidden duration-300 !px-2 ${
                      accordionIndex === index
                        ? "max-h-40 p-4 text-[var(--secondary-white-color)]"
                        : "max-h-0"
                    }`}
                  >
                    {val.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskQues;
