import React, { useContext } from "react";
import { AssetContext } from "./FamillyTree";
import Friend from "./Friend";

const Special = ({ property, name }) => {
  const newAsset = useContext(AssetContext);
  return (
    <div>
      <h2>Special</h2>
      <p>{property}</p>
      <p>{newAsset}</p>
      {name === "tom tom" && <Friend></Friend>}
    </div>
  );
};

export default Special;
