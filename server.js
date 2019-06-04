var express =require('express');
var PORT = process.env.PORT || 3000;
var app =express(); //creating express app using a  function
var middleware = require('./middleware.js');
//app.use(middleware.requireAuthentication);
//Middleware requires to be written before app.get
app.use(middleware.logger);

app.get('/', function(req, res){
	res.send('Hello express!');
});

app.get('/about', function(req, res){
	res.send('Dell Emc Server for Office 365!');
});
app.use(express.static(__dirname+'/public'));
//console.log(__dirname);

app.listen(PORT,function(){
	console.log('Express server started on Port '+ PORT);
});