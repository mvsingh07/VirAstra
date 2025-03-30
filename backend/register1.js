const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
var jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
// Middleware
app.use(bodyParser.json());
app.use(cors());
// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_database',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
    return;
  }
  console.log('Connected to database');
});

// Registration endpoint
app.post('/register', (req, res) => {
  const { email, password, mobile } = req.body;

  // Check if the email is already in use
  connection.query(
    'SELECT COUNT(*) as count FROM members WHERE email = ?',
    [email],
    (err, results) => {
      if (err) {
        console.error('Error checking email', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      const emailCount = results[0].count;
      if (emailCount > 0) {
        return res.status(400).json({ error: 'Email is already in use' });
      }

      // Insert new member into database
      const newMember = { email, password, mobile };
      connection.query('INSERT INTO members SET ?', newMember, (err) => {
        if (err) {
          console.error('Error inserting member', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(201).json({ message: 'Registration successful' });
      });
    }
  );
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
