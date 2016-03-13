// set up ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var port     = process.env.PORT || 8080;  // set our port
var config= require('./config/config');
start(config(app));
function start(config){
// start app ===============================================		
	app.listen(port);	
	console.log('Magic happens on port ' + port); 				// shoutout to the user
}		
exports = module.exports = app; 						// expose app



