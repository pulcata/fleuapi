'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHello = sayHello;

function sayHello(req, res) {
  return res.status(200).send({
    message: 'Welcome to the Reminder API'
  });
}