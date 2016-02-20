'use strict';

var express = require('express');

var app = express();

app.get('/', function(request, response){
	response.send("<h1>I Love Treehouse!</h1>");
});

app.listen(3000);
