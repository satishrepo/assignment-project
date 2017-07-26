var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride 	= require('method-override');
var cookieParser 	= require('cookie-parser');
// var session 	= require('express-session');


global.config = require('./config');

// console.log(express);


var db = require('./database');
var user_model = require('./api/models/user');
var assignment_model = require('./api/models/assignment');


var index = require('./routes/index');
var user = require('./routes/user');
var assignment = require('./routes/assignment');

// var sess = require('./middleware/session');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
{
	extended:true
}));

app.use(methodOverride(function(req, res)
{
	if(req.body && typeof req.body == 'object' && '_method' in req.body)
	{
		var method = req.body._method;
		delete req.body._method;
		return method;
	}
}));

// Static files load 
app.use(express.static(path.join(__dirname, 'client')));


// session initialization
// app.use(cookieParser());
// app.use(session({secret:'satishpur', resave:true, saveUninitialized:true}));

// app.use(sess);

app.use('/',index);
app.use('/user',user);
app.use('/assignment',assignment);



app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.listen(8080);
console.log('app listening on 8080')