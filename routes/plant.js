'use strict'

const express = require('express');

const plantController = require('../controller/plant')
const api = express.Router();

//Get user by id
api.get('/:id', plantController.getPlant);
api.post('/', plantController.createPlant);
api.get('/', plantController.getAllPlants);
api.post('/search', plantController.searchPlants);

module.exports = api;