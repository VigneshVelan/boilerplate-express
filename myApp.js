var express = require('express');
var app = express();
require('dotenv').config();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
 res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res){
    console.log(process.env.MESSAGE_STYLE)
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        res.json({"message": "Hello json".toUpperCase()});
    }else{
        res.json({"message": "Hello json"});
    }

})


































 module.exports = app;
