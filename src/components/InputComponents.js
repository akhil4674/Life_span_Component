import React from "react";

const InputComponent = ({ weight, model, drivingTerrain, weatherConditions, handleChange }) => {
  return (
    <div>
      <h1>Vehicle Spare Parts Lifespan</h1>

      <form onSubmit={handleChange}>
        <label>Weight:</label>
        <input type="number" value={weight} onChange={(event) => handleChange("weight", event.target.value)} />
        <label>Model:</label>
        <input type="text" value={model} onChange={(event) => handleChange("model", event.target.value)} />
        <label>Driving Terrain:</label>
        <select value={drivingTerrain} onChange={(event) => handleChange("drivingTerrain", event.target.value)}>
          <option value="City">City</option>
          <option value="Highway">Highway</option>
          <option value="Off-road">Off-road</option>
        </select>
        <label>Weather Conditions:</label>
        <select value={weatherConditions} onChange={(event) => handleChange("weatherConditions", event.target.value)}>
          <option value="Normal">Normal</option>
          <option value="Extreme Cold">Extreme Cold</option>
          <option value="Extreme Heat">Extreme Heat</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default InputComponent;
