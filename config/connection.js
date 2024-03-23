const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', // Your MySQL host (e.g., 'localhost')
  port: 3306, // Your MySQL port (e.g., 3306)
  user: 'root', // Your MySQL username
  password: 'password', // Your MySQL password
  database: 'corporate_hr_db', // Your MySQL database name
  connectionLimit: 10, // Maximum number of connections in the pool
});

// Export the connection pool
module.exports = pool;
