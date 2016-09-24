var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Medeina Lumber' });
});

/* GET product page */
router.get('/', function(req, res) {
  res.render('product', { title: 'Product | Medeina Lumber' });
});


module.exports = router;

