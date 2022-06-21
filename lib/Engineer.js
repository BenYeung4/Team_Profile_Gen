const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    //using Employee constructor
    super(name, id, email);
    //github username
    this.github = github;
  }
  //return github username
  getGithub() {
    return this.github;
  }

  //return role
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
