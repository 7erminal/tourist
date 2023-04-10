const mysql = require('mysql')

const connection = mysql.createConnection({
  // host: '172.27.51.200',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  host: 'localhost',
  user: 'terminal',
  password: 'T34m1na!2@123',
  database: 'tourism',
  port: '3306'
})


module.exports = connection
