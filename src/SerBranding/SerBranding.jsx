import React from "react";
import "./SerBranding.css";
import { FiCheckSquare } from "react-icons/fi";
export const SerBranding = () => {
  return (
    <div className="SerBrandingmaincontainer">
      <div className="servicedropdownfirstheader">
        <span className="servicedropdownfirstheaderdetails">
          Creative Brand Agency in Nigeria
        </span>
        <span className="servicedropdownfirstheaderdtrust">
          That You Can Trust.
        </span>
      </div>
      <div className="servicedropdownsecond">
        <span className="servicedropdownsecondone">
          We are a branding agency in Lagos, Nigeria that helps it’s clients
          gain a better chance at converting buyers into loyal customers. We
          ensure that our branding efforts deliver your message clearly;
          connecting your prospects emotionally, while establishing your
          credibility and also motivating the buyers.
        </span>
        <span className="servicedropdownsecondone">
          Getting a great brand starts from your logo and other graphical
          representation of your product and services. At Ritan360 Technologies
          we work towards initiating the establishment of your business firmly
          in its niche market with the use of collective branding and
          promotional tools.
        </span>
        <span className="servicedropdownsecondone">
          We use branding solutions such as logos, slogans, posters, graphical
          representation, flyers, images, videos, banners, business cards etc to
          portray your business in the best possible way to a wide audience. We
          create well researched and target branding campaigns that communicate
          the values and attributes of your company to the target audience.
        </span>
        <span className="servicedropdownsecondone">
          Talk to us today as your choice SEO and Digital Marketing partner in
          Lagos, Nigeria.
        </span>
      </div>
      <div className="servicedropdownthird">
        <span className="howcanwehelp">How we can help you</span>
        <div className="servicedropdownthirditems">
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              We conduct extensive research while following the latest brand
              trends.
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              We create an brand assets blueprint that gives you an idea of how
              your brand will appear on various layouts.
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              We design all the brand assets such as business cards, ID cards,
              letter headed papers etc.
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              We share the final brand assets with your for accuracy with more
              display options.
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              Once approved, your brand designs will be provided to you in the
              required formats and sizes.
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              Finally your brand is set to meet the world with a creatively new
              look.
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
