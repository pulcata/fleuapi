'use strict'

const Schema = require('mongoose')

const PlantSchema = Schema.Schema({
    name: String,
    userId: String,
    owners: [String],
    createdAt: { type: Date, default: Date.now }
});

module.exports = Schema.model('Plant', PlantSchema);