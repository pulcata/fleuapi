'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../controller/user");

var _authenticated = require("../middlewares/authenticated");

var api = (0, _express.Router)();
api.get('/info', _authenticated.checkIfAuthenticated, _user.getUserInfo);
api.post('/', _authenticated.checkIfAuthenticated, _user.createUser);
api.get('/', _authenticated.checkIfAuthenticated, _user.getAllUsers);
api.get('/register', _authenticated.checkIfAuthenticated, _user.register);
var _default = api;
exports["default"] = _default;