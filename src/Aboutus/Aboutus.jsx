import React from "react";
import "./Aboutus.css";
import centricimg from "../asset/customer.jpg";
import aboutdesign from "../asset/aboutdesign.webp";
import { Link } from "react-router-dom";
export const Aboutus = () => {
  return (
    <div className="aboutus_container">
      <div className="aboutuscentriccontainer">
        <div className="aboutuscentric">
          <span className="aboutuscentrictheader">
            WE ARE A CLIENT-CENTRIC TEAM.
          </span>
          <span className="aboutuscentricttext">
            RITAN360 Technologies is an IT company providing top-notch web-based
            products and services. Website design by RITAN360 Technologies is a
            tailored service as we understand each and every client is unique.
            This is why we provide a 100% turn-key on every single one of our
            projects and websites which are custom-made, well designed, standard
            templates and more.
          </span>
          <Link to="/contactus">
            {" "}
            <button className="aboutuscentricbtn">LET'S TALK</button>
          </Link>
        </div>
        <div>
          <img src={centricimg} className="aboutuscentricimg" />
        </div>
      </div>
      <div className="aboutusdesigncontainer">
        <div>
          <img src={aboutdesign} className="aboutusdesignimg" />
        </div>
        <div className="aboutusdesign">
          <span className="aboutusdesigntheader">
            WE BELIEVE THAT A GOOD DESIGN IS KEY TO ONLINE SUCCESS
          </span>
          <span className="aboutusdesignttext">
            At Ritan360 Technologies customer satisfaction is core for us; we
            always put our clients first in everything we do – we put in our
            best to ensure every project stands out unique and represents our
            clients! Website made by us are easy to find, stylish, visually
            appealing, quick loading, mobile responsive and very easy to use.{" "}
          </span>
          <span className="aboutusdesignttext">
            {" "}
            Our creative teams are also able to add their distinctive and
            sophisticated touch to graphics and print design, professional photo
            shot, clean coding, secured projects etc. with boundless energy and
            ability to explain solutions in a jargon free manner; giving our
            clients the leading edge and exponential growth in an ever changing
            online marketplace.
          </span>
        </div>
      </div>
      <div className="aboutussendmessagecontainer">
        <div className="aboutussendmessagetext">
          <span>LET'S BUILD</span>
          <span>SOMETHING GREAT</span>
          <span>TOGETHER</span>
        </div>
        <div>
          <form className="aboutussendmessageform">
            <input
              type="text"
              className="aboutussendmessagenameinput"
              placeholder="Name *"
              name="Name"
              // value={formData.firstName}
              // onChange={handleChange}
            />
            <div className="email_phone">
              <input
                type="text"
                className="aboutussendmessageemailinput"
                placeholder="Email *"
                name="Email"
              />
              <input
                type="text"
                className="aboutussendmessagephoneinput"
                placeholder="PhoneNumber *"
                name="PhoneNumber"
              />
            </div>
            <input
              type="text"
              className="aboutussendmessagesubjectinput"
              placeholder="Subject *"
              name="subject"
            />
            <textarea
              type="text"
              className="aboutussendmessagemessageinput"
              placeholder="Message"
              name="message"
            />
            <button className="aboutussendmessagebtn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
