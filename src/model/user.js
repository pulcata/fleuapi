'use strict'

import { Schema as _Schema, model } from 'mongoose';
import Place from '../model/place';

const Schema = _Schema;

const UserSchema = Schema({
    name: String,
    username: String,
    email: String,
    picture: { type: String, default: "" },
    places: [{ type: Schema.Types.ObjectId, ref: 'Place'}],
    createdAt: { type: Date, default: Date.now }
});

export default model('User', UserSchema);