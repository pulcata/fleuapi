'use strict'

import Place, { find, findOne } from '../model/place'
import User from '../model/user'
import admin from '../middlewares/firebase-service'

export async function getPlaces(req, res) {
    
    try {
        const list = await find();
        res.status(200).send(list);
    }
    catch (err) {
        console.error(err);
        res.status(400).send({ message: 'Bad request' });
    }
}

export async function savePlace(req, res) {

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

export function getPlaceByUserId(req,res){

    var userId = req.params.userId;

    return findOne({userId: userId}).then((user) => {
        if(!user) res.status(404).send({message: 'User not found'});
        res.status(200).send(user);
    }).catch((err) => {
        console.error(err)
        res.status(400).send({message: 'Bad request'});
    })

}

export function getPlaceById(req,res){

    var id = req.params.id;

    return findOne({_id: id}).then((user) => {
        if(!user) res.status(404).send({message: 'User not found'});
        res.status(200).send(user);
    }).catch((err) => {
        console.error(err)
        res.status(400).send({message: 'Bad request'});
    })

}