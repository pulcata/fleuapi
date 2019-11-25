'use strict'

import { Router } from 'express';

import { getUserInfo, createUser, getAllUsers, register } from '../controller/user';
const api = Router();

import { checkIfAuthenticated } from '../middlewares/authenticated'

//Get user by id
api.get('/info', checkIfAuthenticated, getUserInfo);
api.post('/', checkIfAuthenticated, createUser);
api.get('/', checkIfAuthenticated, getAllUsers);
api.get('/register', checkIfAuthenticated, register)

export default api;