var express = require('express');
var router = express.Router();
const connect = require('../configs/database.js');
const bcrypt = require("bcrypt")

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.header('Access-Control-Allow-Origin', "*")

  connect.query('select * from users', (err, rows, fields) => {
    if (err) throw err

    console.log('The solution is: ', rows)

    if(rows.length>0){
      rows.map((row_,i)=>{
        // console.log('each row ', row_.datecreated)
      })
    }
    
    res.send(rows);
  })
  
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.header('Access-Control-Allow-Origin', "*")
  console.log("Post user");
  
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err
    bcrypt.hash(req.body.password, salt, function(err, hash) {
        // Store hash in the database
        var sql = "INSERT into users (email, password) VALUES (?)";
        var values = [req.body.email, hash];

        try{
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
          });
        } catch(e){
          res.send(e);
        }
    });
  });
});

/* POST users listing. */
router.post('/login', function(req, res, next) {
  // res.send('respond with a resource');
  res.header('Access-Control-Allow-Origin', "*")

  console.log("Email is "+req.body.email+" and password is "+req.body.password)

  var sql = "select * from users where email = ?";
  var values = [req.body.email]
  
  connect.query(sql, values, (err, rows, fields) => {
    if (err) throw err

    console.log('The solution is: ', rows)

    var message = "Incomplete"

    const responseDataT = {
      statusCode: 2002,
      message: message,
      email: "",
    }

    if(rows.length>0){
      console.log('Rows is: ', rows[0].password)
      bcrypt.compare(req.body.password, rows[0].password, function(err, result) {
            if (result) {
                // password is valid
                console.log("Password matches");

                message = "Password matches"

                const responseData = {
                  statusCode: 200,
                  message: message,
                  email: rows[0].email,
                  name: rows[0].name
                }

                res.send(responseData);
            } else {
              console.log("password does not match");

              message = "Password does not match"

              const responseData = {
                statusCode: 200,
                message: message,
                email: rows[0].email,
                name: rows[0].name
              }

              res.send(responseData);
            }

            
        });
    } else {
      res.send(responseDataT);
    }
  })
});

module.exports = router;
