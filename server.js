var express = require('express');
var app = express(); // 產生 Express Application 物件
var path = require('path');

var db = require('./models');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


// template engine
app.set('view engine','ejs');

// connect static file
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, function() {
  db.sequelize.sync();
});

var routes = require('./routes')(app);