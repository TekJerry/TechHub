const mysql = require('mysql2');
const db = require('../config/database');

// Create a table if it doesn't exist
const createUserTable = `CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  preferences TEXT,           // To store user preferences for future features
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

db.execute(createUserTable, (err, results) => {
  if (err) {
    console.log('Error creating users table:', err);
  } else {
    console.log('Users table created or already exists');
  }
});
