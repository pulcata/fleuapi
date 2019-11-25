'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Schema = _mongoose.Schema;
var PlantSchema = Schema({
  name: String,
  userId: String,
  owners: [String],
  createdAt: {
    type: Date,
    "default": Date.now
  }
});

var _default = (0, _mongoose.model)('Plant', PlantSchema);

exports["default"] = _default;