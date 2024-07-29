import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/logo.png";
import { navItems } from "../NavItems";
import Dropdown from "../Dropdown";
import DropdownContact from "../DropdownContact/DropdownContact";
export const Navbar = ({ teamsRef }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, []);
  const [dropdown, setDropdown] = useState(false);
  const [dropdowncon, setDropdowncon] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [dropdownconTimeout, setDropdownconTimeout] = useState(null);
  const handleMouseEnter = (setDropdownFn, setDropdownTimeoutFn) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setDropdownFn(true);
    setDropdownTimeoutFn(null);
  };

  const handleMouseLeave = (setDropdownFn, setDropdownTimeoutFn) => {
    const timeout = setTimeout(() => {
      setDropdownFn(false);
    }, 500); // 2 seconds delay
    setDropdownTimeoutFn(timeout);
  };
  const handleMouseEntercon = (setDropdownFn, setDropdownTimeoutFn) => {
    if (dropdownconTimeout) {
      clearTimeout(dropdownconTimeout);
    }
    setDropdownFn(true);
    setDropdownTimeoutFn(null);
  };

  const handleMouseLeavecon = (setDropdownFn, setDropdownTimeoutFn) => {
    const timeout = setTimeout(() => {
      setDropdownFn(false);
    }, 500); // 2 seconds delay
    setDropdownTimeoutFn(timeout);
  };

  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link to="/">
          <img src={logo} alt="logo" className="navbarlogo" />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Our Services") {
              return (
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() =>
                      handleMouseEnter(setDropdown, setDropdownTimeout)
                    }
                    onMouseLeave={() =>
                      handleMouseLeave(setDropdown, setDropdownTimeout)
                    }
                  >
                    {item.title}
                    {dropdown && <Dropdown />}
                  </li>
                </Link>
              );
            }
            if (item.title === "Contact Us") {
              return (
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() =>
                      handleMouseEntercon(setDropdowncon, setDropdownconTimeout)
                    }
                    onMouseLeave={() =>
                      handleMouseLeavecon(setDropdowncon, setDropdownconTimeout)
                    }
                  >
                    {item.title}
                    {dropdowncon && <DropdownContact />}
                  </li>
                </Link>
              );
            }
            return (
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <li key={item.id} className={item.cName}>
                  {item.title}
                </li>{" "}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="navbar_right">
        <div className="nav_right_number">+2348069709910</div>
        <Link
          to="/contactus"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="nav_right_btn">Start a project</div>
        </Link>
      </div>
    </div>
  );
};
