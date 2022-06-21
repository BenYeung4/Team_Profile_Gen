const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //using Employee constructor
    super(name, id, email);
    //school
    this.school = school;
  }
  //return getSchool
  getSchool() {
    return this.school;
  }

  //return getRole()
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
