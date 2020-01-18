const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin-diego:15051981Di@cluster0-gphaq.gcp.mongodb.net/findevs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(express.json());
app.use(routes);




app.listen(3333);