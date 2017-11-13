const express = require('express');
const carController = require('../controllers/car.controller');
const generalController = require('../controllers/general.controller');
const stateController = require('../controllers/state.controller');


const router = express.Router();
router.post('/storecar', carController.create);
router.post('/storestate', stateController.create);
router.post('/token', generalController.getToken);
router.get('/vehicleList', generalController.vehicleList);

module.exports = router;
