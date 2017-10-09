var express 	= require('express');
var helper 		= require('./helpers.js')
var bodyParser	= require('body-parser');

var app = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended:false} ) );

// Logging Status 
app.use( function( request, response, next){

	console.log(`Request of method "${request.method}" is generated for ${request.url} with prameters ${JSON.stringify(request.body)} `);
	next();
});

// Using Static files
app.use( express.static('./public') );

// Generating Outcome
app.post( '/generate-outcome', function (request, response){

	
	var returnData = helper.getSlotsArray(5, 0, 20);

	returnData.bonus = helper.getRandomBonus(23, 1);

	response.writeHead(200, 'application/json');
	response.end( JSON.stringify( returnData ) );

});


app.listen(8888);

module.exports = app;