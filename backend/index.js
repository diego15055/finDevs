const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        nome: "Diego",
        sobrenome: "Santos",
        idade: 15
    });
});


app.listen(3333);