'use strict'

import User, { findOne, find } from '../model/user';

export function getUser(req, res){
    var userId = req.params.id;

    return findOne({_id: userId}).then((user) => {
        if(!user) res.status(404).send({message: 'User not found'});
        res.status(200).send(user);
    }).catch((err) => {
        console.error(err)
        res.status(500).send({message: 'Bad request'});
    })
}

export function createUser(req, res){
    var name = req.body.name
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password

    var newUser = new User({ name: name, username: username, email: email, password: password });

    return newUser.save().then((user) => {
        res.status(201).send()
    }).catch((err) => {
        console.error(err)
        res.status(500).send({message: 'Bad request'})
    })
}

export function getAllUsers(req, res){

    return find().then((list) => {
        res.status(200).send(list);
    }).catch((err) => {
        console.error(err);
        res.status(500).send({message: 'Bad request'});
    })
}   