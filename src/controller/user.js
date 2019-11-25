'use strict'

import User from '../model/user';
import admin from '../middlewares/firebase-service'

export async function getUserInfo(req, res){
    const idToken = req.headers.authorization

    admin.auth().verifyIdToken(idToken).then((userInfo) => {
        return User.findOne({ email: userInfo.email} ).populate('places')    
    }).then((user) => {
        res.status(200).send(user)
    })
    .catch((err) =>{
        console.error(err)
        res.status(400).send({ message: 'Bad request' });
    })
}

export async function createUser(req, res){
    var name = req.body.name
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password

    var newUser = new User({ name: name, username: username, email: email, password: password });

    try {
        const user = await newUser.save();
        res.status(201).send(newUser);
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Bad request' });
    }
}

export async function getAllUsers(req, res){

    try {
        const list = await User.find();
        res.status(200).send(list);
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Bad request' });
    }
}

export async function register(req, res){
    const idToken = req.headers.authorization

    admin.auth().verifyIdToken(idToken).then((userInfo)=>{
        var newUser = new User({ name: userInfo.name, username: createRandomUsername(userInfo.name), email: userInfo.email, picture: userInfo.picture })
        return newUser.save()
    }).then((newUser) =>{
        res.status(201).send(newUser)
    }).catch((err) =>{
        console.error(err)
        res.status(400).send({ message: "Bad request"})
    })

}

function createRandomUsername(name){
    var shortName = name.split(' ')[0].toLowerCase()
    var number = Math.floor((Math.random() * 10000) + 1)

    return shortName + number
}