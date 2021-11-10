var express = require('express');
var router = express.Router();
var panelModel = require('../../models/panelModel');

router.get('/', async function(req, res, next) {
  var panel = await panelModel.getCanciones();
  res.render('admin/panel', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      panel
  });
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await panelModel.deleteCancionById(id);
  res.redirect('/admin/panel');
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

module.exports = router;