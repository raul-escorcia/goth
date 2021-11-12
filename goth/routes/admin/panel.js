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

router.get('/agregar2', (req, res, next) => {
  res.render('admin/agregar2', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body.artista != "" && req.body.album != "" && req.body.cancion != "") {
      await panelModel.insertCancion(req.body)
      res.redirect('/admin/panel/agregar2')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la canción'
    })
  }
})


router.get('/modificar/:id', async(req, res, next) => {
  var id = req.params.id;
  var panel = await panelModel.getCancionById(id); 
  res.render('admin/modificar',{
    layout: 'admin/layout',
    panel
  })
})

router.post('/modificar', async(req, res, next) => {
  try{
    var obj={
      artista: req.body.artista,
      album: req.body.album,
      cancion: req.body.cancion
    }
    console.log(obj);
    await panelModel.modificarCancionById(obj, req.body.id);
    res.redirect('/admin/panel')
  } catch(error){
    console.log(error)
    res.render('admin/modificar',{
      layout: 'admin/layout',
      error: true,
      message: 'no se modifico la información'
    })
  }
})

module.exports = router;