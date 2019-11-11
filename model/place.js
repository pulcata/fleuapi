const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const PlaceSchema = Schema({
    name: String,
    userId: String,
    lat: { type: Number, default: 0.0},
    lon: { type: Number, default: 0.0},
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Place', PlaceSchema);