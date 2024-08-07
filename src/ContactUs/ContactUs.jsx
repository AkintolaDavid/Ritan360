import React, { useState } from "react";
import "./ContactUs.css";
import intouch from "../asset/INTOUCH.jpg";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Navbar } from "../Navbar/Navbar";
import { Contactme } from "../Contactme/Contactme";
export const ContactUs = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [from, setfrom] = useState("CONTACT US");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ritan-server.onrender.com/submit_contactus_form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
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
      setmessage("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="ContactUscontainer">
        <div className="ContactUsimgcontainer">
          <span>GET IN TOUCH</span>
        </div>

        <div className="contactussendmessagecontainer">
          <div className="contactusinformation">
            <div>
              {" "}
              <FaPhoneAlt className="contactusinformationicon" />
              <span>+234 806 951 7490</span>
            </div>
            <div>
              <IoMdMail className="contactusinformationicon" />

              <span>info@ritan360.com</span>
            </div>
            <div>
              <FaMapLocationDot className="contactusinformationicon" />

              <span>32 Kings Avenue, Bemil, Ikeja, Lagos, Nigeria.</span>
            </div>
            <iframe
              className="contactusmap"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=400&amp;height=500&amp;hl=en&amp;q=32%20Kings%20Avenue,%20Bemil,%20Ikeja,%20Lagos,%20Nigeria.+(Ritan360%20Technologies)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
          <div>
            <form className="contactussendmessageform">
              <span>
                Comments, questions? Drop us a note, and we’ll get back with you
                shortly!
              </span>
              <input
                type="text"
                className="contactussendmessagenameinput"
                placeholder="Name *"
                name="Name"
                onChange={(e) => setname(e.target.value)}
                // value={formData.firstName}
                // onChange={handleChange}
              />

              <input
                type="email"
                className="contactussendmessageemailinput"
                placeholder="Email *"
                name="Email"
                onChange={(e) => setemail(e.target.value)}
              />

              <textarea
                type="text"
                className="contactussendmessagemessageinput"
                placeholder="Message"
                name="message"
                onChange={(e) => setmessage(e.target.value)}
              />
              <button
                className="contactussendmessagebtn"
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
