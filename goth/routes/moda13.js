var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('moda13', {
    isLook: true
  });
});

module.exports = router;