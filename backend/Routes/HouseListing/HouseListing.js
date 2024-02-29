const router = require(`express`).Router();
const { House } = require("../../Models/House");
const formidable = require("formidable");
const res = require("express/lib/response");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const mongoose = require("mongoose");

//=============================Mongo config and Cloudinary config==============================
const mongoURI = process.env.MONGO_URI;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//============================MongoDB Connection================================================
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      return console.log(error);
    }
    return console.log("Connection to MongoDB was Successful");
  }
);

router.post("/house-listing", (request, response) => {
  const form = new formidable.IncomingForm();
  form.parse(request, (error, fields, files) => {
    const {
      price,
      isSaleorRent,
      city,
      province,
      numofBedRooms,
      numofBathRooms,
      areaofProperty,
      description,
      key,
    } = fields;

    const { houseImage } = files;

    const _key = "5643";
    if (key !== "5643") {
      response.status(400).json({ msg: "you cant upload properties " });
      return;
    }

    cloudinary.uploader.upload(
      houseImage.filepath,
      { folder: "/houseAgency/houses" },
      async (error, results) => {
        if (error || !results) {
          console.log({ error });
          return response.status(400).json(error);
        } else {
          const image_url = results.url;
          const newHouse = new House({
            house_location: {
              province: province,
              city: city,
            },
            house_details: {
              price: price,
              isSaleorRent: isSaleorRent,
              numofBathRooms: numofBathRooms,
              numofBedRooms: numofBedRooms,
              areaofProperty: areaofProperty,
              houseImage: image_url,
              description: description,
              key: key,
            },
          });
          const savedHouse = await newHouse.save();
          return response.status(200).json(savedHouse);
        }
      }
    );

    // response.json({
    //   check: "okay",
    // });
  });
});

module.exports = router;

// console.log("price:", price);
// console.log("PROVINCE:", province);
// console.log("city:", city);
// console.log("numofBedRooms:", numofBedRooms);
// console.log("numofBathRooms:", numofBathRooms);
// console.log("areaofProperty:", areaofProperty);
// console.log("isSaleorRent:", isSaleorRent);
// console.log("houseImage:", houseImage.path);
