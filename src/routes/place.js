'use strict'

const Router = require('express')

const Place = require('../controller/place')

const Authentication = require('../middlewares/authenticated')

const api = Router.Router();

//Get user by id
api.delete('/remove/:id', Authentication.checkIfAuthenticated, Place.deletePlace)
api.get('/:id', Authentication.checkIfAuthenticated, Place.getPlaceById)
api.get('/user/:userId/', Authentication.checkIfAuthenticated, Place.getPlacesByUserId)
api.post('/', Authentication.checkIfAuthenticated, Place.savePlace)
api.get('/', Authentication.checkIfAuthenticated, Place.getPlaces)

module.exports = api