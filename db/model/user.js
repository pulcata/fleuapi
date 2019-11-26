'use strict'

const Schema = require('mongoose')

const UserSchema = Schema.Schema({
    name: String,
    username: String,
    email: String,
    picture: { type: String, default: "" },
    places: [{ type: Schema.Types.ObjectId, ref: 'Place'}],
    createdAt: { type: Date, default: Date.now }
})

module.exports = Schema.model('User', UserSchema)