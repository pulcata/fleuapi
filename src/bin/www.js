'use strict'

import app from '../app'

import mongoose from'mongoose'

const port = 3800;

mongoose.Promise = global.Promise;
console.log('Connecting...')

mongoose.connect('mongodb://savirdev:grtXFcc2swMr2Q6h@ds121483.mlab.com:21483/reminder', {useNewUrlParser: true, useUnifiedTopology: true} )
    .then(() => {
        console.log('Connected to database')
        app.listen(port, () => {
            console.log('Server running on http://localhost:3800/api/')
        })
    })
    .catch(err => console.error(err));