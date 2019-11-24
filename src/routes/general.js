'use strict'

import { Router } from 'express';

import { sayHello } from '../controller/general';
const api = Router();

//Get user by id
api.get('/', sayHello);

export default api;