var connection = require('./../config');
module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "created_at":today,
        "updated_at":today,
        "req.session['mailAttempts']" : req.session['mailAttempts'] + 1
    }
    connection.query('INSERT INTO user SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}
module.exports.save = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  var addcompany={
    "Provider":req.body.Provider,
    "Company_Name":req.body.Company_Name,
    "Home_Page_View":req.body.Home_Page_View,
    "State":req.body.State,
    "City":req.body.City,
    "State":req.body.State,
     "No_of_months":req.body.No_of_months,
     "No":req.body.No
  }
  connection.query('INSERT INTO addnewcompany SET ?',addcompany, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user add new company sucessfully"
        });
  }
  });
  

}
module.exports.adddevices = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  var addevice={
    "Provider":req.body.Provider,
    "GIEMI":req.body.GIEMI,
    "GIMEI_Mobile":req.body.GIMEI_Mobile,
    "Mapped":req.body.Mapped,
    "mobile":req.body.mobile,
    "device":req.body.device,
     
  }
  connection.query('INSERT INTO newdevice SET ?',addevice, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user add new devices sucessfully"
        });
  }
  });
  

}
module.exports.companyprofile = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  var profile={
    "Provider":req.body.Provider,
    "Company_Name":req.body.Company_Name
  }
  connection.query('INSERT INTO companyprofile SET ?',profile, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user add new Company_Name sucessfully"
        });
  }
  });
  

}
module.exports.MapVehicleDevice = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  var map={
    "Provider":req.body.Provider,
    "Company_Name":req.body.Company_Name,
    "Vehicle":req.body.Vehicle,
    "IMEI":req.body.IMEI
  }
  connection.query('INSERT INTO mapvehicledevice SET ?',map, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user add new  mapvehicledevice sucessfully"
        });
  }
  });
  

}