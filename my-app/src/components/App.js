import React from "react";
import InputComponent from "./InputComponent";
import LifespanComponent from "./InputComponent";
import SparePartPricesComponent from "./SparePartPricesComponent";

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

export default App;
