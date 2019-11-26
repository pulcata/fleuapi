'use strict'

const Router = require('express')

const Plant = require('../controller/plant')
const api = Router();

const Middleware = require('../middlewares/authenticated')

//Get user by id
api.get('/:id', Plant.getPlant)
api.post('/', Middleware.checkIfAuthenticated, Plant.createPlant)
api.get('/', Middleware.checkIfAuthenticated, Plant.getAllPlants)
api.post('/search', Plant.searchPlants)

module.exports = api