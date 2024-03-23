// department.js

// Import necessary modules
const inquirer = require('inquirer');
const connection = require('../config/connection');

// Function to view all departments
function viewAllDepartments() {
  const query = 'SELECT * FROM department';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    // After viewing all departments, return to the main menu
    init();
  });
}

// Function to add a department
function addDepartment() {
  // Retrieve necessary data for adding a department
  // Use inquirer to prompt the user for department information
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the new department:'
      }
    ])
    .then(answer => {
      // Add the department to the database
      const query = 'INSERT INTO department (name) VALUES (?)';
      connection.query(query, [answer.name], (err, res) => {
        if (err) throw err;
        console.log('Department added successfully!');
        // After adding the department, return to the main menu
        init();
      });
    })
    .catch(err => {
      console.error('Error occurred:', err);
    });
}

// Export functions to be used in other files
module.exports = { viewAllDepartments, addDepartment };
