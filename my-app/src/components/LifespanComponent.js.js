import React from "react";

const LifespanComponent = ({ lifespan }) => {
  return (
    <div>
      <h3>Lifespan Results</h3>
      {Object.keys(lifespan).map((sparePart) => (
        <p key={sparePart}>
          {sparePart}: {lifespan[sparePart]} kilometers
        </p>
      ))}
    </div>
  );
};

export default LifespanComponent;
