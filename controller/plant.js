'use strict'

const Plant = require('../model/plant');

exports.getPlant = function(req, res){
    var plantId = req.params.id;

    Plant.findById(plantId, (err, plant) => {
        if(err){
            console.error(err);
            return res.status(500).send({message: 'Bad request'});
        }
        if(!plant) return res.status(404).send({message: 'Plant not found'});

        res.status(200).send(plant);
        
    });
}

exports.createPlant = function(req, res){
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

exports.getAllPlants = function(req, res){

    Plant.find((err, list) => {
        if(err){
            console.error(err);
            return res.status(500).send({message: "Bad request"});
        }

        return res.status(200).send(list);
    });
}

exports.searchPlants = function(req, res){

    Plant.find(req.body, (err, list) => {
        if(err){
            console.error(err)
            return res.status(500).send({message: "Bad request"});
        }

        return res.status(200).send(list);
    })
}