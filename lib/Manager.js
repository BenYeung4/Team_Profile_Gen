const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //using Employee constructor
    super(name, id, email);
    //return office number
    this.officeNumber = officeNumber;
  }
  //return getRole()
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
