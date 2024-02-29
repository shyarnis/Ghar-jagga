import React from "react";
import { useParams } from "react-router-dom";
import HouseOnRent from "./HouseOnRent";
import HouseOnSale from "./HouseOnsale";

const ProvinceBasedList = ({ sale = true }) => {
  const { province } = useParams();

  return (
    <div>
      {sale ? (
        <HouseOnSale province={province} />
      ) : (
        <HouseOnRent province={province} />
      )}
    </div>
  );
};

export default ProvinceBasedList;
