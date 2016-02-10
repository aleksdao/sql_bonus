var express = require("express");
var path = require('path');

var swig = require("swig");
swig.setDefaults({cache: false});

var app = express();

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use('/year', require('./routes/year'));

app.get('/', function(req, res, next) {
	res.render('index', { title: 'Jumpin John\'s Movies Database' });
});

app.listen(process.env.PORT || 8080);





// db.all("SELECT * from movies", function(err, rows) {
// 	console.log(rows);
// });