'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _place = _interopRequireDefault(require("../model/place"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose.Schema;
var UserSchema = Schema({
  name: String,
  username: String,
  email: String,
  picture: {
    type: String,
    "default": ""
  },
  places: [{
    type: Schema.Types.ObjectId,
    ref: 'Place'
  }],
  createdAt: {
    type: Date,
    "default": Date.now
  }
});

var _default = (0, _mongoose.model)('User', UserSchema);

exports["default"] = _default;