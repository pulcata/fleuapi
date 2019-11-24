'use strict'

export function sayHello(req, res){
    return res.status(200).send({message: 'Welcome to the Reminder API'});
}