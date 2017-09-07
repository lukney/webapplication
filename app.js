var express = require('express');
var http = require('http');
var path = require('path');

//Including controller/dao for testtable
var testtable = require('./routes/testtable'); 
var app = express();
var connection  = require('express-myconnection'); 
var mysql = require('mysql');
// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(
    connection(mysql,{

        host: 'localhost',
        user: 'root',
        password : '',
        port : 3306, //port mysql
        database:'webapp'
},'pool')
);
app.get('/testtable', testtable.list);
app.use(app.router);
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
