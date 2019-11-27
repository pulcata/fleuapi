'use strict'

const Place = require('../db/model/place')
const User = require('../db/model/user')
const admin = require('../middlewares/firebase-service')

exports.getPlaces = async function(req, res) {
    
    try {
        const list = await Place.find()
        res.status(200).send(list)
    }
    catch (err) {
        console.error(err);
        res.status(400).send({ message: 'Bad request' })
    }
}

exports.savePlace = async function(req, res) {

    const token = req.headers.authorization

    try{
        const userInfo = await admin.auth().verifyIdToken(token)

        const user = await User.findOne({email : userInfo.email}).populate('places')
        const newPlace = new Place({ nickname : req.body.nickname, lat: req.body.lat, lon: req.body.lon })
        return newPlace.save().then((place) => {
            user.places.push(place)
            return user.save()
        }).then((newUser) =>{ 
            res.status(201).send(newUser)
        }).catch((err) =>{
            console.error(err)
            res.status(400).send({message: 'Error saving the place'})
        })
    }catch(err){
        console.error(err)
        res.status(400).send({message: 'Error saving the place'})
    }   
}

exports.getPlaceByUserId = async function(req,res){

    var userId = req.params.userId;

    return Place.findOne({userId: userId}).then((user) => {
        if(!user) res.status(404).send({message: 'User not found'});
        res.status(200).send(user);
    }).catch((err) => {
        console.error(err)
        res.status(400).send({message: 'Bad request'});
    })

}

exports.getPlaceById = function getPlaceById(req,res){

    var id = req.params.id;

    return Plant.findOne({_id: id}).then((user) => {
        if(!user) res.status(404).send({message: 'User not found'});
        res.status(200).send(user);
    }).catch((err) => {
        console.error(err)
        res.status(400).send({message: 'Bad request'});
    })

}