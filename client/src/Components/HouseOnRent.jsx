import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { houseOnRentFetch } from "../Store/Actions/HouseFetchAction";
import screenLoader from "../Images/screenLoad.gif";
import { Link } from "react-router-dom";
import "../Stylesheets/HouseListed.css";

const HouseOnRent = ({ province }) => {
  const { loading, error, houseOnRent } = useSelector(
    (state) => state.houseOnRent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(houseOnRentFetch());
  }, []);

  const filteredHouses = useMemo(() => {
    if (!houseOnRent) return [];

    if (!province || !province.length) return houseOnRent;

    return houseOnRent.filter(
      (item) =>
        item.house_location.province.toLowerCase() === province.toLowerCase()
    );
  }, [houseOnRent, province]);

  return (
    <div className="Houses__container">
      {loading ? (
        <img src={screenLoader} alt="Fetching-DATA" className="loadingScreen" />
      ) : error ? (
        <h1>SERVER IS CURRENTLY DOWN :(</h1>
      ) : (
        <div className="Container">
          <h3>Houses to Rent</h3>
          <div className="listedHouses">
            {filteredHouses.map((house) => {
              return (
                <div className="House__details" key={house._id}>
                  <div className="img-conatiner">
                    <Link to={`/house-details/${house._id}`}>
                      <img
                        src={house.house_details.houseImage}
                        className="image"
                        alt="House"
                      />
                    </Link>
                  </div>
                  <div className="House__priceAndDetails">
                    <h4 className="House__price">{`R${house.house_details.price}`}</h4>
                    <h4 className="House__snipDescription">{`${house.house_details.numofBedRooms} Bedroom house for rent in ${house.house_location.province}`}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseOnRent;
