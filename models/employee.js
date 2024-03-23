// employee.js

const mysql = require('mysql2');
const connection = require('../config/connection');

class Employee {
    // Get all employees
    static async getAllEmployees() {
        const [rows] = await connection.execute('SELECT * FROM employees');
        return rows;
    }

    // Add a new employee
    static async addEmployee(firstName, lastName, roleId, managerId) {
        const [result] = await connection.execute('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
        return result;
    }

    // Other CRUD operations can be implemented similarly
}

module.exports = Employee;
