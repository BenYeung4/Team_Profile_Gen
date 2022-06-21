//generated page
const pagetemplate = require("./src/page-template");

//library
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

//node mods
const inquirer = require("inquirer");
const util = rquire("util");
const fs = rquire("fs");

//team array
const team = [];

const questions = [
  {
    type: "input",
    name: "Manager",
    message: "What is the manager's name?(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a Title for this project!");
        return false;
      }
    },
  },
];
