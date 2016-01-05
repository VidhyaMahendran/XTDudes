var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'XT Dudes - Home page',
		content: 'Welcome to the XT Dudes Home page'
	});
});

module.exports = router;
