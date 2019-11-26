'use strict'

const app = require('../app')

const mongoose =  require('mongoose')

const port = process.env.PORT || 3800

mongoose.Promise = global.Promise;
console.log('Connecting...')

mongoose.connect('mongodb://savirdev:grtXFcc2swMr2Q6h@ds121483.mlab.com:21483/reminder', {useNewUrlParser: true, useUnifiedTopology: true} )
    .then(() => {
        console.log('Connected to database')
        app.listen(port, () => {
            console.log('Server running...')
        })
    })
    .catch(err => console.error(err));