var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('mongoose');

var app = express();
app.use(bodyParser.json());

app.post('/projects', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log('Started on port 3000');
})