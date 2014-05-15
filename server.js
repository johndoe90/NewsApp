'use strict';

var express = require('express');
var ejs = require('ejs');
var path = require('path');
var favicon = require('serve-favicon');
var serveStatic = require('serve-static');
var app = express();

app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(serveStatic(path.join(__dirname, 'dist'), { maxAge: 86400000 }));
app.set('views', path.join(__dirname, 'dist'));

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.get('/', function(req, res) { res.send('running'); })

app.listen(3000, function(){
	console.log('Server is listening on port 3000');
});