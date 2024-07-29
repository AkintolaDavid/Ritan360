import React from "react";

import { FiCheckSquare } from "react-icons/fi";
export const WebDevCom = () => {
  return (
    <div className="SerBrandingmaincontainer">
      <div className="servicedropdownfirstheader">
        <span className="servicedropdownfirstheaderdetails">
          Web Development company in Nigeria
        </span>
        <span className="servicedropdownfirstheaderdtrust">
          That You Can Trust.
        </span>
      </div>
      <div className="servicedropdownsecond">
        <span className="servicedropdownsecondone">
          Ritan360 Technologies is your creative web development agency base in
          Lagos, Nigeria. Are you looking for web development services in
          Nigeria? – trust the professionals at Ritan360 Technologies
        </span>
        <span className="servicedropdownsecondone">
          We know and appreciate that every business is different, and every
          organization has their own needs when it comes to proffering a web
          development project solution; our team follows all the required
          standards of development (Phases, Methodologies, Process, and Models)
          in line with the Software Development Life Cycle and models.
        </span>
        <span className="servicedropdownsecondone">
          We work with you all the way in the project to ensure it meets the
          requirement and engage the services of professional testers check our
          works.{" "}
        </span>
        <span className="servicedropdownsecondone">
          Our professional team at Ritan360 Technologies ensures that your
          project is not just one of the everyday solution but rather a solution
          that truly works across-platform, easy to navigate and user friendly.
          Talk to us today as your choice Web development team in Lagos,
          Nigeria.
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
              We finally get to design your website from the first page onwards.{" "}
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
            the story behind the project to help us bring out the best solution
            at the best price possible.
          </p>
        </div>
        <div>
          <form className="ourservicesendmessageform">
            <input
              type="text"
              className="ourservicesendmessagenameinput"
              placeholder="Name *"
              name="Name"
              // value={formData.firstName}
              // onChange={handleChange}
            />
            <div className="email_phone">
              <input
                type="text"
                className="ourservicesendmessageemailinput"
                placeholder="Email *"
                name="Email"
              />
              <input
                type="text"
                className="ourservicesendmessagephoneinput"
                placeholder="PhoneNumber *"
                name="PhoneNumber"
              />
            </div>
            <input
              type="text"
              className="ourservicesendmessagesubjectinput"
              placeholder="Subject *"
              name="subject"
            />
            <textarea
              type="text"
              className="ourservicesendmessagemessageinput"
              placeholder="Message"
              name="message"
            />
            <button className="ourservicesendmessagebtn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
