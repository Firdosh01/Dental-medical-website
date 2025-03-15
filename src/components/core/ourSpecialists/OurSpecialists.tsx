import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomRightArrow from "../../common/CustomRightArrow";
import CustomLeftArrow from "../../common/CustomLeftArrow";
import { ourSpecialists } from "../../../data/constents";
import Reveal from "../../common/Reveal";

const OurSpecialists = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.1,
      slidesToSlide: 1,
    },
    largeTablet: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3.5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="!mt-[120px] bg-[var(--light-blue-color)]  min-h-[753px] flex flex-col !py-[50px]">
      <Reveal>
        <div
          className="flex justify-center items-center flex-col max_width_container sm:px-[0px] !px-[20px]"
          // data-aos="fade-up"
          // data-aos-anchor-placement="top-bottom"
          // data-aos-offset="200"
          // data-aos-delay="10"
          // data-aos-duration="800"
          // data-aos-easing="ease-in-out"
          // data-aos-once="true"
        >
          <div className="flex flex-col gap-[20px] max-w-[479px]">
            <div className="h2_semibold text-[var(--dark-blue-color)] text-center">
              {/* Meet our  */}
              <div className="flex gap-3 justify-center items-center">
                {" "}
                Meet Our
                <div className="relative !z-[999]">
                  Specialists
                  <div className="absolute sm:!top-[-37px] !top-[-25px] left-0 !z-[9]">
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
      </Reveal>

      <div className="bg-red900 sm:!ml-[80px] !mt-[80px] sm:!px-[0px] !px-[20px]">
        <Reveal>
          <div>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
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
                <CustomRightArrow
                  BgColor={"#fff"}
                  IconColor={"#000"}
                  onClick={undefined}
                />
              }
              customLeftArrow={
                <CustomLeftArrow
                  BgColor={"#fff"}
                  IconColor={"#000"}
                  onClick={undefined}
                />
              }
              // dotListClass="custom-dot-list-style"
              className="!pb-[100px]"
            >
              {ourSpecialists.map((val, index) => {
                return (
                  <div key={index} className="relative !max-w-[305px]">
                    <img src={val.src} alt="" />
                    <div className="absolute !top-3 !right-3">
                      <FaLinkedin size={30} />
                    </div>
                    <div className="absolute !bottom-3 !left-3">
                      <div className="bg-[linear-gradient(0deg,rgba(37,180,248,0.3)_0%,rgba(37,180,248,0)_100%)] flex flex-col gap-[4px] rounded-[10px] w-[273px] h-[90px]  justify-center !px-5 backdrop-blur-[200px]">
                        <div className="h4_medium text-[var(--secondary-white-color)]">
                          {val.name}
                        </div>
                        <div className="b2_medium text-[var(--secondary-white-color)]">
                          {val.role}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default OurSpecialists;
