class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //return name from input
  getName() {
    return this.name;
  }

  //returning ID from input
  getId() {
    return this.id;
  }

  //returning Email from input
  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
