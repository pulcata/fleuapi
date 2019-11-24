'use strict'

import { Router } from 'express';

import { getPlant, createPlant, getAllPlants, searchPlants } from '../controller/plant';
const api = Router();

import { checkIfAuthenticated } from '../middlewares/authenticated'

//Get user by id
api.get('/:id', getPlant);
api.post('/', checkIfAuthenticated, createPlant);
api.get('/', getAllPlants);
api.post('/search', searchPlants);

export default api;