import React from "react";

const SparePartPricesComponent = ({ sparePartPrices }) => {
  return (
    <div>
      <h3>Spare Part Prices</h3>
      <ul>
        {Object.keys(sparePartPrices).map((sparePart) => (
          <li key={sparePart}>
            {sparePart}: ${sparePartPrices[sparePart]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SparePartPricesComponent;
