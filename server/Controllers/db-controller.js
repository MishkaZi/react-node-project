const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'my_db',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('my sql connected');
});

router.get('/create-db', (req, res) => {
  let sql = 'CREATE DATABASE my_db';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Dababase was created');
  });
});

router.get('/create-table', (req, res) => {
  let sql =
    'CREATE TABLE users(id int AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Users table was created');
  });
});

router.post('/register-user', (req, res) => {
  const user = req.body;
  let sql = 'INSERT INTO users SET ?';
  db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User registered');
  });
});

module.exports = router;
