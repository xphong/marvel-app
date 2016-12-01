const PowerLevels = require('./PowerLevelsModel');

/**
 * GET /powerlevels
 * Returns power levels.
 */
exports.get = (req, res) => {
  PowerLevels.find({}, (err, powerlevels) => {
    res.send(powerlevels);  
  });
};
