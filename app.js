var express = require('express');

var app = express();

var port = process.env.PORT || 8042;
var passport = require('passport');
var flash = require('connect-flash');
var path = require('path');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var dateFormat = require('dateformat');
var now = new Date();

require('./config/passport')(passport); // pass passport for configuration

//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

//view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
//app.set('view engine', 'ejs'); // set up ejs for templating

app.use(session({
    secret: 'I Love India...',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./config/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json({ type: '*/*' }));

/*
agu agua
ct1 contra torpedeiro parte 1
ct2 contra torpedeiro parte 2
sub submarino
tp1 torpedeiro parte 1
tp2 torpedeiro parte 2
tp3 torpedeiro parte 3
pa1 porta avioes parte 1
pa2 porta avioes parte 2
pa3 porta avioes parte 3
pa4 porta avioes parte 4
pa5 porta avioes parte 5
ft1 fragata parte 1
ft2 fragata parte 2
ft3 fragata parte 3
ft4 fragata parte 4
*/

//launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

//catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).render('404', {title: "Sorry, page not found", session: req.sessionbo});
});

app.use(function (req, res, next) {
    res.status(500).render('404', {title: "Sorry, page not found"});
});
exports = module.exports = app;