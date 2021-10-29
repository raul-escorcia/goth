var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('maquillaje', {
    isLook: true
  });
});

module.exports = router;