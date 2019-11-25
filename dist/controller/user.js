'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = getUserInfo;
exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.register = register;

var _user = _interopRequireDefault(require("../model/user"));

var _firebaseService = _interopRequireDefault(require("../middlewares/firebase-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getUserInfo(req, res) {
  var idToken;
  return regeneratorRuntime.async(function getUserInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          idToken = req.headers.authorization;

          _firebaseService["default"].auth().verifyIdToken(idToken).then(function (userInfo) {
            return _user["default"].findOne({
              email: userInfo.email
            }).populate('places');
          }).then(function (user) {
            res.status(200).send(user);
          })["catch"](function (err) {
            console.error(err);
            res.status(400).send({
              message: 'Bad request'
            });
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function createUser(req, res) {
  var name, username, email, password, newUser, user;
  return regeneratorRuntime.async(function createUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          name = req.body.name;
          username = req.body.username;
          email = req.body.email;
          password = req.body.password;
          newUser = new _user["default"]({
            name: name,
            username: username,
            email: email,
            password: password
          });
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(newUser.save());

        case 8:
          user = _context2.sent;
          res.status(201).send(newUser);
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](5);
          console.error(_context2.t0);
          res.status(500).send({
            message: 'Bad request'
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 12]]);
}

function getAllUsers(req, res) {
  var list;
  return regeneratorRuntime.async(function getAllUsers$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_user["default"].find());

        case 3:
          list = _context3.sent;
          res.status(200).send(list);
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.status(500).send({
            message: 'Bad request'
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function register(req, res) {
  var idToken;
  return regeneratorRuntime.async(function register$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          idToken = req.headers.authorization;

          _firebaseService["default"].auth().verifyIdToken(idToken).then(function (userInfo) {
            var newUser = new _user["default"]({
              name: userInfo.name,
              username: createRandomUsername(userInfo.name),
              email: userInfo.email,
              picture: userInfo.picture
            });
            return newUser.save();
          }).then(function (newUser) {
            res.status(201).send(newUser);
          })["catch"](function (err) {
            console.error(err);
            res.status(400).send({
              message: "Bad request"
            });
          });

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function createRandomUsername(name) {
  var shortName = name.split(' ')[0].toLowerCase();
  var number = Math.floor(Math.random() * 10000 + 1);
  return shortName + number;
}