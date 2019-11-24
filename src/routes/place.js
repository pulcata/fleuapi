'use strict'

import { Router } from 'express';

import { getPlaceById, getPlaceByUserId, savePlace, getPlaces } from '../controller/place';

import { checkIfAuthenticated } from '../middlewares/authenticated'

const api = Router();

//Get user by id
api.get('/:id', checkIfAuthenticated, getPlaceById)
api.get('/user/:userId/', checkIfAuthenticated, getPlaceByUserId)
api.post('/', checkIfAuthenticated, savePlace);
api.get('/', checkIfAuthenticated, getPlaces);

export default api;