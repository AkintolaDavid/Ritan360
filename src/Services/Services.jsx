import React from "react";
import "./Services.css";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LiaCreativeCommonsShare } from "react-icons/lia";
import { FaSearchengin } from "react-icons/fa6";
// import { GrowYour } from "../GrowYour/GrowYour";

export const Services = () => {
  return (
    <>
      <div className="service_container">
        <div className="service_other_container">
          <div className="service_container_web">
            <div className="icon_container">
              <div className="icon_main">
                <FaLaptopCode />
              </div>
            </div>
            <span className="servicespan"> Website Design & Development</span>
          </div>
          <div className="service_container_gra">
            <div className="icon_container">
              <div className="icon_main">
                {" "}
                <LiaCreativeCommonsShare />
              </div>
            </div>
            <span className="servicespan"> Creative Graphic Design</span>
          </div>
          <div className="service_container_seo">
            <div className="icon_container">
              <div className="icon_main">
                <FaSearchengin />
              </div>
            </div>
            <span className="servicespan"> Search Engine Optimization</span>
          </div>
          <div className="service_container_soc">
            <div className="icon_container">
              <div className="icon_main">
                <IoShareSocialSharp />
              </div>
            </div>
            <span className="servicespan">
              {" "}
              Social Campaign & Digital Marketing
            </span>
          </div>
          <div className="service_container_mob">
            <div className="icon_container">
              <div className="icon_main">
                {" "}
                <MdOutlineDeveloperMode />
              </div>
            </div>
            <span className="servicespan"> Mobile Application Development</span>
          </div>
          <div className="service_container_ecomm">
            <div className="icon_container">
              <div className="icon_main">
                {" "}
                <HiOutlineShoppingCart />
              </div>
            </div>
            <span className="servicespan"> eCommerce Website & Portals</span>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
