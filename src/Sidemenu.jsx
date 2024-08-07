import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import DropdownContact from "./DropdownContact/DropdownContact";
import { navItems } from "./NavItems";
import "./Sidemenu.css";
import { Navbar } from "./Navbar/Navbar";
import { FaAngleRight } from "react-icons/fa6";
import { Contactme } from "./Contactme/Contactme";
import { MdCancel } from "react-icons/md";
import logo from "./asset/logo.png";
import { useNavigate } from "react-router-dom";
export const Sidemenu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
      if (window.innerWidth > 1000) {
        navigate("/"); // Navigate to home page when screen size exceeds 1000px
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleClick = (e, dropdownType) => {
    e.stopPropagation(); // Stop the event from propagating to the Link
    setOpenDropdown((prev) => (prev === dropdownType ? null : dropdownType));
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };
  return (
    <>
      <nav>
        <div>
          <div className="dnavbar">
            {" "}
            <div className="navbar_left">
              <Link to="/">
                <img src={logo} alt="logo" className="navbarlogo" />
              </Link>
            </div>
            <div className="navbar_right">
              <div className="nav_right_number">+2348069709910</div>
              <Link
                to="/contactus"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="nav_right_btn">Start a project</div>
              </Link>
              <Link to="/sidemenu">
                {" "}
                <MdCancel
                  style={{ color: "white", fontSize: "25px" }}
                  onClick={handleBackClick}
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="sidemunucontainer">
        <ul className="sidemunucontainerul">
          {navItems.map((item) => {
            if (item.title === "Our Services") {
              return (
                <li key={item.id} className="sidemunucontainerlinks">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "17px",
                    }}
                  >
                    <Link
                      to={item.path}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {item.title}
                    </Link>
                    <FaAngleRight onClick={(e) => handleClick(e, "services")} />
                  </div>
                  {openDropdown === "services" && <Dropdown />}
                </li>
              );
            }
            if (item.title === "Contact Us") {
              return (
                <li key={item.id} className="sidemunucontainerlinks">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "28px",
                    }}
                  >
                    <Link
                      to={item.path}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {item.title}
                    </Link>
                    <FaAngleRight onClick={(e) => handleClick(e, "contact")} />
                  </div>
                  {openDropdown === "contact" && <DropdownContact />}
                </li>
              );
            }
            return (
              <li key={item.id} className="sidemunucontainerlinks">
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
          {" "}
          <Contactme />
        </div>
      </div>
    </>
  );
};
