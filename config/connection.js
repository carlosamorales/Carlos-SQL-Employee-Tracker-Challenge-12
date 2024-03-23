const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', // Your MySQL host (e.g., 'localhost')
  port: process.env.DB_PORT || 3306, // Your MySQL port (e.g., 3306)
  user: process.env.DB_USER || 'root', // Your MySQL username
  password: process.env.DB_PASSWORD || 'password', // Your MySQL password
  database: process.env.DB_NAME || 'corporate_hr_db', // Your MySQL database name
  waitForConnections: true, // Whether to queue queries when no connections are available
  connectionLimit: 10, // Maximum number of connections in the pool
  queueLimit: 0 // Maximum number of connection requests the pool will queue before returning an error
});

// Export the connection pool
module.exports = pool;
