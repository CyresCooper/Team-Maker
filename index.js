
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
//packages
const fs = require("fs");
const inquirer = require("inquirer");
//Questions for Team Manger Info
const managerPrompt = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is your Mangers Name?:",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid response");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is your Manager's ID:",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid response");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is your Manager's email?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid response");
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'mangerOffice',
        message: "Whats Your Manager's Office number?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid response");
            }
            return true;
        }
    },

]
const moreOrStop = () => {
    inquirer.prompt([{
        type: 'confirm',
        name: 'moreTeamMembers',
        message: 'Would You Like to add More Members to the Team?',
        default: true,
    }]).then((answer) => {
        if (answer.moreTeamMembers) {
            addMember();
        } else {
            console.log("Enjoy Your Team's Profile");
            const endHTML = `
        </body>
        </html>`
            fs.appendFile('./dist/index.html', endHTML, (err) => err ? console.log("Unexpected Problem") : '')
        }
    });
};
// Questions for Inter and Engineer Info 
const employeeQuestions = [

    {
        type: 'input',
        name: 'employeeName',
        message: 'Please Enter Your Name',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid response");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'PLease Enter Your Employee ID:',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid response");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Please Enter Your Employee email:',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid response");
            }
            return true;
        }

    },
    {
        type: 'list',
        name: 'jobTitle',
        message: "What Is Your Job Title?",
        choices: ['Engineer', 'Intern'],
    },
    {
        when: (answers) => answers.jobTitle === 'Engineer',
        type: 'input',
        name: 'githubUsername',
        message: 'Please Enter Your GitHub username:',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid response");
            }
            return true;
        }

    },
    {
        when: (answers) => answers.jobTitle === 'Intern',
        type: 'input',
        name: 'college',
        message: 'What School Are You Attending?:',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid response");
            }
            return true;
        }

    },

]

const gen = () => {
    const openHTML =
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    </head>
<body>
        <div>
            <h1> My Team </h1>
        </div>
    <div class="card-group">
    `
    fs.writeFile('./dist/index.html', openHTML, (err) => err ? console.log("Unexpected Problem") : '')
    inquirer.prompt(managerPrompt).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.mangerOffice, answers.managerEmail)
        generateManager(manager);
        moreOrStop();
    })
}

const addMember = () => {
    inquirer.prompt(employeeQuestions).then((answers) => {
        if (answers.jobTitle === 'Engineer') {
            const engineer = new Engineer(answers.employeeName, answers.employeeId, answers.githubUsername, answers.employeeEmail)
            generateEngineer(engineer);
        } else {
            const intern = new Intern(answers.employeeName, answers.employeeId, answers.college, answers.employeeEmail)
            generateIntern(intern)
        }
        moreOrStop();
    })
}

const generateManager = (manager) => {
    const manHTML = `
    <div class="card" style="width: 18rem;">
      <h5 class="card-title">${manager.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <ul>
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Office #: ${manager.getmangerOffice()}</li>
        <li class="list-group-item"><a href="mailto:${manager.getEmail()}"  class="btn btn-dark">Email</a></li>
    </ul>
    </div>`
    fs.appendFile('./dist/index.html', manHTML, (err) => err ? console.log("Unexpected Problem") : '')
};

const generateEngineer = (engineer) => {
    const engHTML = `
    <div class="card" style="width: 18rem;">
      <h5 class="card-title">${engineer.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Enigneer</h6>
      <ul>
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item"><a href="https://github.com/${engineer.getGithub()}" target="_blank"  class="btn btn-dark">GitHub</a></li>
        <li class="list-group-item"><a href="mailto:${engineer.getEmail()}"  class="btn btn-dark">Email</a></li>
    </ul>
    </div>`
    fs.appendFile('./dist/index.html', engHTML, (err) => err ? console.log("Unexpected Problem") : '')
};

const generateIntern = (intern) => {
    const intHTML = `
    <div class="card" style="width: 18rem;">
    <h5 class="card-title"> ${intern.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                <ul>
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                    <li class="list-group-item"><a href="mailto:${intern.getEmail()}" class="btn btn-dark">Email</a></li>
                </ul>
        
        </div>`
    fs.appendFile('./dist/index.html', intHTML, (err) => err ? console.log("Unexpected Problem") : '')
};



gen();