import Button from "../components/common/Button";
import "./Home.scss";
import { IoIosArrowDropright } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomLeftArrow from "../components/common/CustomLeftArrow";
import CustomRightArrow from "../components/common/CustomRightArrow";
import { ourSpecialists } from "../data/constents";
import OurClientReview from "../components/core/OurClient/OurClientReview";
import ArticlesGrid from "../components/core/Articles/ArticlesGrid";
import FrequentlyAskQues from "../components/core/FrequentlyAskQues/FrequentlyAskQues";
import Footer from "../components/common/Footer";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <div className="max_width_container">
        <div className="flex">
          <div className="max-w-[787px] !pt-[116px]">
            <div className="h1_semibold text-[var(--dark-blue-color)] capitalize w-full">
              Get ready for your best ever Dental Experience!
            </div>
            <div className="b1_regular">
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don’t worry about
              anything and book yourself.
            </div>
            <div className="!mt-[40px] flex items-center gap-[22px]">
              <div className="w-fit">
                <Button>Book an appointment</Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[55px] h-[55px] flex justify-center items-center border-[1.5px] rounded-[10px] border-[var(--mid-blue-color)]">
                  <div className="bg-[var(--light-blue-color)] w-[45px] h-[45px] rounded-[10px] flex justify-center items-center">
                    <BiSolidPhoneCall size={24} fill="var(--mid-blue-color)" />
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
          </div>

          <div className="w[695px] h-auto w-full relative">
            <img
              src="/assets/images/home-img-1.png"
              alt=""
              className="w-full h-full"
            />
            {/* <div className="absolute top-0 left-[100px] right-0 w-full">
              <img
                src="/assets/images/home-img-dental-utils.png"
                alt=""
                className="w-full h-auto"
              />
            </div> */}
          </div>
        </div>

        <div className="bg-[var(--light-blue-color)] !py-10 !px-8 rounded-xl flex justify-between items-center">
          <div className="w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
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
          <div className="w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
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
          <div className="w-[387px] h-[300px] bg-[var(--secondary-white-color)] !py-5  rounded-[10px] flex flex-col gap-2  justify-between items-center">
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

        <div className="flex items-center gap-[164px] justify-center !mt-[100px]">
          <div className="max-w-[533px] flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[20px]">
              <div className="h2_semibold text-[var(--dark-blue-color)] capitalize">
                <div className="flex gap-3">
                  {" "}
                  We’re
                  <div className="relative !z-[999]">
                    welcoming
                    <div className="absolute top-[-37px] left-0 !z-[9]">
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
            <div>aa</div>
          </div>
          <div>
            <img src="/assets/images/card-image-1.png" alt="" />
          </div>
        </div>

        <div className="!mt-[121px] bg-[var(--light-blue-color)] h-[554px] flex justify-center items-center">
          <div className="flex items-center gap-[128px] justify-center">
            <div>
              <img src="/assets/images/card-img-2.png" alt="" />
            </div>
            <div className="max-w-[533px] flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[20px]">
                <div className="h2_semibold text-[var(--dark-blue-color)] capitalize">
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

        <div className="flex items-center gap-[164px] justify-center !mt-[135px]">
          <div className="max-w-[533px] flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[20px]">
              <div className="h2_semibold text-[var(--dark-blue-color)] capitalize">
                <div>Leave your worries at the door and enjoy a healthier,</div>
                <div className="flex gap-3">
                  {" "}
                  more
                  <div className="relative !z-[999]">
                    precise smile
                    <div className="absolute top-[-52px] left-0 !z-[9]">
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

        <div className="!mt-[100px]">
          <div className="flex flex-col justify-center items-center gap-[40px]">
            <div className="flex flex-col gap-[20px] max-w-[629px] justify-center items-center">
              <div className="h2_semibold text-[var(--dark-blue-color)] capitalize text-center">
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
              <div className="b1_regular text-[var(--body-text-color)] text-center max-w-[463px]">
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
      <div className="!mt-[120px] bg-[var(--light-blue-color)]  min-h-[753px] flex flex-col !py-[50px]">
        <div className="flex justify-center items-center flex-col max_width_container">
          <div className="flex flex-col gap-[20px] max-w-[479px]">
            <div className="h2_semibold text-[var(--dark-blue-color)] text-center">
              {/* Meet our  */}
              <div className="flex gap-3 justify-center items-center">
                {" "}
                Meet Our
                <div className="relative !z-[999]">
                  Specialists
                  <div className="absolute top-[-37px] left-0 !z-[9]">
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
        <div className="bg-red900 !ml-[80px] !mt-[80px]">
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
              customTrnsition="all .5"
              transitionDuration={2000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              customRightArrow={
                <CustomRightArrow BgColor={"#fff"} IconColor={"#000"} />
              }
              customLeftArrow={
                <CustomLeftArrow BgColor={"#fff"} IconColor={"#000"} />
              }
              // dotListClass="custom-dot-list-style"
              className="!pb-[100px]"
            >
              {ourSpecialists.map((val, index) => {
                return (
                  <div key={index} className="relative !w-[305px]">
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
        </div>
      </div>
      {/* Meet our specialists section end */}
      {/* our client review section start */}
      <OurClientReview />
      {/* our client review section end */}
      {/* article section start */}
      <div className="!mt-[100px]  flex flex-col !pt-[0px] max_width_container">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-[20px] w-[455px]">
            <div className="relative !z-[999] h2_semibold text-[var(--dark-blue-color)]">
              News & Articles
              <div className="absolute top-[-70px] left-0 !z-[9]">
                <img
                  src="/assets/logos/welcoming-underline.png"
                  alt=""
                  className="w-[300px]"
                />
              </div>
            </div>
            <div className="text-[var(--body-text-color)] b1_regular">
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </div>
          </div>

          <div className="w-fit">
            <Button>View All</Button>
          </div>
        </div>
        <div className="!mt-[71px]">
          <ArticlesGrid />
        </div>
      </div>
      {/* article section end */}

      {/* Frequently Ask Question section start */}
      <div className="!mt-[100px] max_width_container">
        <div className="flex flex-col gap-[20px] justify-center items-center">
          <div className="relative !z-[999] h2_semibold text-[var(--dark-blue-color)] !select-none">
            Frequently Ask Question
            <div className="absolute top-[-125px] left-0 !z-[9]">
              <img
                src="/assets/logos/welcoming-underline.png"
                alt=""
                className="w-[600px]"
              />
            </div>
          </div>
          <div className="text-[var(--body-text-color)] b1_regular max-w-[455px] text-center">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </div>
        </div>
        <div className="!mt-[66px]">
          <FrequentlyAskQues />
        </div>
      </div>
      {/* Frequently Ask Question section end */}

      <div className="!my-[110px] max_width_container">
        <div className="flex justify-center items-center">
          <div className="bg-[var(--dark-blue-color)] flex justify-between items-center gap-[80px] !px-12 !w-[1064px] !h-[392px] rounded-[10px]">
            <div className="w-[582px]">
              <div className="h2_semibold text-[var(--secondary-white-color)] capitalize">
                Dental Website that&apos;s gonna shake the game rules up.
              </div>
              <p className="b1_regular text-[var(--secondary-white-color)] !mt-[13px]">
                We use only the best quality materials on the market in order to
                provide the best products to our patients.
              </p>
              <div className="w-fit !mt-[30px]">
                <Button>Learn More</Button>
              </div>
            </div>
            <div className="w-[305px] h-[292px]">
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
