var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var XTEngineer = mongoose.model('XTEngineer');

/* Show Add Form */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Adding new XT Dudes' });
});

/* Insert Records in to Mongo DB */
router.post('/', function(req, res, next) {
	new XTEngineer({
		username: req.body.xt_name,
		emailid: req.body.email_id,
		technology: req.body.technology
	}).save( function(err, todo, count){
		res.redirect( '/developers' );
	});
});

module.exports = router;
