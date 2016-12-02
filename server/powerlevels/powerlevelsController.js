const PowerLevels = require('./PowerLevelsModel');

/**
 * GET /powerlevels
 * Returns power levels.
 */
exports.get = (req, res) => {
  try {
    PowerLevels.find({}, (err, powerlevels) => {
      res.send(powerlevels);  
    });    
  } catch (e) {
    res.status(404).send({ message: e });
  }
};
