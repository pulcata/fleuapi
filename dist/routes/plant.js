'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _plant = require("../controller/plant");

var _authenticated = require("../middlewares/authenticated");

var api = (0, _express.Router)();
api.get('/:id', _plant.getPlant);
api.post('/', _authenticated.checkIfAuthenticated, _plant.createPlant);
api.get('/', _plant.getAllPlants);
api.post('/search', _plant.searchPlants);
var _default = api;
exports["default"] = _default;