var express = require('express');
var router = express.Router();
var panelModel = require('../models/panelModel');


router.get('/', async function(req, res, next) {
  var panel = await panelModel.getCanciones();
  res.render('musica', {
    isMusica: true,
    panel
  }); 
});

module.exports = router;