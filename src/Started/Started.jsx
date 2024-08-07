import React from "react";
import "./Started.css";
import { Link } from "react-router-dom";
import { Contactme } from "../Contactme/Contactme";
export const Started = () => {
  return (
    <>
      <div className="started_container">
        <div className="started_header">Ready to get started?</div>
        <div className="started_body">
          <div className="started_left">
            <div className="started_text"> Let us discuss your new project</div>
            <Link to="/contactus">
              <button className="started_btn">Reach Out</button>
            </Link>
          </div>
          <div className="started_right">
            <div className="started_text">
              Need help fixing a website issue?
            </div>
            <Link to="/contactus">
              <button className="started_btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
      <Contactme />
    </>
  );
};
