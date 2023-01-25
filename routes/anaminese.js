const express = require('express');
const Route = express.Router();
const anamineseController = require('../controller/anamineseController');

Route.get('/formulario',anamineseController.formulario)
Route.post('/incluir',anamineseController.incluir)
Route.get('/index',anamineseController.index)
Route.get('/visualizar/:id',anamineseController.index)
module.exports = Route;