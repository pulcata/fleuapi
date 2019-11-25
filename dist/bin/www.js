'use strict';

var _app = _interopRequireDefault(require("../app"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 3800;
_mongoose["default"].Promise = global.Promise;
console.log('Connecting...');

_mongoose["default"].connect('mongodb://savirdev:grtXFcc2swMr2Q6h@ds121483.mlab.com:21483/reminder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('Connected to database');

  _app["default"].listen(port, function () {
    console.log('Server running...');
  });
})["catch"](function (err) {
  return console.error(err);
});