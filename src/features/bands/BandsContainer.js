import React from "react";
import { useSelector } from "react-redux";

import BandInput from "./BandInput"

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);
  console.log("bands", bands)

  const bandList = bands.map((band, index) => {
    return <li key={index}>{band}</li>
  })

  return (
    <div>
      <BandInput />
      {bandList}
    </div>
  );
}

export default BandsContainer;
