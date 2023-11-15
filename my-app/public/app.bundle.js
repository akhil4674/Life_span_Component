import React from "react";
import InputComponent from "./InputComponent";
import LifespanComponent from "./LifespanComponent";
import SparePartPricesComponent from "./SparePartPricesComponent";

const App = () => {
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

export default App;
