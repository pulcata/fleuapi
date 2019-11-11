'use strict'

const express = require('express');

const userController = require('../controller/user')
const api = express.Router();
const md_auth = require('../middlewares/authenticated');

//Get user by id
api.get('/:id', userController.getUser);
api.post('/', userController.createUser);
api.get('/', userController.getAllUsers);

module.exports = api;