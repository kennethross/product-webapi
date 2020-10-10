var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

var setupController = require('./controllers/setupControllers');
var apiController = require('./controllers/apiControllers');

// Setting the PORT Environment
var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

// TEMPlATE
app.set('view engine', 'ejs');

// Mongoose connecting
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true });

setupController(app);
apiController(app);
app.listen(port); 