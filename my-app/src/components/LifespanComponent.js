import React from "react";
import "../styles.css";
import brakeImage from "../images/brakes/brake_image_1.jpg"; // Import relevant images
import engineImage from "../images/engine/engine_image_1.jpg";
import tyreImage from "../images/tyre/tyre_image_1.jpg";

const LifespanComponent = ({ lifespan }) => {
  return (
    <div className="lifespan-results">
      <h3 className="lifespan-heading">Spare Part Lifespan</h3>
      <div className="lifespan-list">
        {Object.keys(lifespan).map((sparePart) => (
          <div key={sparePart} className={`lifespan-item ${sparePart.toLowerCase()}`}>
            <div className="background-image">
              {sparePart === "Brakes" && <img src={brakeImage} alt="Brake" />}
              {sparePart === "Engine" && <img src={engineImage} alt="Engine" />}
              {sparePart === "Tyre" && <img src={tyreImage} alt="Tyre" />}
            </div>
            <span className="part-name">{sparePart}</span>
            <span className="part-lifespan">{lifespan[sparePart]} km</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifespanComponent;
