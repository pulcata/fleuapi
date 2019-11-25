'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlant = getPlant;
exports.createPlant = createPlant;
exports.getAllPlants = getAllPlants;
exports.searchPlants = searchPlants;

var _plant = _interopRequireWildcard(require("../model/plant"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getPlant(req, res) {
  var plantId = req.params.id;
  (0, _plant.findById)(plantId, function (err, plant) {
    if (err) {
      console.error(err);
      return res.status(500).send({
        message: 'Bad request'
      });
    }

    if (!plant) return res.status(404).send({
      message: 'Plant not found'
    });
    res.status(200).send(plant);
  });
}

function createPlant(req, res) {
  var name = req.body.name;
  var userId = req.body.userId;
  var owners = [req.body.userId];
  var newPlant = new _plant["default"]({
    name: name,
    userId: userId,
    owners: owners
  });
  newPlant.save(function (err, plant) {
    if (err) {
      console.error(err);
      return res.status(500).send({
        message: 'Bad request'
      });
    }

    return res.status(201).send();
  });
}

function getAllPlants(req, res) {
  (0, _plant.find)(function (err, list) {
    if (err) {
      console.error(err);
      return res.status(500).send({
        message: "Bad request"
      });
    }

    return res.status(200).send(list);
  });
}

function searchPlants(req, res) {
  (0, _plant.find)(req.body, function (err, list) {
    if (err) {
      console.error(err);
      return res.status(500).send({
        message: "Bad request"
      });
    }

    return res.status(200).send(list);
  });
}