var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('feet03', {
    isTattoo: true
  }); 
});

module.exports = router;