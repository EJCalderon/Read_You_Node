// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your project's name?",
    },
    {
        type: "list",
        name: "license",
        message: "Apply license badge?",
        choices: [
            "MIT",
            "GPLV3",
            "ISC",
        ],

    },
    {
        type: "input",
        name: "description",
        message: "Please, summarize your project",
    },
    {
        type: "editor",
        name: "Installation steps",
        message: "What are the required step by step instructions to run this application? To exit editor press control C twice",
    },
    {
        type: "input",
        name: "test",
        message: "What is the command to initiate a test?",
    },
    {
        type: "input",
        name: "github repo",
        message: "What is your Github username?",
    },  
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },  
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors to this project?",
    },     

];

// TODO: Create a function to write README file
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(
            "README_DEMO.md",
            generateMarkdown({
                ...answers,
            })
        );
    });
}


// Function call to initialize app
init();
