const express = require('express');
const mongoose = require('mongoose');

const app = express();




app.use(express.json());


app.post('/users', (request, response) => {
    console.log(request.body);
    
    return response.json({message: "Hello World"});
});


app.listen(3333);