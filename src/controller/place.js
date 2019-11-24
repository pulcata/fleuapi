'use strict'

import Place, { find, findOne } from '../model/place';

export async function getPlaces(req, res) {
    
    try {
        const list = await find();
        res.status(200).send(list);
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Bad request' });
    }
}

export function savePlace(req, res) {

    const newPlace = Place({ name: req.body.name, userId: req.body.userId, lat: req.body.lat, lon: req.body.lon })
    return newPlace.save().then((user) => {
        res.status(201).send()
    }).catch((err) => {
        console.error(err)
        res.status(500).send({message: 'Bad request'})
    })
}

export function getPlaceByUserId(req,res){

    var userId = req.params.userId;

    return findOne({userId: userId}).then((user) => {
        if(!user) res.status(404).send({message: 'User not found'});
        res.status(200).send(user);
    }).catch((err) => {
        console.error(err)
        res.status(500).send({message: 'Bad request'});
    })

}

export function getPlaceById(req,res){

    var id = req.params.id;

    return findOne({_id: id}).then((user) => {
        if(!user) res.status(404).send({message: 'User not found'});
        res.status(200).send(user);
    }).catch((err) => {
        console.error(err)
        res.status(500).send({message: 'Bad request'});
    })

}