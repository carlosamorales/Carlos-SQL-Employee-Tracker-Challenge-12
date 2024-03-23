// department.js
const inquirer = require('inquirer');
const connection = require('../config/connection');

// Function to view all departments
async function viewAllDepartments(init) { // Accept init as parameter
    try {
        const [rows] = await connection.execute('SELECT * FROM department');
        console.table(rows);
        // After viewing all departments, return to the main menu
        init(); // Call the init function passed as parameter
    } catch (err) {
        console.error('Error occurred:', err);
    }
}

// Function to add a department
// Function to add a department
function addDepartment(init) {
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
                if (err) {
                    console.error('Error occurred:', err);
                } else {
                    console.log('Department added successfully!');
                }
                // After adding the department, return to the main menu
                init(); // Call the init function passed as parameter
            });
        })
        .catch(err => {
            console.error('Error occurred:', err);
            // If an error occurs, still return to the main menu
            init(); // Call the init function passed as parameter
        });
}

// Export functions to be used in other files
module.exports = { viewAllDepartments, addDepartment };