import React from "react";
import Special from "./Special";

const Myself = ({ property }) => {
  return (
    <div>
      <h2>MySelf</h2>
      <section>
        <Special property={property}></Special>
      </section>
    </div>
  );
};

export default Myself;
