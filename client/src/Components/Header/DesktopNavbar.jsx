import React from "react";
import logo from "../../Images/gharjagga.jpg";
import "../../Stylesheets/DesktopNav.css";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <div className="DesktopNav_container">
      {/* <div className="DesktopNavLeft_container">
        <img src={logo} alt="Company logo" className="logo"></img>
      </div> */}
      <Link to="/">
        <img src={logo} alt="Company logo" className="logo"></img>
      </Link>
      <div className="DesktopNavRight_container">
        <Link
          to="/house-sale"
          style={{ textDecoration: "none", color: "black" }}
        >
          <a className="link">For Sale</a>
        </Link>
        <Link
          to="/house-rent"
          style={{ textDecoration: "none", color: "black" }}
        >
          <a className="link">For Rent</a>
        </Link>
        <Link
          to="/list-your-property"
          style={{ textDecoration: "none", color: "black" }}
        >
          <a className="link">List/Add Property</a>
        </Link>
        <Link
          to="/contact-us"
          style={{ textDecoration: "none", color: "black" }}
        >
          <a className="link">Contact Us</a>
        </Link>
      </div>
    </div>
  );
};
export default DesktopNavbar;
