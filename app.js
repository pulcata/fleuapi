'use strict'

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded( { extended : false } ));
app.use(bodyParser.json());

const userRoutes = require('./routes/user');
const generalRoutes = require('./routes/general')
const plantRoutes = require('./routes/plant')

app.use('/api', generalRoutes);
app.use('/api/user', userRoutes);
app.use('/api/plant', plantRoutes);

module.exports = app;