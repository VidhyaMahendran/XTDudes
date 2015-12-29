var mongoose = require('mongoose');
var XTEngineer = mongoose.model('xtengineer');

var express = require('express');
var router = express.Router();

/* GET developers listing. */
router.get('/', function(req, res, next) {
    XTEngineer.find().exec(function (error, results, count) {
		if (results.length === 0) {
			console.log("No Data");
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
