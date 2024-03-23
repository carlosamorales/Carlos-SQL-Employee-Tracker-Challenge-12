const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST, // Your MySQL host (e.g., 'localhost')
  port: process.env.DB_PORT, // Your MySQL port (e.g., 3306)
  user: process.env.DB_USER, // Your MySQL username
  //password: process.env.DB_PASSWORD, // Your MySQL password
  database: process.env.DB_NAME, // Your MySQL database name
  waitForConnections: true, // Whether to queue queries when no connections are available
  connectionLimit: 10, // Maximum number of connections in the pool
  queueLimit: 0 // Maximum number of connection requests the pool will queue before returning an error
});

// Export the connection pool
module.exports = pool;
