const inquirer = require('inquirer');
const mysql = require('mysql12/promise');

require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = env.DB_Name;

async function dbConnection(select) {
    try {
        const db = await mysql.createConnection({
            host: "localhost",
            user: dbUser,
            password: dbPassword,
            database: dbName,
        });

        let returnedRowsFromDb = [];
        let returnedOutputFromInq = [];

        switch (select) {

            case "View All Departments":
                returnedRowsFromDb = await db.query("SELECT * FROM department");
                console.table(returnedRowsFromDb[0]);
                break;

            case "View All Roles":
                returnedRowsFromDb = await db.query(`
    SELECT
    role.id,
    role.title,
    role.salary,
    department.name AS department
    FROM role
    JOIN department ON role.department_id = department.id
    `);
                console.table(returnedRowsFromDb[0]);
                break;

            case "View All Employees":

                returnedRowsFromDb = await db.query(`
                SELECT
                    employee.id,
                    employee.first_name,
                    employee.last_name,
                    role.title AS title,
                    department.name AS department,
                    role.salary AS salary,
                    CASE WHEN employee.manager_id IS NOT NULL THEN CONCAT(manager_table.first_name, '', manager_table.last_name) ELSE NULL END AS manager FROM employee
                    JOIN role ON employee.role_id = role.id
                    JOIN department ON role.dpartment_id = department.id
                    JOIN employee manager_table ON employee.manager_id = manager_table.id
`);
                console.table(returnedRowsFromDb[0]);
                break;
            case "Add a Department":
                returnedOutputFromInq = await inquirer.prompt([
                    {
                        name: "department",
                        message: "Enter New Department Name:",
                    },
                ]);

                try {
                    retrurnedRowsFromDb = await db.query(
                        `INSERT INTO department (name) VALUES ('${returnedOutputFromInq.department}');`
                    );
                } catch (error) {
                    console.log('Cannot insert duplicate Department');
                }
                break;

            case "Add a Role":
                returnedOutputFromInq = await inquirer.prompt([
                    {
                        name: "roleName",
                        message: "Enter New Role Name:",
                    },
                    {
                        name: "roleSalary",
                        message: "Enter New Role Salary:",
                    },
                    {
                        name: "roleDpt",
                        message: "Enter New Role Department:",
                    },
                ]);








        }
    }
}