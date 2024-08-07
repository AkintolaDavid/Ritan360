import React, { useState } from "react";
import "./Aboutus.css";
import centricimg from "../asset/customer.jpg";
import aboutdesign from "../asset/aboutdesign.webp";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Contactme } from "../Contactme/Contactme";
export const Aboutus = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [from, setfrom] = useState("ABOUT US");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ritan-server.onrender.com/submit_aboutus_form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phoneNumber,
            subject,
            message,
            from,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Form submitted successfully");
      setname("");
      setemail("");
      setPhoneNumber("");
      setsubject("");
      setmessage("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="aboutus_container">
        <div className="aboutuscentriccontainer">
          <div className="aboutuscentric">
            <span className="aboutuscentrictheader">
              WE ARE A CLIENT-CENTRIC TEAM.
            </span>
            <span className="aboutuscentricttext">
              RITAN360 Technologies is an IT company providing top-notch
              web-based products and services. Website design by RITAN360
              Technologies is a tailored service as we understand each and every
              client is unique. This is why we provide a 100% turn-key on every
              single one of our projects and websites which are custom-made,
              well designed, standard templates and more.
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
              sophisticated touch to graphics and print design, professional
              photo shot, clean coding, secured projects etc. with boundless
              energy and ability to explain solutions in a jargon free manner;
              giving our clients the leading edge and exponential growth in an
              ever changing online marketplace.
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
            <form className="aboutussendmessageform" onSubmit={handleSubmit}>
              <input
                type="text"
                className="aboutussendmessagenameinput"
                placeholder="Name *"
                name="Name"
                onChange={(e) => setname(e.target.value)}
                // value={formData.firstName}
                // onChange={handleChange}
              />
              <div className="email_phone">
                <input
                  type="email"
                  className="aboutussendmessageemailinput"
                  placeholder="Email *"
                  name="Email"
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="number"
                  className="aboutussendmessagephoneinput"
                  placeholder="PhoneNumber *"
                  name="PhoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <input
                type="text"
                className="aboutussendmessagesubjectinput"
                placeholder="Subject *"
                name="subject"
                onChange={(e) => setsubject(e.target.value)}
              />
              <textarea
                type="text"
                className="aboutussendmessagemessageinput"
                placeholder="Message"
                name="message"
                onChange={(e) => setmessage(e.target.value)}
              />
              <button
                className="aboutussendmessagebtn"
                type="submit"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Contactme />
    </>
  );
};
