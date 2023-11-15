// src/components/App.js

import React from "react";
import NavBar from "./NavBar";
import InputComponent from "./InputComponent";
import LifespanComponent from "./LifespanComponent";
import SparePartPricesComponent from "./SparePartPricesComponent";
import calculateLifespan from "./utils";
import "../styles.css";

const App = () => {
  const [weight, setWeight] = React.useState(1500);
  const [model, setModel] = React.useState("Toyota Camry");
  const [drivingTerrain, setDrivingTerrain] = React.useState("City");
  const [weatherConditions, setWeatherConditions] = React.useState("Normal");
  const [sparePartPrices, setSparePartPrices] = React.useState({
    oilFilter: 10,
    brakePads: 20,
    tires: 50,
  });

  const handleChange = (name, value) => {
    // ... your handleChange logic ...
  };

  const lifespan = calculateLifespan(weight, model, drivingTerrain, weatherConditions);

  return (
    <div className="app-container">
      <NavBar />

      <div className="app-component input-component">
        <InputComponent
          weight={weight}
          model={model}
          drivingTerrain={drivingTerrain}
          weatherConditions={weatherConditions}
          handleChange={handleChange}
        />
      </div>

      <div className="app-component lifespan-component">
        <LifespanComponent lifespan={lifespan} />
      </div>

      <div className="app-component spare-part-prices-component">
        <SparePartPricesComponent sparePartPrices={sparePartPrices} />
      </div>
    </div>
  );
};

export default App;
