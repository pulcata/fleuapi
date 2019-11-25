'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _user = _interopRequireDefault(require("./routes/user"));

var _general = _interopRequireDefault(require("./routes/general"));

var _plant = _interopRequireDefault(require("./routes/plant"));

var _place = _interopRequireDefault(require("./routes/place"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _bodyParser.urlencoded)({
  extended: false
}));
app.use((0, _bodyParser.json)());
app.use('/api', _general["default"]);
app.use('/api/user', _user["default"]);
app.use('/api/plant', _plant["default"]);
app.use('/api/place', _place["default"]);
var _default = app;
exports["default"] = _default;