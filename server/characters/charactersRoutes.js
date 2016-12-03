const express = require('express');
const charactersController = require('./charactersController');

const router = express.Router();

router.get('/', charactersController.get);

module.exports = router;
