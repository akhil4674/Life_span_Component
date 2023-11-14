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

const VehicleSparePartsLifespanApp = () => {
  const [weight, setWeight] = useState(1500);
  const [model, setModel] = useState("Toyota Camry");
  const [drivingTerrain, setDrivingTerrain] = useState("City");
  const [weatherConditions, setWeatherConditions] = useState("Normal");
  const [sparePartPrices, setSparePartPrices] = useState({
    oilFilter: 10,
    brakePads: 20,
    tires: 50,
  });

  const handleChange = (name, value) => {
    switch (name) {
      case "weight":
        setWeight(value);
        break;
      case "model":
        setModel(value);
        break;
      case "drivingTerrain":
        setDrivingTerrain(value);
        break;
      case "weatherConditions":
        setWeatherConditions(value);
        break;
      default:
        break;
    }
  };

  const lifespan = calculateLifespan(weight, model, drivingTerrain, weatherConditions);

  return (
    <div>
      <InputComponent
        weight={weight}
        model={model}
        drivingTerrain={drivingTerrain}
        weatherConditions={weatherConditions}
        handleChange={handleChange}
      />
      <LifespanComponent lifespan={lifespan} />
      <SparePartPricesComponent sparePartPrices={sparePartPrices} />
    </div>
  );
};

export default VehicleSparePartsLifespanApp;
