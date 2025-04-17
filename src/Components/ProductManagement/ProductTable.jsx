import React from "react";
import TotalPrice from "./TotalPrice";

const ProductTable = ({ products }) => {
  console.log(products);

  return (
    <div className="overflow-x-auto mt-10 container mx-auto">
      <table className="table">
        <thead>
          <tr>
            <td>sr.</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Cost</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
