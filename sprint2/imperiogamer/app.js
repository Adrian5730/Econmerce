var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ingresoUsuarioRouter = require('./routes/ingreso-usuario');
var productosRouter = require('./routes/productDetail');
var carritoRouter = require('./routes/productCart');
var carritoProductoRouter = require('./routes/carrito-producto');
var carritoDatosUsuarioRouter = require('./routes/carrito-datos-usuario');
var carritoConfirmaDatosRouter = require('./routes/carrito-confirmar-datos');
var carritoAgradecimientoRouter = require('./routes/carrito-gracias');
var formularioRegistoRouter = require('./routes/register');
var cargaProductoRouter = require('./routes/productAdd');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/ingreso-usuario', ingresoUsuarioRouter);
app.use('/listado-productos', productosRouter);
app.use('/carrito', carritoRouter);
app.use('/productos',productosRouter);
app.use('/registrate', formularioRegistoRouter);
app.use('/carga-producto', cargaProductoRouter);
app.use('/carrito/tus-productos', carritoProductoRouter);
app.use('/carrito/datos-usuario', carritoDatosUsuarioRouter);
app.use('/carrito/confirmar-datos', carritoConfirmaDatosRouter);
app.use('/carrito/gracias', carritoAgradecimientoRouter);

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
