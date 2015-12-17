var express = require('express');
var router = express.Router();

/* Search XT Developers by name and Technology. */
router.get('/', function(req, res, next) {
  res.render('search', { title: 'Search XT Dudes by Name and Technology' });
});

module.exports = router;
