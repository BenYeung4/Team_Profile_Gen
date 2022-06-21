const inquirer = require("inquirer");

const pagetemplate = require("./src/page-template");

const util = rquire("util");
const fs = rquire("fs");

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
