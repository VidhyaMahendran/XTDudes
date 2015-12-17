var express = require('express');
var router = express.Router();

/* GET developers listing. */
router.get('/', function(req, res, next) {
  res.render('developers', { title: 'XT Dudes' });
});

module.exports = router;
