import React from "react";

import { FiCheckSquare } from "react-icons/fi";
export const SeoAndDigital = () => {
  return (
    <div className="SerBrandingmaincontainer">
      <div className="servicedropdownfirstheader">
        <span className="servicedropdownfirstheaderdetails">
          SEO and Digital Marketing Solutions
        </span>
        <span className="servicedropdownfirstheaderdtrust">
          That You Can Trust.
        </span>
      </div>
      <div className="servicedropdownsecond">
        <span className="servicedropdownsecondone">
          Ritan360 Technologies offers the best of SEO and Digital Marketing to
          ensure your business stands out; If you want to improve your website
          rankings and drive more focused traffic to your page, trust our SEO
          team with exclusive SEO packages to give your business the right
          start.
        </span>
        <span className="servicedropdownsecondone">
          We understand the importance of not just improving the volume of your
          website traffic, but also enhancing the quality of your traffic.
          High-quality traffic that will help in boosting your business and
          enhances overall business growth. In simple words.{" "}
        </span>
        <span className="servicedropdownsecondone">
          We use the different platforms of digital media to reach out to the
          target audience and communicate the message in the most efficient
          manner. Our professional Lagos SEO and digital marketing services make
          it possible for your company to present your message uniquely and
          powerfully. With our expertise, your brand will get noticed in no
          time!
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
              We conduct extensive research while following the latest ad
              trends.
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              We create an ad blueprint that gives you an idea of how your ads
              appear on various channels or the SEO layouts.
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              We finally get to design all the ad assets and ad copy base on the
              ideas shared or list of all the SEO materials we indeed to work
              with.{" "}
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              We share the final ads assets and copy with your for accuracy and
              the list of channels we indeed to use.
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              Once approved, your ads will be submitted and if it's just SEO we
              commence the process immedately.
            </span>
          </div>
          <div className="servicedropdownthirditem">
            <FiCheckSquare className="eeeee" />
            <span className="servicedropdownthirditemstext">
              It is finally launched by the SEO and Digital marketing experts,
              tracking, clicks and other reports will then be shared with you in
              due time.
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
