'use stricti'

const Schema = require('mongoose')

const PlaceSchema = Schema.Schema({
    nickname: String,
    lat: { type: Number, default: 0.0},
    lon: { type: Number, default: 0.0},
    createdAt: { type: Date, default: Date.now }
});

module.exports = Schema.model('Place', PlaceSchema);