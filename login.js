const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb" 
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = `INSERT INTO login(username, password) VALUES (?, ?)`;
  db.query(sql, [username, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error registering user:', err); 
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(400).send('Username already exists'); 
      } else {
        res.status(500).send('Error registering user');
      }
    } else {
      res.send('User registered successfully');
    }
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = `SELECT * FROM login WHERE username = ?`;
  db.query(sql, [username], (err, result) => {
    if (err) {
      res.status(500).send('Error logging in');
    } else if (result.length > 0 && bcrypt.compareSync(password, result[0].password)) {
      const token = jwt.sign({ username: result[0].username }, 'secret_key');
      res.send({ token });
    } else {
      res.status(401).send('Invalid username or password');
    }
  });g
});

// Protected Route
app.get('/protected', (req, res) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).send('Token not provided');
  }

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }
    res.send(`Welcome, ${decoded.username}!`);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
