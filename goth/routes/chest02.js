var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('chest02', {
    isTattoo: true
  }); 
});

module.exports = router;