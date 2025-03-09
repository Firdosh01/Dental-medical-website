import React from "react";
import { newsAndArticles } from "../../../data/constents";
import Button from "../../common/Button";

const ArticlesGrid = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[30px] gap-x-[20px] place-items-center">
        {newsAndArticles.map((article) => {
          return (
            <div className="bg-[var(--light-blue-color)] !p-[20px] rounded-[10px] sm:w-full max-w-fit">
              <div>
                <img src={article.src} alt="" className="w-full"/>
              </div>
              <div className="!mt-[22px] !w-[97px] !bg-[var(--dark-blue-color)] b2_medium text-[var(--secondary-white-color)] rounded-[5px] !h-[35px] flex justify-center items-center">
                Self Care
              </div>
              <div className="!mt-[14px] b1_medium text-[var(--dark-blue-color)]">
                {article.title}
              </div>
              <div className="!mt-[10px] b1_regular text-[var(--body-text-color)] ">
                {article.value}
              </div>
              <div className="!mt-[2px] b2_regular text-[var(--dark-blue-color)] text-right">
                {article.author}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center !mt-[50px]">
        <Button>Check out more</Button>
      </div>
    </div>
  );
};

export default ArticlesGrid;
