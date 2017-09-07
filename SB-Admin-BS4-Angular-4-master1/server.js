var express=require("express");
var bodyParser=require('body-parser');
var session = require('express-session')
var path=require('path');
var app = express();
/*var testtable = require('./routes/testtable'); */
/*app.use('/', express.static(__dirname + 'add'));*/
var authenticateController=require('./controller/authenticate-controller');
var registerController=require('./controller/register-controller');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/*app.use(express.session({secret: '1234567890QWERTY'}));*/
/* route to handle login and registration */
app.get("/",function(req,res){
    res.sendFile(__dirname + '/login.html');
});
app.get("/addnewcompany",function(req,res){
    res.sendFile(__dirname + '/SB-Admin-BS4-Angular-4-master1/dashboard');
});
app.get("/addnewcccccc",function(req,res){
    res.sendFile(__dirname + '/addnewcccccc.html');
});
app.get("/adddevice",function(req,res){
    res.sendFile(__dirname + '/adddevice.html');
});
app.get("/companyprofile",function(req,res){
    res.sendFile(__dirname + '/companyprofile.html');
});
//ADMIN-VECHILE-IMEI Map Vehicle Device
app.get("/MapVehicleDevice",function(req,res){
    res.sendFile(__dirname + '/MapVehicleDevice.html');
});
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');*/
//add new companyaddnewcccccc
/*app.get("/open",function(req,res){
    res.sendFile(__dirname + '/index1.html');
});*/
/*app.get("/testtable",function(req,res){
    res.sendFile(__dirname + '/testtable.html');
});*/
/*app.get('/testtable', testtable.list);*/
/*app.get('/select', function (req, res) {
   connection.query('select * from addnewcompany', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});*/
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');*/
//ADD CompanyUserS
app.post('/api/register',registerController.register);
//LOGIN COMPANYUSERS
app.post('/login',authenticateController.login);
/*Admin-Company-Add/Update CompnyThis for add new Company List*/
app.post('/save',registerController.save);

app.post('/adddevices',registerController.adddevices);
app.post('/companyprofile',registerController.companyprofile);
app.get('/list',authenticateController.list);
app.get('/addnewdeviceslist',authenticateController.addnewdeviceslist);
//Admin-cOMPANY-profile-CompanyUser i have to SELECT list count
app.get('/CompanyUser',authenticateController.CompanyUser);
//ADMIN-COMPANY-Add OR UPDATE USERS=="add USER DETAILS" Last Login DATE  AND lOGIN cOUNT PENDING
app.post('/addnewuser',registerController.adddevices);
//ADMIN-VECHILE-IMEI Map Vehicle Device
app.post('/MapVehicleDevice',registerController.MapVehicleDevice);
//MapVehicleDevice select
app.get('/MapVehicleDevices',authenticateController.MapVehicleDevices);

app.listen(8012);
// Part of https://github.com/chris-rock/node-crypto-examples

// Nodejs encryption with CTR


