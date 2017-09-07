exports.register = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  var users={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "email":req.body.email,
    "password":req.body.password,
    "created":today,
    "modified":today
  }
  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
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
      "success":"user registered sucessfully"
        });
  }
  });
};
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
};