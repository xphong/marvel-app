const express = require('express');
const powerlevelsController = require('./powerlevelsController');

const router = express.Router();

router.get('/', powerlevelsController.get);

module.exports = router;
