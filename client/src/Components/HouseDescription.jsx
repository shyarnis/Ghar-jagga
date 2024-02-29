import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BedIcon from "@mui/icons-material/Bed";
import "../Stylesheets/HouseDescription.css";

const HouseDescription = () => {
  const house_id = window.location.href.split("/")[4];
  const [mounted, setMounted] = useState(true);

  const url = `/api/house-details/${house_id}`;
  const [house, setHouse] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const { data } = await api.get(url);

      if (mounted) {
        setHouse(data);
      }
    };
    loadData();
    return () => [setMounted(false)];
  }, [mounted]);

  const sendmessage = (e) => {
    e.preventDefault();
    // console.log("Email:", email);
    // console.log("Subject:", subject);
    // console.log("message:", message);
    api
      .post("/email", {
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      })
      .then((response) => {
        alert(response.data.check);
      });
  };

  //console.log("House ID:", house_id);
  return (
    <div className="HouseDescription_container">
      {house && (
        <div className="HouseDescription__leftContainer">
          <img src={house.house_details.houseImage} alt="" className="img" />
          <h4>{`Rs${house.house_details.price}`}</h4>
          <h4>{`${house.house_details.numofBedRooms} bedroom house in ${house.house_location.province} for ${house.house_details.isSaleorRent}`}</h4>
          <h4>{`house directly located in ${house.house_location.city}`}</h4>

          <div className="HouseDescription_icons">
            <div className="bedding">
              <BedIcon />
              <h5>{house.house_details.numofBedRooms}</h5>
            </div>
            <div className="bathrooms">
              <BathroomIcon />\<h5>{house.house_details.numofBathRooms}</h5>
            </div>
          </div>
          <div className="House_Description">
            <h3>{house.house_details.description}</h3>
            {/* <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem neque provident nihil culpa. Iusto voluptas,
              tenetur provident quo cupiditate nesciunt, nobis dolorum omnis
              explicabo aspernatur earum recusandae repudiandae, reiciendis
              magnam!
            </h3> */}
          </div>
        </div>
      )}

      <div className="HouseDescription__rightContainer">
        <form className="Form" onSubmit={sendmessage}>
          <h3>Contact Agent</h3>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter the subject of the message"
            onChange={(e) => setSubject(e.target.value)}
          />
          <label>Message</label>
          <textarea
            cols="10"
            rows="10"
            placeholder="Enter your message"
            className="textarea"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default HouseDescription;
