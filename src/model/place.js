import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const PlaceSchema = Schema({
    name: String,
    userId: String,
    lat: { type: Number, default: 0.0},
    lon: { type: Number, default: 0.0},
    createdAt: { type: Date, default: Date.now }
});

export default model('Place', PlaceSchema);