import React, { useState } from "react";
import "./Ourservices.css";
import { Services } from "../Services/Services";
import { Navbar } from "../Navbar/Navbar";
import { Contactme } from "../Contactme/Contactme";
export const Ourservices = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [from, setfrom] = useState("OUR SERVICES");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ritan-server.onrender.com/submit_ourservices_form",
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
      <div className="Ourservicescontainer">
        <span className="Ourservicescontainerfirsttext">
          At Ritan360 Technologies we offer core tech services that makes your
          business stand-out; digital marketing, web design and development,
          search engine optimization, social media management, mobile
          application development, content creation, brand asset and logo
          design.
        </span>
        <div className="serviceinoursevices">
          {" "}
          <Services />
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
            <form className="ourservicesendmessageform" onSubmit={handleSubmit}>
              <input
                type="text"
                className="ourservicesendmessagenameinput"
                placeholder="Name *"
                name="Name"
                onChange={(e) => setname(e.target.value)}
                // value={formData.firstName}
                // onChange={handleChange}
              />
              <div className="email_phone">
                <input
                  type="email"
                  className="ourservicesendmessageemailinput"
                  placeholder="Email *"
                  name="Email"
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="number"
                  className="ourservicesendmessagephoneinput"
                  placeholder="PhoneNumber *"
                  name="PhoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <input
                type="text"
                className="ourservicesendmessagesubjectinput"
                placeholder="Subject *"
                name="subject"
                onChange={(e) => setsubject(e.target.value)}
              />
              <textarea
                type="text"
                className="ourservicesendmessagemessageinput"
                placeholder="Message"
                name="message"
                onChange={(e) => setmessage(e.target.value)}
              />
              <button
                className="ourservicesendmessagebtn"
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
