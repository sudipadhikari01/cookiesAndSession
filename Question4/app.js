var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var product1Router = require('./routes/product1');
var product2Router = require('./routes/product2');
var product3Router = require('./routes/product3');
var addToCartRouter = require('./routes/addToCart');
var listOfCartRoute = require('./routes/listOfCart');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'ElmatteryMug'
  
}));

app.use('/', indexRouter);
app.use('/product1',product1Router);
app.use('/product2',product2Router);
app.use('/product3',product3Router);
app.use('/addToCart',addToCartRouter);
app.use('/listOfCart',listOfCartRoute);





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


app.listen(3000,()=>console.log("Server running on port 3000"));
module.exports = app;
