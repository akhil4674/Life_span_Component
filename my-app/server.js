const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/calculateLifespan', (req, res) => {
  const weight = req.query.weight;
  const model = req.query.model;
  const drivingTerrain = req.query.drivingTerrain;
  const weatherConditions = req.query.weatherConditions;

  const lifespan = calculateLifespan(weight, model, drivingTerrain, weatherConditions);

  res.json({ lifespan });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
