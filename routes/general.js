'use strict'

const express = require('express');

const generalController = require('../controller/general')
const api = express.Router();

//Get user by id
api.get('/', generalController.sayHello);

module.exports = api;