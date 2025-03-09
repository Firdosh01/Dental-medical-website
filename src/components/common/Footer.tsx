import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max_width_container 2xl:!px-[0px] !px-[20px]">
      <div className="flex justify-between items-center">
        <div>
          <img src="/assets/logos/logo.png" alt="" />
        </div>
        <div className="sm:block hidden">
          <ul className="flex gap-[38px] navigation_links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `b2_medium text-[var(--body-text-color)] 
                  `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `b2_medium text-[var(--body-text-color)] 
                  `
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `b2_medium text-[var(--body-text-color)] `
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `b2_medium text-[var(--body-text-color)]`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:!mt-[50px] !mt-[30px] w-full h-[2px] bg-[var(--dark-blue-color)]"></div>
      <div className="flex justify-between sm:flex-row flex-col sm:items-center !my-[37px] sm:gap-[0px] gap-5">
        <div className="b3_regular text-[var(--dark-blue-color)]">
          All rights reserved ® uifry.com | Terms and conditions apply!
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="bg-[var(--dark-blue-color)] !p-[6px] rounded-full">
            <FaFacebook size={20} fill="white" />
          </div>
          <div className="bg-[var(--dark-blue-color)] !p-[6px] rounded-full">
            <FaInstagram size={20} fill="white" />
          </div>
          <div className="bg-[var(--dark-blue-color)] !p-[6px] rounded-full">
            <FaYoutube size={20} fill="white" />
          </div>
          <div className="bg-[var(--dark-blue-color)] !p-[6px] rounded-full">
            <FaLinkedinIn size={20} fill="white" />
          </div>
          <div className="bg-[var(--dark-blue-color)] !p-[6px] rounded-full">
            <FaTwitter size={20} fill="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
