import React from "react";

import { FiCheckSquare } from "react-icons/fi";
import { Navbar } from "../Navbar/Navbar";
import { Contactme } from "../Contactme/Contactme";
import { Letustalk } from "../Letustalk/Letustalk";
export const Ecommsolution = () => {
  return (
    <>
      <Navbar />{" "}
      <div className="SerBrandingmaincontainer">
        <div className="servicedropdownfirstheader">
          <span className="servicedropdownfirstheaderdetails">
            eCommerce Solution Providers
          </span>
          <span className="servicedropdownfirstheaderdtrust">
            That You Can Trust.
          </span>
        </div>
        <div className="servicedropdownsecond">
          <span className="servicedropdownsecondone">
            When it comes to building an eCommerce solution that truly works you
            can count on us as we offer you a great way to start your online
            business and start making profit. With our eCommerce solution, we
            deploy a unique website with capacity for multiple ways your
            customers can reach and transacts with you easily.{" "}
          </span>
          <span className="servicedropdownsecondone">
            We believe in making lives easy for you irrespective of your type of
            business or services you offer from Small to medium or large scale
            enterprises. As you take the decision to join the digital world and
            reach the global market, it will be great to start on the right foot
            and that is where we come in, we design and develop an eCommerce
            website inline with your requirements and at a pretty decent budget.
          </span>
          <span className="servicedropdownsecondone">
            Our professional team offers a cross-platform compatibility for your
            eCommerce website to ensure ease of navigation and user friendly
            experience. Talk to us today as your choice Web development team in
            Lagos, Nigeria.{" "}
          </span>
        </div>
        <div className="servicedropdownthird">
          <span className="howcanwehelp">How we can help you</span>
          <div className="servicedropdownthirditems">
            <div className="servicedropdownthirditem">
              <FiCheckSquare className="eeeee" />
              <span className="servicedropdownthirditemstext">
                We conduct extensive research while following the latest web
                designing trends.
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
