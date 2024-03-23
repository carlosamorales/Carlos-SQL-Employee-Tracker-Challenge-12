// index.js

const inquirer = require('inquirer');
const {
  viewAllDepartments,
  addDepartment,
  viewAllRoles,
  addRole,
  viewAllEmployees,
  addEmployee,
  updateEmployeeRole
} = require('./models');

// Start the application
function init() {
  // Prompt user with options using inquirer
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Quit'
        ]
      }
    ])
    .then(answer => {
      // Handle user input to call appropriate functions
      switch (answer.option) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Quit':
          console.log('Exiting application.');
          process.exit(0);
          break;
        default:
          console.log('Invalid option.');
      }
    })
    .catch(err => {
      console.error('Error occurred:', err);
    });
}

// Call the init function to start the application
init();
