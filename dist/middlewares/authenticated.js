"use strict";
'user strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfAuthenticated = checkIfAuthenticated;
exports.getAuthToken = void 0;

var _firebaseService = _interopRequireDefault(require("../middlewares/firebase-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAuthToken = function getAuthToken(req, res, next) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    req.authToken = req.headers.authorization.split(' ')[1];
  } else {
    req.authToken = null;
  }

  next();
};

exports.getAuthToken = getAuthToken;

function checkIfAuthenticated(req, res, next) {
  var idToken, decodedToken;
  return regeneratorRuntime.async(function checkIfAuthenticated$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          idToken = req.headers.authorization;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_firebaseService["default"].auth().verifyIdToken(idToken));

        case 4:
          decodedToken = _context.sent;

          if (!decodedToken) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", next());

        case 9:
          res.status(401).send({
            message: "You are not authorized"
          });

        case 10:
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          res.status(401).send({
            message: "You are not authorized"
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
}