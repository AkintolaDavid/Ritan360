import React from "react";

import { FiCheckSquare } from "react-icons/fi";
export const MobileAppDev = () => {
  return (
    <div className="SerBrandingmaincontainer">
      <div className="servicedropdownfirstheader">
        <span className="servicedropdownfirstheaderdetails">
          Mobile App Dev Team (Android & iOS)
        </span>
        <span className="servicedropdownfirstheaderdtrust">
          That You Can Trust.
        </span>
      </div>
      <div className="servicedropdownsecond">
        <span className="servicedropdownsecondone">
          We pride ourselves in developing mobile apps that are specific to your
          business requirements and accelerate your business’ online marketing
          plan. We ensure that the app design is also in sync with your brand
          image and offers an easy-to-use and navigation user interface.
        </span>
        <span className="servicedropdownsecondone">
          We believe in making lives easy for you irrespective of your type of
          business or services you offer your mobile app plays a vital role as
          an average person spends over 12 hours on their smartphones daily.{" "}
        </span>
        <span className="servicedropdownsecondone">
          Wouldn’t you rather be where your customers are? then it’s time to get
          your mobile app up and running, already have a website? super great as
          the mobile app will be a great investment to compliment it.{" "}
        </span>
        <span className="servicedropdownsecondone">
          Our professional team offers a cross-platform compatibility to your
          mobile apps(Android, iOS,Hybrid Apps) Talk to us today at Ritan360
          Technologies Lagos, Nigeria to bring your new application idea to
          reality.{" "}
        </span>
      </div>
      <div className="servicedropdownthird">
        <span className="howcanwehelp">How we can help you</span>
        <div className="servicedropdownthirditems">
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              We conduct extensive research while following the latest mobile
              app trends.
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              We create a blueprint that gives you an idea of how your mobile
              app would look and function.{" "}
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              We finally get to design your mobile app UI/UX design, with all
              screens on a live display.{" "}
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              Our creative app team converts the approved UI/UX into codes ready
              for your application.{" "}
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              Once the design is created into codes, we move into connecting all
              the backend features and core functionalities for your app.{" "}
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              It is finally launched by the mobile app team to the respective
              app stores and ready to meet the needs of your users.{" "}
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
