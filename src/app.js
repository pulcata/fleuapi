'use strict'

import express from 'express';
import { urlencoded, json } from 'body-parser';

var app = express();
app.use(urlencoded( { extended : false } ));
app.use(json());

import userRoutes from './routes/user';
import generalRoutes from './routes/general';
import plantRoutes from './routes/plant';
import placeRoutes from './routes/place';

app.use('/api', generalRoutes);
app.use('/api/user', userRoutes);
app.use('/api/plant', plantRoutes);
app.use('/api/place', placeRoutes)

export default app;