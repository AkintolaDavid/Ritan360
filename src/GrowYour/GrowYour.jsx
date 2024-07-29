import React from "react";
import "./GrowYour.css";
import { Started } from "../Started/Started";
import { Link } from "react-router-dom";
export const GrowYour = () => {
  return (
    <>
      <div className="grow_container">
        <span className="grow_container_h1">Grow Your Business</span>
        <span>
          As a leading web design and development company in Lagos, Nigeria we
          realize that a website is not just your brand identity, but also your
          distinct uniqueness online ensuring that your brand is noticed by
          potential customers in search results, loads fast and most importantly
          stand unique is our primary focus!
        </span>
        <span>
          Let's help represent your brand in a distinct way. Contact Ritan360
          Technologies to find out more information!
        </span>
        <Link to="/ourservices">
          {" "}
          <button className="growyour">Discover more</button>
        </Link>
      </div>
      <Started />
    </>
  );
};
