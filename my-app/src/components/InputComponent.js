// src/components/InputComponent.js

import React from "react";
import "../styles.css";

const InputComponent = ({ weight, model, drivingTerrain, weatherConditions, handleChange }) => {
  return (
    <div className="input-container">
      <h1 className="input-heading">Vehicle Spare Parts Lifespan</h1>

      <form onSubmit={handleChange} className="input-form">
        <label className="input-label" htmlFor="weight">
          Weight:
        </label>
        <input
          type="number"
          id="weight"
          className="input-field"
          value={weight}
          onChange={(event) => handleChange("weight", event.target.value)}
        />
        <label className="input-label" htmlFor="model">
          Model:
        </label>
        <input
          type="text"
          id="model"
          className="input-field"
          value={model}
          onChange={(event) => handleChange("model", event.target.value)}
        />
        <label className="input-label" htmlFor="drivingTerrain">
          Driving Terrain:
        </label>
        <select
          id="drivingTerrain"
          className="input-field"
          value={drivingTerrain}
          onChange={(event) => handleChange("drivingTerrain", event.target.value)}
        >
          <option value="City">City</option>
          <option value="Highway">Highway</option>
          <option value="Off-road">Off-road</option>
        </select>
        <label className="input-label" htmlFor="weatherConditions">
          Weather Conditions:
        </label>
        <select
          id="weatherConditions"
          className="input-field"
          value={weatherConditions}
          onChange={(event) => handleChange("weatherConditions", event.target.value)}
        >
          <option value="Normal">Normal</option>
          <option value="Extreme Cold">Extreme Cold</option>
          <option value="Extreme Heat">Extreme Heat</option>
        </select>
        <button type="submit" className="calculate-button">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default InputComponent;
