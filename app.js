var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

var apiController = require('./controllers/apiControllers');
var authController = require('./controllers/authController');

// Setting the PORT Environment
var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

// TEMPlATE
app.set('view engine', 'ejs');

// Mongoose connecting
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true });

authController(app);
apiController(app);

app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});

app.listen(port); 