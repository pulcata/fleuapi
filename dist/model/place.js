"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Schema = _mongoose.Schema;
var PlaceSchema = Schema({
  nickname: String,
  lat: {
    type: Number,
    "default": 0.0
  },
  lon: {
    type: Number,
    "default": 0.0
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});

var _default = (0, _mongoose.model)('Place', PlaceSchema);

exports["default"] = _default;