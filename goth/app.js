var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var literaturaRouter = require('./routes/literatura');
var lookRouter = require('./routes/look');
var modaRouter = require('./routes/moda');
var moda01Router = require('./routes/moda01');
var moda02Router = require('./routes/moda02');
var moda03Router = require('./routes/moda03');
var moda04Router = require('./routes/moda04');
var moda05Router = require('./routes/moda05');
var moda06Router = require('./routes/moda06');
var moda07Router = require('./routes/moda07');
var moda08Router = require('./routes/moda08');
var moda09Router = require('./routes/moda09');
var moda10Router = require('./routes/moda10');
var moda11Router = require('./routes/moda11');
var moda12Router = require('./routes/moda12');
var moda13Router = require('./routes/moda13');
var moda14Router = require('./routes/moda14');
var maquillajeRouter = require('./routes/maquillaje');
var maquillaje01Router = require('./routes/maquillaje01');
var maquillaje02Router = require('./routes/maquillaje02');
var maquillaje03Router = require('./routes/maquillaje03');
var maquillaje04Router = require('./routes/maquillaje04');
var maquillaje05Router = require('./routes/maquillaje05');
var maquillaje06Router = require('./routes/maquillaje06');
var maquillaje07Router = require('./routes/maquillaje07');
var maquillaje08Router = require('./routes/maquillaje08');
var maquillaje09Router = require('./routes/maquillaje09');
var maquillaje10Router = require('./routes/maquillaje10');
var maquillaje11Router = require('./routes/maquillaje11');
var maquillaje12Router = require('./routes/maquillaje12');
var maquillaje13Router = require('./routes/maquillaje13');
var musicaRouter = require('./routes/musica');
var tattooRouter = require('./routes/tattoo');
var chest01Router = require('./routes/chest01');
var chest02Router = require('./routes/chest02');
var chest03Router = require('./routes/chest03');
var chest04Router = require('./routes/chest04');
var feet01Router = require('./routes/feet01');
var feet02Router = require('./routes/feet02');
var feet03Router = require('./routes/feet03');
var feet04Router = require('./routes/feet04');
var neck01Router = require('./routes/neck01');
var neck02Router = require('./routes/neck02');
var neck03Router = require('./routes/neck03');
var neck04Router = require('./routes/neck04');
var toonRouter = require('./routes/toon');
var contactoRouter = require('./routes/contacto');
var loginRouter = require('./routes/admin/login');
var panelRouter = require('./routes/admin/panel');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'fsdghthgfghiotgtrfdewsdgpopkopkghdhsugyerb',
  resave: false,
  saveUninitialized: true
}));

secured = async(req,res,next) =>{
  try{
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next();
    }else{
      res.redirect('/admin/login');
    }

  }catch(error){
    console.log(error)
  }
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/literatura', literaturaRouter);
app.use('/look', lookRouter);
app.use('/moda', modaRouter);
app.use('/moda01', moda01Router);
app.use('/moda02', moda02Router);
app.use('/moda03', moda03Router);
app.use('/moda04', moda04Router);
app.use('/moda05', moda05Router);
app.use('/moda06', moda06Router);
app.use('/moda07', moda07Router);
app.use('/moda08', moda08Router);
app.use('/moda09', moda09Router);
app.use('/moda10', moda10Router);
app.use('/moda11', moda11Router);
app.use('/moda12', moda12Router);
app.use('/moda13', moda13Router);
app.use('/moda14', moda14Router);
app.use('/maquillaje', maquillajeRouter);
app.use('/maquillaje01', maquillaje01Router);
app.use('/maquillaje02', maquillaje02Router);
app.use('/maquillaje03', maquillaje03Router);
app.use('/maquillaje04', maquillaje04Router);
app.use('/maquillaje05', maquillaje05Router);
app.use('/maquillaje06', maquillaje06Router);
app.use('/maquillaje07', maquillaje07Router);
app.use('/maquillaje08', maquillaje08Router);
app.use('/maquillaje09', maquillaje09Router);
app.use('/maquillaje10', maquillaje10Router);
app.use('/maquillaje11', maquillaje11Router);
app.use('/maquillaje12', maquillaje12Router);
app.use('/maquillaje13', maquillaje13Router);
app.use('/musica', musicaRouter);
app.use('/tattoo', tattooRouter);
app.use('/chest01', chest01Router);
app.use('/chest02', chest02Router);
app.use('/chest03', chest03Router);
app.use('/chest04', chest04Router);
app.use('/feet01', feet01Router);
app.use('/feet02', feet02Router);
app.use('/feet03', feet03Router);
app.use('/feet04', feet04Router);
app.use('/neck01', neck01Router);
app.use('/neck02', neck02Router);
app.use('/neck03', neck03Router);
app.use('/neck04', neck04Router);
app.use('/toon', toonRouter);
app.use('/contacto', contactoRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/panel', secured, panelRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
