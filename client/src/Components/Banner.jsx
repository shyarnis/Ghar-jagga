import React from "react";
import banner from "../Images/banner.jpg";
import "../Stylesheets/Banner.css";

const Banner = () => {
    return (
        <div className="Banner_container">
          <img src={banner} alt="Homepage Banner"></img>
        </div>
      
    );
  };
  
  export default Banner;