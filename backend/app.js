const express = require ('express');

const app = express();
const mysql = require ('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Rap80@fh62'
  });
  
  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  });
  
  connection.end();