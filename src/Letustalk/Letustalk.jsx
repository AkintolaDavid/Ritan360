import React, { useState } from "react";

export const Letustalk = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [from, setfrom] = useState("LETS TALK");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "/https://ritan-server.onrender.com/submit_letustalk_form",
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
      <form className="ourservicesendmessageform">
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
    </>
  );
};
