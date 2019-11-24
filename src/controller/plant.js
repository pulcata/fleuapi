'use strict'

import Plant, { findById, find } from '../model/plant';

export function getPlant(req, res){
    var plantId = req.params.id;

    findById(plantId, (err, plant) => {
        if(err){
            console.error(err);
            return res.status(500).send({message: 'Bad request'});
        }
        if(!plant) return res.status(404).send({message: 'Plant not found'});

        res.status(200).send(plant);
        
    });
}

export function createPlant(req, res){
    var name = req.body.name;
    var userId = req.body.userId; 
    var owners = [req.body.userId]

    var newPlant = new Plant({ name: name, userId: userId, owners: owners });

    newPlant.save((err, plant) =>{
        if(err){
            console.error(err);
            return res.status(500).send({message: 'Bad request'});
        }

        return res.status(201).send()
    })
}

export function getAllPlants(req, res){

    find((err, list) => {
        if(err){
            console.error(err);
            return res.status(500).send({message: "Bad request"});
        }

        return res.status(200).send(list);
    });
}

export function searchPlants(req, res){

    find(req.body, (err, list) => {
        if(err){
            console.error(err)
            return res.status(500).send({message: "Bad request"});
        }

        return res.status(200).send(list);
    })
}