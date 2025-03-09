import React from "react";
import CustomLeftArrow from "../../common/CustomLeftArrow";
import CustomRightArrow from "../../common/CustomRightArrow";
import { ourClientReview } from "../../../data/constents";
import { ImStarFull } from "react-icons/im";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurClientReview = () => {
  const clientReview = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.7,
      slidesToSlide: 1,
    },
    largeTablet: {
      breakpoint: { max: 1024, min: 821 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 820, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="!mt-[100px]  flex flex-col !py-[50px] sm:mx-[0px] !mx-[20px]">
      <div className="flex justify-center items-center flex-col max_width_container">
        <div className="flex flex-col gap-[20px] max-w-[479px]">
          <div className="h2_semibold text-[var(--dark-blue-color)] text-center">
            <div className="flex gap-3 justify-center items-center">
              {" "}
              Our
              <div className="relative !z-[999] items-center text-center">
                Happy Clients
                <div className="absolute top-[-54px] left-0 !z-[9]">
                  <img
                    src="/assets/logos/welcoming-underline.png"
                    alt=""
                    className="w-[276px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-[var(--body-text-color)] b1_regular text-center">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </div>
        </div>
      </div>
      <div className="sm:!ml-[80px] !mt-[80px]">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={clientReview}
          ssr={true}
          infinite={true}
          // autoPlay={true}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTrnsition="all .5"
          transitionDuration={2000}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          customRightArrow={
            <CustomRightArrow BgColor={"#011632"} IconColor={"#fff"} />
          }
          customLeftArrow={
            <CustomLeftArrow BgColor={"#011632"} IconColor={"#fff"} />
          }
          // dotListClass="custom-dot-list-style"
          className="!pb-[100px]"
          itemClass="!mx-2"
        >
          {ourClientReview.map((val, index) => {
            return (
              <div
                key={index}
                className="relative  !max-w-[413px] bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.12)] rounded-[10px] !p-6 !my-2"
              >
                <div className="flex flex-col gap-[15px]">
                  <div className="flex items-center gap-[8px]">
                    <div>
                      <img src={val.src} alt="" />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <div className="text-[var(--body-text-color)] text-[24px] tracking-[2%] leading-[155%] font-medium">
                        {val.name}
                      </div>
                      <div className="flex">
                        <ImStarFull size={20} fill="var(--warning-color)" />
                        <ImStarFull size={20} fill="var(--warning-color)" />
                        <ImStarFull size={20} fill="var(--warning-color)" />
                        <ImStarFull size={20} fill="var(--warning-color)" />
                        <ImStarFull size={20} fill="var(--warning-color)" />
                      </div>
                    </div>
                  </div>
                  <div className="b2_regular text-[var(--body-text-color)]">
                    {val.review}
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default OurClientReview;
