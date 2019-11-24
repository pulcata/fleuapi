'use strict'

import { Router } from 'express';

import { getUser, createUser, getAllUsers } from '../controller/user';
const api = Router();

import { checkIfAuthenticated } from '../middlewares/authenticated'

//Get user by id
api.get('/:id', checkIfAuthenticated, getUser);
api.post('/', checkIfAuthenticated, createUser);
api.get('/', checkIfAuthenticated, getAllUsers);

export default api;