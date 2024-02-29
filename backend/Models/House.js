const mongoose = require("mongoose");
const HouseSchema = mongoose.Schema({
  house_location: {
    province: { type: String, required: true },
    city: { type: String, required: true },
  },
  house_details: {
    price: { type: Number, required: true },
    isSaleorRent: { type: String, required: true },
    numofBedRooms: { type: String, required: true },
    numofBathRooms: { type: String, required: true },
    areaofProperty: { type: String, required: true },
    houseImage: { type: String, required: true },
    description: { type: String, required: true },
    key: { type: String, required: true },
  },
});
const House = mongoose.model("House", HouseSchema);
module.exports = { House };
