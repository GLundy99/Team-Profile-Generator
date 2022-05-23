const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');
const generateEngineer = require('./utils/generateEngineer.js');
const generateIntern = require ('./utils/generateIntern');
const internal = require('stream');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer');
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your Manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your Manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your Manager's Office Number?"
    }
];

function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data)
    } catch (error) {
        console.log(error)
    }
}

var manager;
var intern=[];
var engineer=[];

function init() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) =>{
            manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            console.log (manager)
            createMenu()
        });
}

const menu = ["engineer", "intern", "quit"]

function createMenu(){
    inquirer
    .prompt([
        {
            type: "list",
            name: "roletype",
            message: "What role do you want to add?",
            choices: menu
        }
    ])
    .then((role) =>{
        switch(role.roletype){
            case menu[0]:
                createEngineer();
                break;
            case menu[1]:
                createIntern();
                break;
            case menu[2]:
                var data = generateHTML(manager, intern, engineer)
                console.log("You are done");
                    writeToFile('index.html', data)
            break;
        }
    })
}

function createEngineer(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your Engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your Engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your Engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is ypur Engineer's github?"
        }
    ])
    .then(({name, id, email, github}) =>{
        var data = new Engineer (name, id, email, github)
        engineer.push(data)
        console.log(engineer)
        createMenu()
    })
}

function createIntern(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your Intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your Intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your Intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your Intern's school?"
        }
    ])
    .then(({name, id, email, school}) =>{
        var data = new Intern(name, id, email, school)
        intern.push(data)
        console.log (intern)
        createMenu()
    })
}

init();