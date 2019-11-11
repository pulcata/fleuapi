'use strict'

const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const PlantSchema = Schema({
    name: String,
    userId: String,
    owners: [String],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Plant', PlantSchema);