'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _general = require("../controller/general");

var api = (0, _express.Router)(); //Get user by id

api.get('/', _general.sayHello);
var _default = api;
exports["default"] = _default;