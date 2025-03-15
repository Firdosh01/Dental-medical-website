import { IoIosArrowDropright } from "react-icons/io";
import Navbar from "../components/common/Navbar";
import Button from "../components/common/Button";
import OurSpecialists from "../components/core/ourSpecialists/OurSpecialists";
import FrequentlyAskQues from "../components/core/FrequentlyAskQues/FrequentlyAskQues";
import Reveal from "../components/common/Reveal";

const Services = () => {
  return (
    <div
      style={{
        background: "var(--linear-gradient-3)",
      }}
    >
      <Navbar navbarBgColor={"#ffffff"} />
      <div className="max_width_container !mt-[90px] 2xl:!px-[0px] !px-[20px] ">
        <div className="flex flex-col gap-[20px] sm:justify-center  sm:items-center">
          <div className="h1_semibold text-[var(--dark-blue-color)] capitalize flex sm:justify-center sm:items-center">
            <div className="flex gap-3">
              <div className="relative !z-[999]">
                Services
                <div className="absolute sm:!top-[-32px] !top-[-20px] left-0 !z-[9]">
                  <img
                    src="/assets/logos/welcoming-underline.png"
                    alt=""
                    className="w-[276px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="b1_regular text-[var(--body-text-color)]  max-w-[526px] sm:text-center">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </div>
        </div>
        <div className="!my-[80px]">
          <Reveal>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lace-items-center  gap-y-[40px] xl:!gap-x-[20px] gap-x-[10px]">
              <div className="xl:w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
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
                  Root canal treatment (endodontics) is a dental procedure used
                  to treat infection at the centre of a tooth.
                </div>
                <div className="flex gap-[11px]  items-center">
                  <span className="b2_medium border-b !leading-[18px]">
                    Learn More
                  </span>
                  <IoIosArrowDropright size={22} />
                </div>
              </div>
              <div className="xl:w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
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
              <div className="xl:w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
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
                  A dental implant is an artificial tooth root that’s placed
                  into your jaw to hold a prosthetic tooth or bridge.
                </div>
                <div className="flex gap-[11px]  items-center">
                  <span className="b2_medium border-b !leading-[18px]">
                    Learn More
                  </span>
                  <IoIosArrowDropright size={22} />
                </div>
              </div>
              <div className="xl:w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
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
                  A dental implant is an artificial tooth root that’s placed
                  into your jaw to hold a prosthetic tooth or bridge.
                </div>
                <div className="flex gap-[11px]  items-center">
                  <span className="b2_medium border-b !leading-[18px]">
                    Learn More
                  </span>
                  <IoIosArrowDropright size={22} />
                </div>
              </div>
              <div className="xl:w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
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
                  A dental implant is an artificial tooth root that’s placed
                  into your jaw to hold a prosthetic tooth or bridge.
                </div>
                <div className="flex gap-[11px]  items-center">
                  <span className="b2_medium border-b !leading-[18px]">
                    Learn More
                  </span>
                  <IoIosArrowDropright size={22} />
                </div>
              </div>
              <div className="xl:w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
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
                  A dental implant is an artificial tooth root that’s placed
                  into your jaw to hold a prosthetic tooth or bridge.
                </div>
                <div className="flex gap-[11px]  items-center">
                  <span className="b2_medium border-b !leading-[18px]">
                    Learn More
                  </span>
                  <IoIosArrowDropright size={22} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="flex bg-[var(--dark-blue-color)] gap-[79px] justify-center lg:flex-row flex-col items-center !py-13 xl:!px-[0px] !px-[20px]">
        <Reveal>
          <div className="max-w-[571px]">
            <div className="h2_semibold text-[var(--secondary-white-color)] capitalize">
              <div className="flex gap-3 flex-col">
                {" "}
                Leave your worries at the door and enjoy a healthier,{" "}
                <div className="relative !z-[999]">
                  more precise smile
                  <div className="absolute top-[-37px] left-[25%] !z-[9]">
                    <img src="/assets/logos/welcoming-underline.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[var(--secondary-white-color)] b1_regular !mt-[11px]">
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don’t worry about
              anything and book yourself.
            </div>
            <div className="w-fit !mt-[30px]">
              <Button>
                <div className="flex gap-[10px] items-center">
                  Learn More <IoIosArrowDropright size={22} />
                </div>
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="sm:w-[414px] w-full  h-[397px] bg-[var(--secondary-white-color)] rounded-[10px] !p-[20px] flex flex-col justify-between">
          <div className="h4_medium text-[var(--dark-blue-color)] text-center">
            Request Appointment
          </div>
          <div className="flex flex-col gap-[20px] justify-center">
            <div className=" border rounded-[5px] border-[#9C9C9C]">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent h-[50px] !px-3 border-none outline-none w-full"
              />
            </div>
            <div className="border rounded-[5px] border-[#9C9C9C]">
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-transparent h-[50px] !px-3 border-none outline-none w-full"
              />
            </div>
            <div className="h-[50px] border rounded-[5px] border-[#9C9C9C]">
              <input
                type="text"
                placeholder="Email Address"
                className="bg-transparent h-[50px] !px-3 border-none outline-none w-full"
              />
            </div>
            <div className="flex justify-center !mt-[30px]">
              <Button>
                <div className="flex gap-[10px] items-center">Submit</div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max_width_container">
        <div className="!my-[100px] xl:!px-[0px] !px-[20px]">
          <div className="flex flex-col justify-center items-center gap-[40px]">
            <Reveal>
              <div className="flex flex-col gap-[20px] max-w-[629px] justify-center items-center">
                <div className="h2_semibold text-[var(--dark-blue-color)] capitalize text-center md:block hidden">
                  <div className="flex gap-3">
                    {" "}
                    We’re
                    <div className="relative !z-[999]">
                      welcoming
                      <div className="absolute top-[-37px] left-0 !z-[9]">
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
                      <div className="absolute top-[-37px] left-0 !z-[9]">
                        <img
                          src="/assets/logos/welcoming-underline.png"
                          alt=""
                        />
                      </div>
                    </div>
                    new
                  </div>
                  <div>patients and can’t wait to meet you.</div>
                </div>
                <div className="b1_regular text-[var(--body-text-color)] xl:text-center max-w-[463px]">
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients.
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <img src="/assets/images/video-img-1.png" alt="" />
              </div>
            </Reveal>

            <div className="w-fit">
              <Button>Watch Playlist</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Meet our specialists section start */}
      <OurSpecialists />
      {/* Meet our specialists section end */}

      {/* Frequently Ask Question section start */}
      <FrequentlyAskQues />
      {/* Frequently Ask Question section end */}

      <div className="!my-[110px] max_width_container">
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

export default Services;
