var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('feet01', {
    isTattoo: true
  }); 
});

module.exports = router;