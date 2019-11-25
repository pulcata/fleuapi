"use strict";
'user strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _fleuFirebaseAdmin = _interopRequireDefault(require("../fleu-firebase-admin.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_firebaseAdmin["default"].initializeApp({
  credential: _firebaseAdmin["default"].credential.cert(_fleuFirebaseAdmin["default"]),
  databaseURL: "https://fleu-258708.firebaseio.com"
});

var _default = _firebaseAdmin["default"];
exports["default"] = _default;