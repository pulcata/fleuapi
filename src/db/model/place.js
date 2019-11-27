'use stricti'

const Schema = require('mongoose')

const PlaceSchema = Schema.Schema({
    nickname: String,
    lat: { type: Number, default: 0.0},
    lon: { type: Number, default: 0.0},
    plants: [{ type: Schema.Types.ObjectId, ref: 'Plant'}],
    createdAt: { type: Date, default: Date.now }
});

module.exports = Schema.model('Place', PlaceSchema);