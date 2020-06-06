const express = require('express');
const viewController = require('../controllers/viewController');


const route = express.Router();

route.route('/').get(viewController.getMainPage)

module.exports = route;