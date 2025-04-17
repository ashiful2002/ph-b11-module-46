import React, { createContext, useState } from "react";
import GrandPaa from "./GrandPaa";
import "./FamillyTree.css";

export const AssetContext = createContext("");

export const moneyContext = createContext(0);

const FamillyTree = () => {
  const [money, setMoney] = useState(0);

  const property = "Diamond";
  const newAsset = "gold";
  return (
    <div className="text-center mt-5">
      <h2>Famillt tree</h2>
      <h1>Total familly money : {money}</h1>
      <div className="familly-tree">
        <moneyContext.Provider value={[money, setMoney]}>
          <AssetContext.Provider value={newAsset}>
            <GrandPaa property={property}></GrandPaa>
          </AssetContext.Provider>
        </moneyContext.Provider>
      </div>
    </div>
  );
};

export default FamillyTree;
