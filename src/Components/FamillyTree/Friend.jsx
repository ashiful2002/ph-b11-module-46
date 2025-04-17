import React, { use } from "react";
import { moneyContext } from "./FamillyTree";

const Friend = () => {
  const [money, setMoney] = use(moneyContext);
  return (
    <div>
      <h2>Friend</h2>
      <button
        className="btn btn-secondary"
        onClick={() => setMoney(money + 5000)}
      >
        Add 5000
      </button>
    </div>
  );
};

export default Friend;
