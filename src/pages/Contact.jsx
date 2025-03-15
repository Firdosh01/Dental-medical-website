import Navbar from "../components/common/Navbar";
import { MdOutlineAccessTime } from "react-icons/md";
import FrequentlyAskQues from "../components/core/FrequentlyAskQues/FrequentlyAskQues";
import { IoCallOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";

const Contact = () => {
  return (
    <div
      style={{
        background: "var(--linear-gradient-3)",
      }}
    >
      <Navbar navbarBgColor={"#ffffff"} />
      <div className="max_width_container !mt-[90px] 2xl:!px-[0px] !px-[20px]">
        <div className="flex flex-col gap-[20px] justify-center  items-center">
          <div className="h1_semibold text-[var(--dark-blue-color)] capitalize flex justify-center items-center">
            <div className="flex gap-3">
              <div className="relative !z-[999]">
                Get in touch
                <div className="absolute xl:!top-[-70px] !top-[-40px]  left-0 !z-[9]">
                  <img
                    src="/assets/logos/welcoming-underline.png"
                    alt=""
                    className="w-[376px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="b1_regular text-[var(--body-text-color)]  max-w-[526px] text-center">
            Book an Appointment to treat your teeth right now.
          </div>
        </div>
        <Reveal>
          <div className="!mt-[80px] flex gap-[35px] justify-center lg:flex-row  flex-col-reverse">
            <div className="flex flex-col gap-[20px]">
              <div className="bg-[var(--secondary-white-color)] border-[1.7px] border-[var(--sky-blue-color)] lg:!w-[503px] !h-[325px] rounded-[10px]"></div>
              <div className="flex !gap-[15px] items-center !bg-[var(--secondary-white-color)] !p-[10px]  rounded-[10px]">
                <div className="bg-[var(--mid-blue-color)] !p-2 rounded-full">
                  <MdOutlineAccessTime
                    size={26}
                    color="var(--secondary-white-color)"
                  />
                </div>
                <div>
                  <div className="b1_medium text-[var(--dark-blue-color)]">
                    Office Timings
                  </div>
                  <div className="b2_regular text-[var(--body-text-color)]">
                    Monday - Saturday (9:00am to 5pm) <br />
                    Sunday (Closed)
                  </div>
                </div>
              </div>
              <div className="flex !gap-[15px] items-center !bg-[var(--secondary-white-color)] !p-[10px]  rounded-[10px]">
                <div className="bg-[var(--mid-blue-color)] !p-2 rounded-full">
                  <TfiLocationPin
                    size={26}
                    color="var(--secondary-white-color)"
                  />
                </div>
                <div>
                  <div className="b1_medium text-[var(--dark-blue-color)]">
                    Emai Address
                  </div>
                  <div className="b2_regular text-[var(--body-text-color)]">
                    Smile01@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex !gap-[15px] items-center !bg-[var(--secondary-white-color)] !p-[10px]  rounded-[10px]">
                <div className="bg-[var(--mid-blue-color)] !p-2 rounded-full">
                  <IoCallOutline
                    size={26}
                    color="var(--secondary-white-color)"
                  />
                </div>
                <div>
                  <div className="b1_medium text-[var(--dark-blue-color)]">
                    Phone Number
                  </div>
                  <div className="b2_regular text-[var(--body-text-color)]">
                    0900-78601
                  </div>
                </div>
              </div>
              <div className="flex !gap-[15px] items-center !bg-[var(--secondary-white-color)] !p-[10px] rounded-[10px]">
                <div className="bg-[var(--mid-blue-color)] !p-2 rounded-full">
                  <LuMessagesSquare
                    size={26}
                    color="var(--secondary-white-color)"
                  />
                </div>
                <div>
                  <div className="b1_medium text-[var(--dark-blue-color)]">
                    Live chat
                  </div>
                  <div className="b2_regular text-[var(--body-text-color)]">
                    +1-2064512559
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[var(--sky-blue-color)] !rounded-[10px] lg:!w-[589px]">
              <div className="!p-[20px] gap-[12px] flex flex-col">
                <div className="flex md:flex-row flex-col gap-[30px] items-center">
                  <div className="flex flex-col gap-[10px] w-full">
                    <label
                      htmlFor="firstName"
                      className="b1_medium text-[var(--body-text-color)]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="outline-none !py-[12px] !px-[16px] !rounded-[10px] border border-[#D0D5DD] w-full bg-[#FFFFFF]"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] w-full">
                    <label
                      htmlFor="lastName"
                      className="b1_medium text-[var(--body-text-color)]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="outline-none !py-[12px] !px-[16px] !rounded-[10px] border border-[#D0D5DD] w-full bg-[#FFFFFF]"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[30px] items-center">
                  <div className="flex flex-col gap-[10px] w-full">
                    <label
                      htmlFor="email"
                      className="b1_medium text-[var(--body-text-color)]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="you@company.com"
                      className="outline-none !py-[12px] !px-[16px] !rounded-[10px] border border-[#D0D5DD]  !w-full bg-[#FFFFFF]"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[30px] items-center">
                  <div className="flex flex-col gap-[10px] w-full">
                    <label
                      htmlFor="phoneNo"
                      className="b1_medium text-[var(--body-text-color)]"
                    >
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="+91 1234567890"
                      className="outline-none !py-[12px] !px-[16px] !rounded-[10px] border border-[#D0D5DD]  !w-full bg-[#FFFFFF]"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[30px] items-center">
                  <div className="flex flex-col gap-[10px] w-full">
                    <label
                      htmlFor="date"
                      className="b1_medium text-[var(--body-text-color)]"
                    >
                      Select date
                    </label>
                    <input
                      type="date"
                      placeholder="December - 02 - 2022"
                      className="outline-none !py-[12px] !px-[16px] !rounded-[10px] border border-[#D0D5DD]  !w-full bg-[#FFFFFF]"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[30px] items-center">
                  <div className="flex flex-col gap-[10px] w-full">
                    <label
                      htmlFor="message"
                      className="b1_medium text-[var(--body-text-color)]"
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      placeholder="Message"
                      className="outline-none !py-[12px] !px-[16px] !rounded-[10px] border border-[#D0D5DD]  !w-full bg-[#FFFFFF] h-[185px] resize-none"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Button>Book an appointment</Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="!my-[121px]">
        <FrequentlyAskQues />
      </div>
    </div>
  );
};

export default Contact;
