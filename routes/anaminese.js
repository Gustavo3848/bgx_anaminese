const express = require('express');
const Route = express.Router();
const anamineseController = require('../controller/anamineseController');
Route.get('/formulario',anamineseController.formulario)
Route.post('/incluir',anamineseController.incluir)
module.exports = Route;