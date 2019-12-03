const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// specify where the output should go
const pathToFile = path.resolve(__dirname, "output", "team.html");
// requiring htmlRender file so that we can access the render function inside that file
const render = require("./lib/htmlRender");
const teamMembers = [];



function appMenue() {
    function createManager() {
        console.log("Build your Team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager name?"
            }
            ,   {
                type: "input",
                name: "managerId",
                message: "What is the manager id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager Email?"
            },
            {
                type: "input",
                name: "managerNumber",
                message: "What is the manager office number?"
            }

        ]).then(answer => {
            const manager = new Manager(answer.managerName,answer.managerId,answer.managerEmail, answer.managerNumber);
            teamMembers.push(manager);
            createTeam();
        })
    }

    function createTeam()
    {
        inquirer.prompt([
            {
                type: "list",
                name: "managerChoice",
                message: "What type of team would you like to build?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more"
                ]
            }

        ]).then(choice => {
            switch(choice.managerChoice){
                case "Engineer" : addEngineer();
                                    break;
                case "Intern" : addIntern();
                                    break;
                // case "I don't want to add any more" : buildTeam();
                //                     break;
               default: buildTeam();
            }
        })
    }
    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "enginnerName",
                message: "What is the Enginner name?"
            }
            ,   {
                type: "input",
                name: "enginnerID",
                message: "What is the Enginner id?"
            },
            {
                type: "input",
                name: "enginnerEmail",
                message: "What is the Enginner Email?"
            },
            {
                type: "input",
                name: "enginnerGitHub",
                message: "What is the Enginner GitHub username"
            }

        ]).then(answer => {
            const engineer = new Engineer(answer.enginnerName,answer.enginnerID,answer.enginnerEmail, answer.enginnerGitHub);
            teamMembers.push(engineer);
            createTeam();
        })

    }
    function addIntern(){

        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the Intern name?"
            }
            ,   {
                type: "input",
                name: "internId",
                message: "What is the Intern id?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the Intern Email?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the Intern School Name"
            }

        ]).then(answer => {
            const intern = new Intern(answer.internName,answer.internId,answer.internEmail, answer.internSchool);
            teamMembers.push(intern);
            createTeam();
        })

    }
    function buildTeam(){
        fs.writeFileSync(pathToFile,render(teamMembers), "utf-8");
    }
    createManager();

}

appMenue();