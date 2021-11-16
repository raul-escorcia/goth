var express = require('express');
var router = express.Router();
var panelModel = require('../models/panelModel');


router.get('/', async function(req, res, next) {
//  var panel = await panelModel.getCanciones();
  var panel
  if (req.query.q === undefined){
    panel = await panelModel.getCanciones();
  } else {
    panel = await panelModel.buscarCancion(req.query.q);
  }
  res.render('musica', {
    isMusica: true,
    panel,
    is_search: req.query.q != undefined,
    q: req.query.q
  }); 
});

module.exports = router;