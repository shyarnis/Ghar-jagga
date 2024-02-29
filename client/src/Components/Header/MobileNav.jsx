import React from "react";
import logo from "../../Images/gharjagga.jpg";
import "../../Stylesheets/MobileNav.css";

const MobileNavbar = () => {
  return (
    <>
      <div className="MobileNav_container">
        <img src={logo} alt="Company logo" className=""></img>
      </div>
      <div className="DesktopNavRight_container">
        <h3>for sale</h3>
        <h3>for rent</h3>
        <h3>sell your property</h3>
        <h3>contact us</h3>
      </div>
    </>
  );
};

export default MobileNavbar;
