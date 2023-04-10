var express = require('express');
var router = express.Router();
const connect = require('../configs/database.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.header('Access-Control-Allow-Origin', "*")

  connect.connect()

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

  connect.end();
  
});

module.exports = router;
