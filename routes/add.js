var express = require('express');
var router = express.Router();

/* GET developers listing. */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Adding new XT Dudes' });
});

/* GET developers listing. */
router.post('/', function(req, res, next) {
  res.render('add', { title: 'Adding new XT Dudes' });
});

module.exports = router;
