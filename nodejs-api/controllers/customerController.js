const bcrypt = require('bcrypt');
const db = require('../config/database');

exports.addCustomer = async (req, res) => {
  const { first_name, last_name, email, password, phone } = req.body;
  const generated_at = new Date().toISOString().split('T')[0];

  try {
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    const sql = 'INSERT INTO customers (first_name, last_name, email, password_hash, phone, generated_at) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [first_name, last_name, email, password_hash, phone, generated_at], (err, result) => {
      if (err) {
        return res.status(500).send('Database insert error');
      }
      res.send('Customer added...');
    });
  } catch (error) {
    res.status(500).send('Error hashing password');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT password_hash FROM customers WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      return res.status(500).send('Database query error');
    }

    if (results.length > 0) {
      const storedHash = results[0].password_hash;

      try {
        const match = await bcrypt.compare(password, storedHash);

        if (match) {
          res.send('Login successful!');
        } else {
          res.status(401).send('Incorrect password');
        }
      } catch (error) {
        res.status(500).send('Error comparing passwords');
      }
    } else {
      res.status(404).send('User not found');
    }
  });
};
