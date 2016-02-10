var express = require('express');
var router = express.Router();
var db = require('../utils/db');

module.exports = router;

//console.log(db);
router.get('/', function(req, res, next) {
	console.log("HERE");
	db.all("SELECT count(*) from movies", function(err, rows) {
		console.log(rows);
 });
});