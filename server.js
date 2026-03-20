require('dotenv').config();
const express = require('express');
var app = express();

app.use(express.json());

app.use('/reservation',require('./Controllers/ReservationController'));

app.use('/user',require('./Controllers/UserController'));

app.use('/restaurant',require('./Controllers/RestaurantController'));


app.listen(process.env.port);