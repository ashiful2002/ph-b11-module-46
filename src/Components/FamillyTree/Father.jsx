import React from "react";
import "./FamillyTree.css";
import Myself from "./Myself";
import Brother from "./Brother";
import Sister from "./Sister";
const Father = ({ property }) => {
  return (
    <div>
      <h2>Father</h2>
      <p>{property}</p>
      <section>
        <Brother></Brother>
        <Sister></Sister>
        <Myself property={property}></Myself>
      </section>
    </div>
  );
};

export default Father;
