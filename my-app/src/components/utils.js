// utils.js
const calculateLifespan = (weight, model, drivingTerrain, weatherConditions) => {
  // Your logic to calculate lifespan here
  const lifespan = {
    oilFilter: calculateOilFilterLifespan(weight, model, drivingTerrain, weatherConditions),
    brakePads: calculateBrakePadsLifespan(weight, model, drivingTerrain, weatherConditions),
    tires: calculateTiresLifespan(weight, model, drivingTerrain, weatherConditions),
    // Add more calculations as needed
  };

  return lifespan;
};

const calculateOilFilterLifespan = (weight, model, drivingTerrain, weatherConditions) => {
  // Your logic for oil filter lifespan calculation
  const calculatedValue = /* Your calculation logic here */ 10000; // Replace 10000 with the actual calculated value

  return calculatedValue;
};

const calculateBrakePadsLifespan = (weight, model, drivingTerrain, weatherConditions) => {
  // Your logic for brake pads lifespan calculation
  const calculatedValue = /* Your calculation logic here */ 50000; // Replace 50000 with the actual calculated value

  return calculatedValue;
};

const calculateTiresLifespan = (weight, model, drivingTerrain, weatherConditions) => {
  // Your logic for tires lifespan calculation
  const calculatedValue = /* Your calculation logic here */ 60000; // Replace 60000 with the actual calculated value

  return calculatedValue;
};

export default calculateLifespan;
