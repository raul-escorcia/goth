var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('maquillaje02', {
    isLook: true
  });
});

module.exports = router;