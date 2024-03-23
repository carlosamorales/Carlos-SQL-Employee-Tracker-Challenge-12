// employee.js

// Import necessary modules
const inquirer = require('inquirer');
const connection = require('../config/connection');

// Function to view all employees
function viewAllEmployees() {
  const query = 'SELECT * FROM employee';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    // After viewing all employees, return to the main menu
    init();
  });
}

// Function to add an employee
function addEmployee() {
  // Retrieve necessary data for adding an employee
  // Use inquirer to prompt the user for employee information
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the first name of the new employee:'
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name of the new employee:'
      },
      {
        type: 'input',
        name: 'roleId',
        message: 'Enter the role ID for the new employee:'
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Enter the manager ID for the new employee:'
      }
    ])
    .then(answer => {
      // Add the employee to the database
      const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      connection.query(query, [answer.firstName, answer.lastName, answer.roleId, answer.managerId], (err, res) => {
        if (err) throw err;
        console.log('Employee added successfully!');
        // After adding the employee, return to the main menu
        init();
      });
    })
    .catch(err => {
      console.error('Error occurred:', err);
    });
}

// Function to update an employee's role
function updateEmployeeRole() {
  // Retrieve necessary data for updating an employee's role
  // Use inquirer to prompt the user for employee and role information
  inquirer
    .prompt([
      /* Prompt user for employee and role information */
    ])
    .then(answer => {
      // Update the employee's role in the database
      const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
      connection.query(query, [/* New role ID */, /* Employee ID */], (err, res) => {
        if (err) throw err;
        console.log('Employee role updated successfully!');
        // After updating the employee's role, return to the main menu
        init();
      });
    })
    .catch(err => {
      console.error('Error occurred:', err);
    });
}

// Export functions to be used in other files
module.exports = { viewAllEmployees, addEmployee, updateEmployeeRole };
