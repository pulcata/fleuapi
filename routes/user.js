'use strict'

const Router = require('express')

const User = require('../controller/user')
const api = Router();

const Middleware = require('../middlewares/authenticated')

//Get user by id
api.get('/info', Middleware.checkIfAuthenticated, User.getUserInfo)
api.post('/', Middleware.checkIfAuthenticated, User.createUser)
api.get('/', Middleware.checkIfAuthenticated, User.getAllUsers)
api.get('/register', Middleware.checkIfAuthenticated, User.register)

module.exports = api