import Button from "../components/common/Button";
import "./Home.scss";
import { IoIosArrowDropright } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";

const Home = () => {
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
              <div className="flex gap-3">
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
        <div className="bg-red-900  !ml-[80px] !mt-[50px]">a</div>
      </div>
      {/* Meet our specialists section end */}
    </div>
  );
};

export default Home;
