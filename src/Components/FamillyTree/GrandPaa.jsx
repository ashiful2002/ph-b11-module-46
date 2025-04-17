import React, { useContext } from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import Aunt from "./aunt";

const GrandPaa = ({ property }) => {
  return (
    <div>
      <h2 className="text-xl text-red-400">Grandpaa</h2>
      <section className="flex">
        <Father property={property}></Father>
        <Uncle></Uncle>
        <Aunt property={property}></Aunt>
      </section>
    </div>
  );
};

export default GrandPaa;
