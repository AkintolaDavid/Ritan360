import React from "react";

import { FiCheckSquare } from "react-icons/fi";
import { Navbar } from "./Navbar/Navbar";
import { Contactme } from "./Contactme/Contactme";
import { Letustalk } from "./Letustalk/Letustalk";
export const WebDesCom = () => {
  return (
    <>
      <Navbar />{" "}
      <div className="SerBrandingmaincontainer">
        <div className="servicedropdownfirstheader">
          <span className="servicedropdownfirstheaderdetails">
            A Web Design Company in Nigeria
          </span>
          <span className="servicedropdownfirstheaderdtrust">
            That You Can Trust.
          </span>
        </div>
        <div className="servicedropdownsecond">
          <span className="servicedropdownsecondone">
            Ritan360 Technologies Lagos is your creative web design agency
            offering impressive and effective web design solutions for a wider
            reach and online exposure. When you have an attractive design, the
            right combination of colors, readable fonts as well as content that
            allows people to find interest in your website, everything goes
            smoothly.
          </span>
          <span className="servicedropdownsecondone">
            We offer custom web design service to ensure best user experience on
            your website. We create feature-rich, interactive and awe-inspiring
            websites that are simple and easy to navigate as well.{" "}
          </span>
          <span className="servicedropdownsecondone">
            Our websites are designed to engage! We want to assist you in
            connecting with your clients and engage them with your brand. Our
            professional Lagos web design services make it possible for your
            company to present your message uniquely and powerfully. With our
            expertise, your brand will get noticed in no time!{" "}
          </span>
          <span className="servicedropdownsecondone">
            Our web designs are team are also in sync with the changing
            technology of the times. We design websites that are robust and can
            be accessed easily on multiple devices across a variety of
            platforms. They are quick to load, easily adjust to screen size and
            offer you an interactive user interface.{" "}
          </span>
        </div>
        <div className="servicedropdownthird">
          <span className="howcanwehelp">How we can help you</span>
          <div className="servicedropdownthirditems">
            <div className="servicedropdownthirditem">
              <FiCheckSquare className="eeeee" />
              <span className="servicedropdownthirditemstext">
                We conduct extensive research while following the latest web
                designing trends.{" "}
              </span>
            </div>
            <div className="servicedropdownthirditem">
              <FiCheckSquare className="eeeee" />
              <span className="servicedropdownthirditemstext">
                We create a blueprint that gives you an idea of how your website
                would look. Based on that would we proceed when you want us to
                make changes or corrections.{" "}
              </span>
            </div>
            <div className="servicedropdownthirditem">
              <FiCheckSquare className="eeeee" />
              <span className="servicedropdownthirditemstext">
                We finally get to design your website from the first page
                onwards.{" "}
              </span>
            </div>
            <div className="servicedropdownthirditem">
              <FiCheckSquare className="eeeee" />
              <span className="servicedropdownthirditemstext">
                We use the creative tools to provide you with layouts for your
                viewing{" "}
              </span>
            </div>
            <div className="servicedropdownthirditem">
              <FiCheckSquare className="eeeee" />
              <span className="servicedropdownthirditemstext">
                Once the design is created, it is checked for compatibility with
                other devices.{" "}
              </span>
            </div>
            <div className="servicedropdownthirditem">
              <FiCheckSquare className="eeeee" />
              <span className="servicedropdownthirditemstext">
                It is finally launched by the website design team as we get your
                website boarded to the CMS ready to go live.{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="ourservicesendmessagecontainer">
          <div className="ourservicesendmessagetext">
            <span>LET'S TALK</span>
            <p>
              We will be glad to discuss your project with you. We enjoy hearing
              the story behind the project to help us bring out the best
              solution at the best price possible.
            </p>
          </div>
          <div>
            <Letustalk />
          </div>
        </div>
      </div>
      <Contactme />
    </>
  );
};
