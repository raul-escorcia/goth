var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('literatura', {
    isLiteratura: true
  });
});

module.exports = router;
