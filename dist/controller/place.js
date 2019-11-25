'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlaces = getPlaces;
exports.savePlace = savePlace;
exports.getPlaceByUserId = getPlaceByUserId;
exports.getPlaceById = getPlaceById;

var _place = _interopRequireWildcard(require("../model/place"));

var _user = _interopRequireDefault(require("../model/user"));

var _firebaseService = _interopRequireDefault(require("../middlewares/firebase-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getPlaces(req, res) {
  var list;
  return regeneratorRuntime.async(function getPlaces$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _place.find)());

        case 3:
          list = _context.sent;
          res.status(200).send(list);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(400).send({
            message: 'Bad request'
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function savePlace(req, res) {
  var token, userInfo, user, newPlace;
  return regeneratorRuntime.async(function savePlace$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          token = req.headers.authorization;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_firebaseService["default"].auth().verifyIdToken(token));

        case 4:
          userInfo = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            email: userInfo.email
          }).populate('places'));

        case 7:
          user = _context2.sent;
          newPlace = new _place["default"]({
            nickname: req.body.nickname,
            lat: req.body.lat,
            lon: req.body.lon
          });
          return _context2.abrupt("return", newPlace.save().then(function (place) {
            user.places.push(place);
            return user.save();
          }).then(function (newUser) {
            res.status(201).send(newUser);
          })["catch"](function (err) {
            console.error(err);
            res.status(400).send({
              message: 'Error saving the place'
            });
          }));

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0);
          res.status(400).send({
            message: 'Error saving the place'
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 12]]);
}

function getPlaceByUserId(req, res) {
  var userId = req.params.userId;
  return (0, _place.findOne)({
    userId: userId
  }).then(function (user) {
    if (!user) res.status(404).send({
      message: 'User not found'
    });
    res.status(200).send(user);
  })["catch"](function (err) {
    console.error(err);
    res.status(400).send({
      message: 'Bad request'
    });
  });
}

function getPlaceById(req, res) {
  var id = req.params.id;
  return (0, _place.findOne)({
    _id: id
  }).then(function (user) {
    if (!user) res.status(404).send({
      message: 'User not found'
    });
    res.status(200).send(user);
  })["catch"](function (err) {
    console.error(err);
    res.status(400).send({
      message: 'Bad request'
    });
  });
}