var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('tattoo', {
    isTattoo: true
  }); 
});

module.exports = router;