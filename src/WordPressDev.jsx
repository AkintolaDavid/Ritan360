import React from "react";

import { FiCheckSquare } from "react-icons/fi";
import { Navbar } from "./Navbar/Navbar";
import { Contactme } from "./Contactme/Contactme";
import { Letustalk } from "./Letustalk/Letustalk";
export const WordPressDev = () => {
  return (
    <>
      <Navbar />
      <div className="SerBrandingmaincontainer">
        <div className="servicedropdownfirstheader">
          <span className="servicedropdownfirstheaderdetails">
            WordPress Developers in Nigeria
          </span>
          <span className="servicedropdownfirstheaderdtrust">
            That You Can Trust.
          </span>
        </div>
        <div className="servicedropdownsecond">
          <span className="servicedropdownsecondone">
            Ritan360 Technologies has been delivering world-class solutions in
            the construction and building of WordPress sites that delight
            businesses and attract customers. We mix user experience, custom
            plug-ins, and cutting-edge technology to diversify your project and
            provide the best online solution. Whether you own an e-commerce
            website or own a simple website where you provide services to
            people, we provide high end-to-end solution to highlights your
            products or services and how it can bring a change in their lives.{" "}
          </span>
          <span className="servicedropdownsecondone">
            We understand and respect that every business is unique, and every
            organization has unique website demands, which is why we can work
            with you to adapt WordPress to best fit your needs. Not sure what
            you require? Our WordPress professionals may make recommendations
            depending on your industry and specifics.{" "}
          </span>
          <span className="servicedropdownsecondone">
            Our professional team at Ritan360 Technologies ensures your
            WordPress website is built to fit across-platform, easy to navigate
            and user friendly. Talk to us today as your choice WordPress
            developer in Lagos, Nigeria to start with your website now.
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
