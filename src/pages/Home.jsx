import Button from "../components/common/Button";
import "./Home.scss";
import { IoIosArrowDropright } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
import OurClientReview from "../components/core/OurClient/OurClientReview";
import ArticlesGrid from "../components/core/Articles/ArticlesGrid";
import FrequentlyAskQues from "../components/core/FrequentlyAskQues/FrequentlyAskQues";
import Navbar from "../components/common/Navbar";
import OurSpecialists from "../components/core/ourSpecialists/OurSpecialists";
import { IoCallOutline } from "react-icons/io5";
import Reveal from "../components/common/Reveal";

const Home = () => {
  return (
    <div>
      <Navbar navbarBgColor={"#e6f6fe"} />
      <div className="max_width_container">
        <div className="flex flex-wrap  lg:flex-nowrap 2xl:!mx-0 !mx-[20px] lg:!pt-[50px]">
          <div className="sm:max-w-[787px] lg:!pt-[116px] !pt-[68px] !pb-5">
            <Reveal>
              <div className="h1_semibold text-[var(--dark-blue-color)] capitalize w-full">
                Get ready for your best ever Dental Experience!
              </div>

              <div className="b1_regular sm:!mt-[22px] !mt-[32px]">
                We use only the best quality materials on the market in order to
                provide the best products to our patients, So don’t worry about
                anything and book yourself.
              </div>

              <div className="sm:!mt-[40px] !mt-[30px] flex sm:items-center sm:gap-[22px] gap-[16px] flex-wrap">
                <div className="w-fit">
                  <Button>Get Started</Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[55px] h-[55px] flex justify-center items-center border-[1.5px] rounded-[10px] border-[var(--mid-blue-color)]">
                    <div className="bg-[var(--light-blue-color)] w-[45px] h-[45px] rounded-[10px] flex justify-center items-center">
                      <BiSolidPhoneCall
                        size={24}
                        fill="var(--mid-blue-color)"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[3px]">
                    <div className="b3_semibold text-[var(--mid-blue-color)]">
                      Dental 24H Emergency
                    </div>
                    <div className="b3_medium text-[var(--dark-blue-color)]">
                      0900-78601
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="w[695px] md:h-auto md:w-full relative !mt-[53px] sm:!mt-[0px]">
            <img
              src="/assets/images/home-img-1.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>

        <div
          className="bg-[var(--light-blue-color)] !py-10 sm:!px-8 !px-[20px] xl:rounded-xl grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lace-items-center !gap-y-[20px]  xl:!gap-x-[20px] gap-x-[10px]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="max-w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
            <div className="w-[70px] h-[70px] bg-[var(--sky-blue-color)] rounded-full flex justify-center items-center">
              <img
                src="/assets/logos/teeth-1.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
            </div>
            <div className="h4_medium text-[var(--dark-blue-color)]">
              Root Canal Treatment
            </div>
            <div className="b1_regular text-[var(--body-text-color)] text-center max-w-[300px] opacity-[88%]">
              Root canal treatment (endodontics) is a dental procedure used to
              treat infection at the centre of a tooth.
            </div>
            <div className="flex gap-[11px]  items-center">
              <span className="b2_medium border-b !leading-[18px]">
                Learn More
              </span>
              <IoIosArrowDropright size={22} />
            </div>
          </div>
          <div className="max-w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
            <div className="w-[70px] h-[70px] bg-[var(--sky-blue-color)] rounded-full flex justify-center items-center">
              <img
                src="/assets/logos/teeth-1.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
            </div>
            <div className="h4_medium text-[var(--dark-blue-color)]">
              Root Canal Treatment
            </div>
            <div className="b1_regular text-[var(--body-text-color)] text-center max-w-[300px] opacity-[88%]">
              Cosmetic dentistry is the branch of dentistry that focuses on
              improving the appearance of your smile.
            </div>
            <div className="flex gap-[11px]  items-center">
              <span className="b2_medium border-b !leading-[18px]">
                Learn More
              </span>
              <IoIosArrowDropright size={22} />
            </div>
          </div>
          <div className="max-w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
            <div className="w-[70px] h-[70px] bg-[var(--sky-blue-color)] rounded-full flex justify-center items-center">
              <img
                src="/assets/logos/teeth-1.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
            </div>
            <div className="h4_medium text-[var(--dark-blue-color)]">
              Root Canal Treatment
            </div>
            <div className="b1_regular text-[var(--body-text-color)] text-center max-w-[300px] opacity-[88%]">
              A dental implant is an artificial tooth root that’s placed into
              your jaw to hold a prosthetic tooth or bridge.
            </div>
            <div className="flex gap-[11px]  items-center">
              <span className="b2_medium border-b !leading-[18px]">
                Learn More
              </span>
              <IoIosArrowDropright size={22} />
            </div>
          </div>
        </div>

        <div
          className="flex items-center lg:gap-[164px] sm:gap-[20px] gap-[80px] justify-center !mt-[100px] md:flex-row flex-col xl:!mx-0 !mx-[20px]"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="md:max-w-[533px] w-full flex flex-col sm:gap-[40px] gap-[30px]">
            <div className="flex flex-col sm:gap-[20px] gap-[17px">
              <div className="h2_semibold text-[var(--dark-blue-color)] capitalize ">
                <div className="flex gap-3">
                  {" "}
                  We’re
                  <div className="relative !z-[999]">
                    welcoming
                    <div className="absolute sm:!top-[-37px] !top-[-25px] left-0 !z-[9]">
                      <img src="/assets/logos/welcoming-underline.png" alt="" />
                    </div>
                  </div>
                  new
                </div>
                <div>patients and can’t wait to meet you.</div>
              </div>
              <div className="b1_regular text-[var(--body-text-color)]">
                We use only the best quality materials on the market in order to
                provide the best products to our patients, So don’t worry about
                anything and book yourself.
              </div>
            </div>
            <div className="border border-[#CECECE] rounded-[10px] flex md:w-[442px] justify-between items-center overflow-hidden ">
              <div className="flex gap-3 !pl-[10px] w-full !pr-[10px]">
                <IoCallOutline size={24} color="#CFCFCF" />
                <input
                  type="text"
                  placeholder="Enter your Phone"
                  className="!w-full border-none outline-none  !flex-1 text-[14px] !text-[#CFCFCF]"
                />
              </div>
              <div className="bg-[var(--mid-blue-color)] h-full !py-[15px] !px-[30px] b2_semibold text-white cursor-pointer">
                Submit
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/images/card-image-1.png" alt="" />
          </div>
        </div>

        <div className="sm:!mt-[121px] !mt-[71px] bg-[var(--light-blue-color)] sm:h-[554px] flex justify-center items-center !py-12">
          <div className="flex items-center lg:gap-[128px] gap-[52px] justify-center sm:flex-row flex-col-reverse xl:!mx-0 !mx-[20px]">
            <div>
              <img src="/assets/images/card-img-2.png" alt="" />
            </div>
            <div className="md:max-w-[533px] flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[20px]">
                <div className="h2_semibold text-[var(--dark-blue-color)] capitalize sm:block hidden">
                  <div className="flex gap-3">
                    {" "}
                    Why choose
                    <div className="relative !z-[999]">
                      Smile
                      <div className="absolute bottom-[0px] left-0 !z-[9]">
                        <img src="/assets/logos/smile-underline.png" alt="" />
                      </div>
                    </div>
                    for all
                  </div>
                  <div>your dental treatments?</div>
                </div>
                <div className="h2_semibold text-[var(--dark-blue-color)] capitalize sm:hidden block">
                  <div className="flex gap-3">
                    {" "}
                    Why choose
                    <div className="relative !z-[999]">
                      Smile
                      <div className="absolute top-[5px] left-0 !z-[9]">
                        <img
                          src="/assets/logos/welcoming-underline.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div>for all your dental treatments?</div>
                </div>
                <div className="b1_regular text-[var(--body-text-color)]">
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients.
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="flex gap-[10px] items-center">
                  <div>
                    <BsShieldCheck fill="var(--mid-blue-color)" size={20} />
                  </div>
                  <div className="b1_medium text-[var(--body-text-color)]">
                    Top quality dental team
                  </div>
                </div>
                <div className="flex gap-[10px] items-center">
                  <div>
                    <BsShieldCheck fill="var(--mid-blue-color)" size={20} />
                  </div>
                  <div className="b1_medium text-[var(--body-text-color)]">
                    State of the art dental services
                  </div>
                </div>
                <div className="flex gap-[10px] items-center">
                  <div>
                    <BsShieldCheck fill="var(--mid-blue-color)" size={20} />
                  </div>
                  <div className="b1_medium text-[var(--body-text-color)]">
                    Discount on all dental treatment
                  </div>
                </div>
                <div className="flex gap-[10px] items-center">
                  <div>
                    <BsShieldCheck fill="var(--mid-blue-color)" size={20} />
                  </div>
                  <div className="b1_medium text-[var(--body-text-color)]">
                    Enrollment is quick and easy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex items-center lg:gap-[164px] gap-[50px] justify-center sm:!mt-[135px] !mt-[100px] xl:!mx-0 !mx-[20px] sm:flex-row flex-col"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="md:max-w-[533px] flex flex-col sm:gap-[40px] gap-[30px] w-full">
            <div className="flex flex-col gap-[20px]">
              <div className="h2_semibold text-[var(--dark-blue-color)] capitalize">
                <div>Leave your worries at the door and enjoy a healthier,</div>
                <div className="flex gap-3">
                  {" "}
                  more
                  <div className="relative !z-[999]">
                    precise smile
                    <div className="absolute sm:!top-[-52px] !top-[-40px] left-0 !z-[9]">
                      <img
                        src="/assets/logos/welcoming-underline.png"
                        alt=""
                        className="w-[276px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="b1_regular text-[var(--body-text-color)]">
                We use only the best quality materials on the market in order to
                provide the best products to our patients, So don’t worry about
                anything and book yourself.
              </div>
            </div>
            <div>
              <div className="w-fit">
                <Button>Book an appointment</Button>
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/images/card-img-3.png" alt="" />
          </div>
        </div>

        <div
          className="!mt-[100px]  xl:!mx-[0px] !mx-[20px]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="flex flex-col justify-center items-center gap-[40px]">
            <div className="flex flex-col gap-[20px] max-w-[629px] justify-center items-center">
              <div className="h2_semibold text-[var(--dark-blue-color)] capitalize text-center md:block hidden">
                <div className="flex gap-3">
                  {" "}
                  We’re
                  <div className="relative !z-[999]">
                    welcoming
                    <div className="absolute top-[-37px]  left-0 !z-[9]">
                      <img
                        src="/assets/logos/welcoming-underline.png"
                        alt=""
                        className="w-[276px]"
                      />
                    </div>
                  </div>
                  new patients
                </div>
                <div>and can’t wait to meet you.</div>
              </div>
              <div className="h2_semibold text-[var(--dark-blue-color)] capitalize md:hidden block">
                <div className="flex gap-3">
                  {" "}
                  We’re
                  <div className="relative !z-[999]">
                    welcoming
                    <div className="absolute sm:!top-[-37px] !top-[-28px] left-0 !z-[9]">
                      <img src="/assets/logos/welcoming-underline.png" alt="" />
                    </div>
                  </div>
                  new
                </div>
                <div>patients and can’t wait to meet you.</div>
              </div>
              <div className="b1_regular text-[var(--body-text-color)] xl:text-center max-w-[463px]">
                We use only the best quality materials on the market in order to
                provide the best products to our patients.
              </div>
            </div>

            <div>
              <img src="/assets/images/video-img-1.png" alt="" />
            </div>
            <div className="w-fit">
              <Button>Watch Playlist</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Meet our specialists section start */}
      <OurSpecialists />
      {/* Meet our specialists section end */}
      {/* our client review section start */}
      <OurClientReview />
      {/* our client review section end */}
      {/* article section start */}
      <div className="!mt-[100px]  flex flex-col !pt-[0px] max_width_container 2xl:!px-[0px] !px-[20px]">
        <Reveal>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-[20px] w-[455px]">
              <div className="relative !z-[999] h2_semibold text-[var(--dark-blue-color)]">
                News & Articles
                <div className="absolute sm:!top-[-70px] !top-[-50px] left-0 !z-[9]">
                  <img
                    src="/assets/logos/welcoming-underline.png"
                    alt=""
                    className="sm:w-[300px] w-[250px]"
                  />
                </div>
              </div>
              <div className="text-[var(--body-text-color)] b1_regular">
                We use only the best quality materials on the market in order to
                provide the best products to our patients.
              </div>
            </div>

            <div className="w-fit sm:block hidden">
              <Button>View All</Button>
            </div>
          </div>
        </Reveal>

        <div className="!mt-[71px]">
          <ArticlesGrid />
        </div>
      </div>
      {/* article section end */}

      {/* Frequently Ask Question section start */}
      <FrequentlyAskQues />
      {/* Frequently Ask Question section end */}

      <div className="!my-[110px] max_width_container ">
        <div className="flex justify-center items-center ">
          <div className="bg-[var(--dark-blue-color)] flex justify-between items-center gap-[80px] lg:!px-12 !w-[1064px] sm:!h-[392px] lg:rounded-[10px] sm:flex-row flex-col !py-12 !px-[20px]">
            <Reveal>
              <div className="lg:w-[582px] w-full">
                <div className="h2_semibold text-[var(--secondary-white-color)] capitalize">
                  Dental Website that&apos;s gonna shake the game rules up.
                </div>
                <p className="b1_regular text-[var(--secondary-white-color)] !mt-[13px]">
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients.
                </p>
                <div className="w-fit !mt-[30px]">
                  <Button>Learn More</Button>
                </div>
              </div>
            </Reveal>

            <div className="sm:w-[305px] sm:h-[292px] w-full">
              <img
                src="/assets/images/article-img-2.png"
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
