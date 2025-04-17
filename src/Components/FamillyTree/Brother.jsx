import React, { use } from "react";
import { moneyContext } from "./FamillyTree";

const Brother = () => {
  const [money, setMoney] = use(moneyContext);
  return (
    <div>
      <h3>Brother</h3>
      <button
        className="btn btn-primary btn-xs"
        onClick={() => setMoney(money + 1000)}
      >
        add 100
      </button>
    </div>
  );
};

export default Brother;
