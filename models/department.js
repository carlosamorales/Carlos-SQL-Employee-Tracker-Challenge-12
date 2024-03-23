// department.js

const mysql = require('mysql2');
const connection = require('../config/connection');

class Department {
    // Get all departments
    static async getAllDepartments() {
        const [rows] = await connection.execute('SELECT * FROM departments');
        return rows;
    }

    // Add a new department
    static async addDepartment(departmentName) {
        const [result] = await connection.execute('INSERT INTO departments (name) VALUES (?)', [departmentName]);
        return result;
    }

    // Other CRUD operations can be implemented similarly
}

module.exports = Department;
