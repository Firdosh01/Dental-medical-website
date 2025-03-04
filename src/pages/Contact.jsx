import Navbar from "../components/common/Navbar";
import { MdOutlineAccessTime } from "react-icons/md";
import FrequentlyAskQues from "../components/core/FrequentlyAskQues/FrequentlyAskQues";
import { IoCallOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";

import { TfiLocationPin } from "react-icons/tfi";
const Contact = () => {
  return (
    <div
      style={{
        background: "var(--linear-gradient-3)",
      }}
    >
      <Navbar navbarBgColor={"#ffffff"} />
      <div className="max_width_container !mt-[90px]">
        <div className="flex flex-col gap-[20px] justify-center  items-center">
          <div className="h1_semibold text-[var(--dark-blue-color)] capitalize flex justify-center items-center">
            <div className="flex gap-3">
              <div className="relative !z-[999]">
                Get in touch
                <div className="absolute top-[-70px] left-0 !z-[9]">
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
        <div className="!mt-[80px] flex gap-[35px]">
          <div className="flex flex-col gap-[20px]">
            <div className="bg-[var(--secondary-white-color)] border-[1.7px] border-[var(--sky-blue-color)] !w-[503px] !h-[325px] rounded-[10px]"></div>
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
                <IoCallOutline size={26} color="var(--secondary-white-color)" />
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
          <div></div>
        </div>
        <FrequentlyAskQues />
      </div>
    </div>
  );
};

export default Contact;
