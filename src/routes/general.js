'use strict'

const Router = require('express')

const General = require('../controller/general')
const api = Router()

//Get user by id
api.get('/', General.sayHello)

module.exports = api