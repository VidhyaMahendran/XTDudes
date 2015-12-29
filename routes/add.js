var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var XTEngineer = mongoose.model('xtengineer');

/* Show Add Form */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Adding new XT Dudes' });
});

/* Insert Records in to Mongo DB */
router.post('/', function(req, res, next) {
	new XTEngineer({
		fullname: req.body.fullname,
		empid: req.body.empid,
		emailid: req.body.emailid,
		role: req.body.role,
		manager: req.body.manager,
		doj: req.body.doj,
		technology: req.body.technology
	}).save( function(err, todo, count){
		res.redirect( '/developers' );
	});
});

module.exports = router;
