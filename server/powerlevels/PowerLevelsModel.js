const mongoose = require('mongoose');

const powerlevelsSchema = new mongoose.Schema({
  Name: String,
  Profile_Link: String,
  Image_Link: String,
  Intelligence: String,
  Strength: String,
  Speed: String,
  Durability: String,
  Energy_Projection: String,
  Fighting_Ability: String
});

const PowerLevels = mongoose.model('PowerLevels', powerlevelsSchema);

module.exports = PowerLevels;
