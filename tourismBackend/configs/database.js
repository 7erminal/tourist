const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  host: 'localhost',
  // user: 'terminal',
  // password: 'T34m1na!2@123',
  user: 'root',
  password: 'Qwerty@234zxcv',
  database: 'tourism',
  port: '3306'
})


module.exports = connection
