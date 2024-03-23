// role.js

// Import necessary modules
const inquirer = require('inquirer');
const connection = require('../config/connection');

// Function to view all roles
function viewAllRoles() {
  const query = 'SELECT * FROM role';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    // After viewing all roles, return to the main menu
    init();
  });
}

// Function to add a role
function addRole() {
  // Retrieve necessary data for adding a role
  // Use inquirer to prompt the user for role information
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the new role:'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the salary for the new role:'
      },
      {
        type: 'input',
        name: 'departmentId',
        message: 'Enter the department ID for the new role:'
      }
    ])
    .then(answer => {
      // Add the role to the database
      const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
      connection.query(query, [answer.title, answer.salary, answer.departmentId], (err, res) => {
        if (err) throw err;
        console.log('Role added successfully!');
        // After adding the role, return to the main menu
        init();
      });
    })
    .catch(err => {
      console.error('Error occurred:', err);
    });
}

// Export functions to be used in other files
module.exports = { viewAllRoles, addRole };
