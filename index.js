// index.js

console.log(`
|
|    EMPLOYEE MANAGER
|
`);

const inquirer = require('inquirer');
const { viewAllDepartments, addDepartment } = require('./models/department');
const { viewAllRoles, addRole } = require('./models/role');
const { viewAllEmployees, addEmployee, updateEmployeeRole } = require('./models/employee');

// Define the init function to start the application
function init() {
    // Prompt user with options using inquirer
    inquirer
        .prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'Add a department',
                'View all roles',
                'Add a role',
                'View all employees',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        })
        .then(answer => {
            // Call the appropriate function based on user's choice
            switch (answer.action) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    console.log('Exiting application...');
                    process.exit(0); // Exit the application
                    break;
            }
        })
        .catch(err => {
            console.error('Error occurred:', err);
        });
}

// Call the init function to start the application
init();
