var express = require('express');
var router = express.Router();
const connect = require('../configs/database.js');
const Functions = require('../functions.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.header('Access-Control-Allow-Origin', "*")

  connect.query('select * from system_configs', (err, rows, fields) => {
    if (err) throw err

    console.log('The solution is: ', rows)

    if(rows.length>0){
      rows.map((row_,i)=>{
        // console.log('each row ', row_.datecreated)
      })
    }
    
    res.send(rows);
  })

  // connect.end();
  
});

/* POST a request. */
router.post('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.header('Access-Control-Allow-Origin', "*")

  // connect.connect()

  console.log("Request is ")
  console.log(req.body)
  console.log(req.body.name)

  var func_ = new Functions();

  var placeOfInterest = func_.setPlace(req.body.placeOfInterest);

  console.log("Place of interest is now")
  console.log(placeOfInterest)

  
  
  var sql = "UPDATE system_configs set  config_value = ? where config_name = 'email'";
  var values = [req.body.email]

  connect.query(sql, [values], (err, result) => {
    if (err) throw err

    console.log('The solution is: ', result)

    // if(rows.length>0){
    //   rows.map((row_,i)=>{
    //     // console.log('each row ', row_.datecreated)
    //   })
    // }
    var sql = "UPDATE system_configs set  config_value = ? where config_name = 'number'";
    var values = [req.body.number]

    connect.query(sql, [values], (err, result) => {
        if (err) throw err

        var sql = "UPDATE system_configs set  config_value = ? where config_name = 'address'";
        var values = [req.body.address]

        connect.query(sql, [values], (err, result) => {
            if (err) throw err

            const responseData = {
            statusCode: 200,
            message: result.message,
            requestId: result.insertId,
            }
            
            res.send(responseData);
        })
    })
  })

  // connect.end();
  
});

module.exports = router;
