const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

// Registration Route
router.post('/register', async (req, res) => {
  const { username, email, password, first_name, last_name } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert the user into the database
  db.execute(
    'INSERT INTO users (username, email, password, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
    [username, email, hashedPassword, first_name, last_name],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(201).json({ message: 'User registered successfully' });
    }
  );
});

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.execute('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (results.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user: { id: user.id, username: user.username, email: user.email } });
  });
});

module.exports = router;
