// role.js

const mysql = require('mysql2');
const connection = require('../config/connection');

class Role {
    // Get all roles
    static async getAllRoles() {
        const [rows] = await connection.execute('SELECT * FROM roles');
        return rows;
    }

    // Add a new role
    static async addRole(title, salary, departmentId) {
        const [result] = await connection.execute('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
        return result;
    }

    // Other CRUD operations can be implemented similarly
}

module.exports = Role;
