import React from "react";
import { Link } from "react-router-dom";
import saleIMG from "../Images/sale.jpg";
import contactIMG from "../Images/contact.jpg";
import rentIMG from "../Images/rent.jpg";
import "../Stylesheets/MainContent.css";
const MainContent = () => {
  return (
    <div className="MainContent__container">
      <div className="TopContent__container">
        <Link className="Main__links" to="/house-sale">
          <h4 className="Sale">FOR SALE</h4>
        </Link>
        <div className="Top__content">
          <div className="main__content">
            <img src={saleIMG} alt="House ON SALE" />
            <div className="content__text">
              <h5>
                You are only a click away from viewing our stunning properties
                for sale. To see our complete list of sales, click the icon
                below.
              </h5>
              <Link to="/house-sale">
                <button>SALE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="CenterContent__container hideForMobile">
        <Link to="/house-rent" className="Main__links">
          <h4 className="Rent">TO RENT</h4>
        </Link>
        <div className="Top__content">
          <div className="main__content">
            <img src={rentIMG} alt="House ON RENT" />
            <div className="content__text">
              <h5>
                To see our complete list of rental properties across the
                country, click on the icon below.
              </h5>
              <Link to="/house-rent">
                <button>RENT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="BottomContent__container">
        <Link className="Main__links" to="/contact-us">
          <h4 className="Contact">CONTACT US</h4>
        </Link>
        <div className="Top__content">
          <div className="main__content">
            <img src={contactIMG} alt="Contact" />
            <div className="content__text">
              <h5>You can contact us at any time clicking on this button.</h5>
              <Link to="/contact-us">
                <button>CONTACT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
