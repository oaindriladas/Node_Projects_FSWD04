//console.log("hello world!");
// creating a server using express
var express = require('express');
var app = express(); //instantiate express
var p = require('./person.json');

app.get('/', function(request, response){
   // response.send('Hello World'); //http response
    response.send(p[0].name);
}).listen(2000, () => { console.log('server is running'); })

app.get('/contact', function(request, response){
    response.write("Welcome to Node!"); 
    response.end(); //close the stream
})

app.use(express.static('images'));
