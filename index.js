//generated page
//const pagetemplate = require("./src/page-template");

//library
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

//node mods
const inquirer = require("inquirer");

const util = require("util");
const fs = require("fs");

//team array
//const team = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "What is the manager's name?(Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Manager's name please");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter Manager's ID (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's ID number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter Manager's email (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter Manager's email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter Manager's office number (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter Manager's office number");
            return false;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamData.push(manager);
      console.log(manager);
    });
};

const promptEmployee = (teamData) => {
  if (!teamData.team) {
    teamData.team = [];
  }

  console.log(`
  =================
  Add a Team
  =================
  `);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the new employee's role?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please enter new employee's name(Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Enter employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee's ID # (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's ID #");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's email (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter employee's email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter employee's github username (Required)",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter employee's github username");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter employee's school (Required)",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter employee's school");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "AddEmployee",
        message: "Add more team members?",
        default: false,
      },
    ])
    .then((employeeInfo) => {
      let { name, id, email, role, github, school, AddEmployee } = employeeInfo;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }

      teamData.push(employee);

      if (AddEmployee) {
        return AddEmployee(teamData);
      } else {
        return teamData;
      }
    });
};

//funtion to generate HTML
// const generateHTML = (data) => {
//   fs.generateHTML("./dist/index.html", data, (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     } else {
//       console.log("team has been created");
//     }
//   });
// };

promptManager()
  .then(promptEmployee)
  .then((teamData) => {
    return page - template(teamData);
  })
  .then((pageHTML) => {
    return fs.writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
