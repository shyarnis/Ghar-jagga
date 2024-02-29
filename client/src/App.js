import React from "react";
import Navbar from "./Components/Header/Navbar";
// import Searchbar from "./Components/Searchbar";
import DesktopSearchBar from "./Components/Searchbar";
import Banner from "./Components/Banner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Stylesheets/App.css";
import HouseListingForm from "./Components/HouseListingForm";
import HouseOnSale from "./Components/HouseOnsale";
import HouseOnRent from "./Components/HouseOnRent";
import HouseDescription from "./Components/HouseDescription";
import ContactUs from "./Components/ContactUs";
import MainContent from "./Components/MainContent";
import ProvinceBasedList from "./Components/ProvinceBasedList";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/search/sale/results-location/:province"
          element={
            <>
              <ProvinceBasedList />
            </>
          }
        />
        <Route
          path="/search/rent/results-location/:province"
          element={
            <>
              <ProvinceBasedList sale={false} />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <ContactUs />
            </>
          }
        ></Route>
        <Route
          path="/house-details/:id"
          element={
            <>
              <HouseDescription />
            </>
          }
        ></Route>
        <Route
          path="/house-sale"
          element={
            <>
              <HouseOnSale />
            </>
          }
        ></Route>
        <Route
          path="/house-rent"
          element={
            <>
              <HouseOnRent />
            </>
          }
        ></Route>

        <Route
          path="/list-your-property"
          element={
            <>
              <HouseListingForm />
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              {/* <Searchbar /> */}
              <DesktopSearchBar />
              <Banner />
              <MainContent />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
