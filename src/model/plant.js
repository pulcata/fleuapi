'use strict'

import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const PlantSchema = Schema({
    name: String,
    userId: String,
    owners: [String],
    createdAt: { type: Date, default: Date.now }
});

export default model('Plant', PlantSchema);