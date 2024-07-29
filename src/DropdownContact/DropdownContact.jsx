import React, { useState } from "react";
import { contactDropdown } from "../NavItems";
// import { Link } from "react-router-dom";
import "./DropdownContact.css";
import { Link } from "react-router-dom";

function DropdownContact() {
  const [dropdowncon, setDropdowncon] = useState(false);

  return (
    <>
      <ul
        className={
          dropdowncon ? "services-submenu clicked" : "services-submenucon"
        }
        onClick={() => setDropdowncon(!dropdowncon)}
      >
        {contactDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdowncon(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownContact;
