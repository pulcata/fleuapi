'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _place = require("../controller/place");

var _authenticated = require("../middlewares/authenticated");

var api = (0, _express.Router)(); //Get user by id

api.get('/:id', _authenticated.checkIfAuthenticated, _place.getPlaceById);
api.get('/user/:userId/', _authenticated.checkIfAuthenticated, _place.getPlaceByUserId);
api.post('/', _authenticated.checkIfAuthenticated, _place.savePlace);
api.get('/', _authenticated.checkIfAuthenticated, _place.getPlaces);
var _default = api;
exports["default"] = _default;