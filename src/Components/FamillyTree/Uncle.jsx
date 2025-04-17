import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h2>Uncle</h2>
      <section>
        <Cousin name="rana"></Cousin>
        <Cousin name="masud"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
