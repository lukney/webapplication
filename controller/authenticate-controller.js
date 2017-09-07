var connection = require('./../config');
var crypto = require('crypto');

module.exports.login=function(req,res){
   algorithm = 'aes-256-ctr',
    password = req.body.password;
    function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
var hw = encrypt("hello world")
// outputs hello world
console.log(decrypt(hw));
    var email=req.body.email;
    var password=password;
    connection.query('SELECT * FROM user WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
            if(password==results[0].password){
              res.redirect('/trackadmin/index');
                /*res.json({
                    status:true,
                    message:'successfully authenticated'
                })*/
            }else{
                res.json({
                  status:false,
                  message:"password does not match"
                 });
            }
         
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}
/*module.exports.save=function(req,res){
  var Provider=req.body.Provider;
    var Company_Name=req.body.Company_Name;
    var Home_Page_View=req.body.Home_Page_View;
    var State=req.body.State;
    var City=req.body.City;
    var State=req.body.State;
     var No_of_months=req.body.No_of_months;
     var No=req.body.No;
connection.query('SELECT * FROM addnewcompany', function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }
    });
}*/
module.exports.list=function(req,res){
  var id=req.body.id;
  var Provider=req.body.Provider;
    var Company_Name=req.body.Company_Name;
    var Home_Page_View=req.body.Home_Page_View;
    var State=req.body.State;
    var City=req.body.City;
     var No_of_months=req.body.No_of_months;
     var No=req.body.No;
    /*connection.query('select * from addnewcompany', function (error, results, fields) {
    if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
              res.redirect('/testtable');
                /*res.json({
                    status:true,
                    message:'successfully authenticated'
                })*/
           // }
 // }
//});

connection.query('SELECT * FROM addnewcompany',function(err,rows){
       if(!err) {
           res.json(rows);
        }
        /*if(err)
          console.log("Error Selecting : %s ",err );

        res.render('testtable.ejs',{page_title:"Test Table",data:rows});
        /*
        function(err, rows, fields) {
    if (err) throw err;

    for (var i in rows) {
        response.end('Name: ', rows[i].Name); //this doesn't work, it only shows Name: but doesn't show the retrieved name from the databased
        console.log('Name: ', rows[i].Name); //this works fine
    }
});
        */
  /*function(err, data, fields){
   if (err) throw err;

         res.render('index', { data: data});

      });*/
  //function(err,rows){
      // if(!err) {
           // res.json(rows);
       // }
        /*if(err)
          console.log("Error Selecting : %s ",err );

        res.redirect('testtable',{page_title:"Test Table",data:rows});
      });*/

//});

/*connection.query('SELECT * FROM addnewcompany',function(err, records){
  if(err) throw err;

  console.log('Data received from Db:n');
  console.log(records);*/
});
}
/*module.exports.addnewdeviceslist=function(req,res){
        var sql = "SELECT Provider , Company_Name FROM addnewcompany ";
        connection.query(sql, function (err, result , fields) {
            if (err) {
                callback("error", err)
            } else {
                callback("success", result)
            }
        });
    }
}*/
module.exports.addnewdeviceslist=function(req,res){
  var id=req.body.id;
  var Provider=req.body.Provider;
    var Company_Name=req.body.Company_Name;
     connection.query('SELECT * FROM newdevice',function(err,rows){
       if(!err) {
            res.json(rows);
        }
      });
   }
   //Company Users
   module.exports.CompanyUser=function(req,res){
     connection.query('SELECT * FROM user',function(err,rows){
       if(!err) {
            res.json(rows);
        }
      });
   }
   //admin-vechile-MapVehicleDevice
   module.exports.MapVehicleDevices=function(req,res){
     connection.query('SELECT * FROM mapvehicledevice',function(err,rows){
       if(!err) {
            res.json(rows);
        }
      });
   }
   module.exports.table=function(req,res){
    connection.query('SELECT * FROM addnewcompany', function(err, rows, fields)
    {
        res.render('rooms', {
          items: rows
        });
    });
}