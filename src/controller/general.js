'use strict'

exports.sayHello = function(req, res){
    return res.status(200).send({message: 'Welcome to the Fleu API'})
}