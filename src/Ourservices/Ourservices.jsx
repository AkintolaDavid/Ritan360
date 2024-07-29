import React from "react";
import "./Ourservices.css";
import { Services } from "../Services/Services";
export const Ourservices = () => {
  return (
    <div className="Ourservicescontainer">
      <span className="Ourservicescontainerfirsttext">
        At Ritan360 Technologies we offer core tech services that makes your
        business stand-out; digital marketing, web design and development,
        search engine optimization, social media management, mobile application
        development, content creation, brand asset and logo design.
      </span>
      <Services />
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
