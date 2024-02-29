const express = require("express");
const cors = require("cors");
const app = express();

//==========================================MIDDLEWARE=========================================
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

//======================================ROUTE CONSTANTS========================================
const houseListingRoute = require("./Routes/HouseListing/HouseListing");
const houseFetchRoute = require("./Routes/HouseFetchRoutes/HouseFetch");
const { emailRouter } = require("./Routes/EmailRoute/email");

//======================================ROUTES=================================================
app.use("/housing", houseListingRoute);
app.use("/email", emailRouter);
app.use("/api", houseFetchRoute);

//=======================================SERVER ENTRY==========================================

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
