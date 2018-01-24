// We will structure here a series of possible responses
// depending on the URL requested. As we travel through
// the pipeline we will perform needed actions using middleware
// functions. If a response is valid we will display the
// correct view and if not we will handle errors.
 
// This is our projects entry point. If you start the
// server by typing node expresstut.js and then open the
// browser at localhost:3000 you'll get a 404 error if
// you haven't defined any routes
// Import the express module
var express = require('express');
 
var app = express();

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', handlebars);


//more imports
app.set('port', process.env.PORT || 3000);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
 
  // Point at the home.handlebars view
  res.render('home');
});