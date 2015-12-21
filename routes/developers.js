var express = require('express');
var router = express.Router();

/* GET developers listing. */
router.get('/', function(req, res, next) {
  res.render('developers', { title: 'Listing XT Dudes' });
});

module.exports = router;
