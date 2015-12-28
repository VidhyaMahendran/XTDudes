var mongoose = require('mongoose');
var XTEngineer = mongoose.model('XTEngineer');

var express = require('express');
var router = express.Router();

/* GET developers listing. */
router.get('/', function(req, res, next) {
    XTEngineer.find().exec(function (error, results, count) {
		if (results.length === 0) {
			console.log("No Data");
			XTEngineer.create({username:"tea", emailid:"tea@email.com", technology: "HTML5, CSS3, Node JS, Angular JS, Backbone JS"});
			XTEngineer.create({username:"Brush", emailid:"brush@email.com", technology: "HTML5, CSS3, Node JS, Angular JS, Backbone JS"});
			XTEngineer.create({username:"Bread", emailid:"bread@email.com", technology: "HTML5, CSS3, Node JS, Angular JS, Backbone JS"});
			XTEngineer.create({username:"breakfast", emailid:"breakfast@email.com", technology: "HTML5, CSS3, Node JS, Angular JS, Backbone JS"});
		}
		else {
			console.log("Got some data");
			res.render( 'developers', {
		      title : 'Listing XT Dudes',
		      XTEngineers : results
		    });
		}
	});
});

module.exports = router;
