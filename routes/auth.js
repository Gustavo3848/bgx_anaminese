const express = require('express');
const Route = express.Router();
const authController = require('../controller/authController');

Route.post('/auth',authController.auth)
module.exports = Route;