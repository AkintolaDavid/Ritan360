import { React } from "react";
import { useEffect } from "react";
import logo from "../asset/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Contactme.css";
export const Contactme = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, []);
  const facebookUrl = "https://web.facebook.com/Ritan360/?_rdc=1&_rdr";
  const twitterUrl = "https://x.com/Ritan360/";
  return (
    <div id="contact" className="Contactme_main_container">
      <div className="contact_top">
        <div className="nigeria_office">
          <h1>Nigeria Office</h1>
          <div>
            <span>Suite 29 Ogba, Archade</span>
            <span>Ogba, Ikeja, Lagos – Nigeria.</span>
            <span>
              {" "}
              <IoMdMail style={{ marginRight: "15px", fontSize: "21px" }} />
              info@ritan360.com
            </span>
            <span>
              {" "}
              <FaPhoneAlt style={{ marginRight: "15px", fontSize: "21px" }} />
              +234 806 951 7490
            </span>
          </div>
        </div>
        <div className="nigeria_office">
          <h1>Ireland Office</h1>
          <div>
            <span>Tallaght Square,</span>
            <span>Shopping Centre, Dublin – Ireland.</span>
            <span>
              <IoMdMail style={{ marginRight: "15px", fontSize: "21px" }} />
              ireland@ritan360.com
            </span>
            <span>
              <FaPhoneAlt style={{ marginRight: "15px", fontSize: "21px" }} />
              +353 83 395 6108
            </span>
          </div>
        </div>
        <div className="nigeria_office">
          <h1>Quick Links</h1>
          <div className="contactlinks">
            <span>
              <Link
                to="/aboutus"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                About Us
              </Link>
            </span>
            <span>
              <Link
                to="/contactus"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </span>
            <span>
              {" "}
              <Link
                to="/blog"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Our Blog
              </Link>
            </span>
            <span>
              {" "}
              <Link
                to="/policy"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Privacy Policy{" "}
              </Link>
            </span>
          </div>
        </div>
        <div className="social">
          <h1>Social</h1>
          <div className="social_icons">
            <div className="social_icons_fb">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <FaFacebook />{" "}
              </a>
            </div>
            <div className="social_icons_tw">
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer "
                style={{ color: "inherit" }}
              >
                <FaXTwitter />{" "}
              </a>
            </div>
            <div className="social_icons_you">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="contact_bottom">
        <div>
          <img src={logo} alt="logo" className="contact_logo" />
        </div>
        <div className="copyright">
          © Copyright 2020 Ritan360 Technologies All right reserved.
        </div>
      </div>
    </div>
  );
};
