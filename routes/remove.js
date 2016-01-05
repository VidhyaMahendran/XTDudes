var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var XTEngineer = mongoose.model('xtengineer');

router.get('/', function(req, res) {
	console.log("GET Request received");
	console.log(req.xt_id);
	res.render('remove', {
		title: 'XT Dude - Removed'
	});
});

router.post('/', function(req, res) {
	console.log("POST Request received");
	XTEngineer.findByIdAndRemove(req.body.xt_id, function(err, xtengineer) {
		console.log("Deleted the below document");
		console.log(xtengineer);
 		if (err) {
			throw err;
		} else {
		  res.redirect('/remove');
		}
	});
});

module.exports = router;
