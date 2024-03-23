// employee.js
const inquirer = require('inquirer');
const connection = require('../config/connection');

// Function to view all employees
function viewAllEmployees(init) {
    const query = 'SELECT * FROM employee';
    connection.execute(query)
        .then(([rows]) => {
            console.table(rows);
            init();
        })
        .catch(err => {
            console.error('Error occurred:', err);
            init(); // Return to the main menu even if an error occurs
        });
}

// Function to add an employee
function addEmployee(init) {
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
                message: 'Enter the manager ID for the new employee (leave blank if none):' // Updated message
            }
        ])
        .then(answer => {
            let managerId = answer.managerId.trim(); // Remove leading/trailing whitespace
            // Check if managerId is provided and not empty
            if (managerId && managerId !== '') {
                // Validate if the provided managerId exists in the database
                const managerQuery = 'SELECT * FROM employee WHERE id = ?';
                connection.query(managerQuery, [managerId], (err, res) => {
                    if (err) {
                        console.error('Error occurred:', err);
                        init(); // Return to the main menu
                    } else if (res.length === 0) {
                        console.error('Error: Manager ID does not exist.');
                        init(); // Return to the main menu
                    } else {
                        // Add the employee to the database
                        const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
                        connection.query(query, [answer.firstName, answer.lastName, answer.roleId, answer.managerId], (err, res) => {
                            if (err) throw err;
                            console.log('Employee added successfully!');
                            init(); // Return to the main menu
                        });
                    }
                });
            } else {
                // If managerId is not provided or empty, set it to null
                managerId = null;
                // Add the employee to the database
                const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
                connection.query(query, [answer.firstName, answer.lastName, answer.roleId, managerId], (err, res) => {
                    if (err) throw err;
                    console.log('Employee added successfully!');
                    init(); // Return to the main menu
                });
            }
        })
        .catch(err => {
            console.error('Error occurred:', err);
            init(); // Return to the main menu even if an error occurs
        });
}

// Define the init function
function init() {}

// Export functions to be used in other files
module.exports = { viewAllEmployees, addEmployee, init };
