// src/components/SparePartPricesComponent.js

import React from "react";
import "../styles.css";

const SparePartPricesComponent = ({ sparePartPrices }) => {
  return (
    <div className="spare-part-prices">
      <h3 className="spare-part-heading">Spare Part Prices</h3>
      <ul className="spare-part-list">
        {Object.keys(sparePartPrices).map((sparePart) => (
          <li key={sparePart} className="spare-part-item">
            {sparePart}: ${sparePartPrices[sparePart]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SparePartPricesComponent;
