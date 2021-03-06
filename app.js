var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const passport = require('passport');
var logger = require('morgan');

var mongooseClient = require('mongoose');
var cors = require('cors');

const admin = require('./routes/admin');
const config = require('./config');

var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api', apiRouter);
app.use('/admin', admin);

mongooseClient.connect("mongodb://" + config.username + ":" + config.password + 
                        "@ds125302.mlab.com:25302/floodrelief");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

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