import React, { useState } from "react";
import "../Stylesheets/HouseListingForm.css";
import axios from "axios";

const HouseListingForm = () => {
  const [price, setPrice] = useState(0);
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [numofBedRooms, setNumofBedRooms] = useState(1);
  const [numofBathRooms, setNumofBathRooms] = useState(1);
  const [areaofProperty, setAreaofProperty] = useState("");
  const [isSaleorRent, setIsSaleorRent] = useState("");
  const [houseImage, setHouseImage] = useState(null);
  const [description, setDescripiton] = useState("");
  const [key, setKey] = useState("");

  const listproperty = () => {
    const url = "http://localhost:3001/housing/house-listing";
    const data = new FormData();

    data.append("price", price);
    data.append("city", city);
    data.append("province", province);
    data.append("numofBedRooms", numofBedRooms);
    data.append("numofBathRooms", numofBathRooms);
    data.append("areaofProperty", areaofProperty);
    data.append("isSaleorRent", isSaleorRent);
    data.append("houseImage", houseImage);
    data.append("description", description);
    data.append("key", key);

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        //console.log(error);
        alert("you cant upload properties");
      });
  };

  return (
    <div className="HouseListing_container">
      <div className="form">
        <h3>list-your-property</h3>
        <label>Secret key</label>

        <input
          type="password"
          placeholder="Secret key"
          onChange={(e) => setKey(e.target.value)}
          value={key}
        />
        <label>House Price</label>

        <input
          type="number"
          placeholder="HousePrice"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <label>House Location(Province)</label>
        <input
          type="text"
          placeholder="Province"
          onChange={(e) => setProvince(e.target.value)}
          value={province}
        />
        <label>House Location(city)</label>
        <input
          type="text"
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <label>Sale or Rent</label>
        <select
          onChange={(e) => setIsSaleorRent(e.target.value)}
          value={isSaleorRent}
        >
          <option>...</option>
          <option value={`SALE`}>Sale</option>
          <option value={`RENT`}>Rent</option>
        </select>
        <label>Number of bedrooms</label>
        <input
          type="text"
          placeholder="Number of bedrooms"
          onChange={(e) => setNumofBedRooms(e.target.value)}
          value={numofBedRooms}
        />
        <label>Number of bathrooms</label>
        <input
          type="text"
          placeholder="Number of bathrooms"
          onChange={(e) => setNumofBathRooms(e.target.value)}
          value={numofBathRooms}
        />
        <label>Total area of property</label>
        <input
          type="text"
          placeholder="Total area of the property"
          onChange={(e) => setAreaofProperty(e.target.value)}
          value={areaofProperty}
        />
        <label>House Description</label>
        <input
          type="text"
          placeholder="house_description"
          onChange={(e) => setDescripiton(e.target.value)}
          value={description}
        />
        <label>House Image</label>
        <input
          type="file"
          placeholder="house image"
          onChange={(e) => setHouseImage(e.target.files[0])}
        />
        <button onClick={listproperty}>LIST YOUR PROPERTY</button>
      </div>
    </div>
  );
};
export default HouseListingForm;
