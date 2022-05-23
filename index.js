const package = require('dotenv').config();
const inquirer = require('inquirer');

const Employee = require("./lib/Employee");

const employee = new Employee();

employee.getName();