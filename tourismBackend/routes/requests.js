var express = require('express');
var router = express.Router();
const connect = require('../configs/database.js');
const Functions = require('../functions.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.header('Access-Control-Allow-Origin', "*")

  connect.query('select * from requests', (err, rows, fields) => {
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

  
  
  var sql = "INSERT into requests (name, email, number, place_of_interest, message, active, status, created_by) VALUES (?)";
  var values = [req.body.name, req.body.email, req.body.number, placeOfInterest, req.body.message, 1, 2, req.body.name]

  connect.query(sql, [values], (err, result) => {
    if (err) throw err

    console.log('The solution is: ', result)

    // if(rows.length>0){
    //   rows.map((row_,i)=>{
    //     // console.log('each row ', row_.datecreated)
    //   })
    // }

    const responseData = {
      statusCode: 200,
      message: result.message,
      requestId: result.insertId,
    }
    
    res.send(responseData);
  })

  // connect.end();
  
});

/* POST update request seen status. */
router.post('/update-seen-status', function(req, res, next) {
  // res.send('respond with a resource');
  res.header('Access-Control-Allow-Origin', "*")

  console.log("Request ID received is "+req.body.requestid)

  var sql = "UPDATE requests set status = 1 where request_id = (?)";
  var values = [req.body.requestid]

  connect.query(sql, [values], (err, result) => {
    if (err) throw err

    console.log('The solution is: ', result)

    const responseData = {
      statusCode: 200,
      message: result.message,
      requestId: result,
    }
    
    res.send(responseData);
  })

  // connect.end();
  
});

module.exports = router;
