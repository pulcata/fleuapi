'use strict'

const Router = require('express')

const Place = require('../controller/place')

const Authentication = require('../middlewares/authenticated')

const api = Router.Router();

//Get user by id
api.get('/:id', Place.getPlaceById)
api.get('/user/:userId/', Place.getPlaceByUserId)
api.post('/', Place.savePlace)
api.get('/', Place.getPlaces)

module.exports = api