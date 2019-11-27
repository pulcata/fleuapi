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

exports.getPlacesByUserId = async function(req,res){

    const token = req.headers.authorization

    try{
        const userInfo = await admin.auth().verifyIdToken(token)
        User.find({email : userInfo.email }).populate({path: 'places', match: {active : true}}).then((user) =>{
            res.status(200).send(user.places)
        }).catch((err) =>{
            console.error(err)
            res.status(400).send({message: 'Bad request'});
        })
    }catch(err){
        console.error(err)
        res.status(400).send({message: 'Error getting the places'})
    }   
}

exports.getPlaceById = function(req,res){

    var id = req.params.id;

    return Place.findOne({_id: id}).then((place) => {
        if(!place) res.status(404).send({message: 'Place not found'});
        res.status(200).send(place);
    }).catch((err) => {
        console.error(err)
        res.status(400).send({message: 'Bad request'});
    })

}

exports.deletePlace = function(req, res){
    var id = req.params.id;

    try{
        return Place.findOne({_id: id}).then((place) => {
            if(!place) res.status(404).send({message: 'Place not found'});

            place.active = false

            return place.save()
        }).then((place) =>{
            res.status(200).send()
        }).catch((err) => {
            console.error(err)
            res.status(400).send({message: 'Bad request'});
        })
    }catch{
        console.error(err)
        res.status(400).send({message: 'Error deleting the place'})
    }
}