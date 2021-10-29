var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('moda06', {
    isLook: true
  });
});

module.exports = router;