const Employee = require("../lib/Employee.js");

test("creates a employee object", () => {
  const employee = new Employee("class");

  expect(employee.name).toBe("class");
  expect(employee.value).toEqual(expect.any(Number));
});

//name
//id
//email
//getName()
//getId()
//getEmail()
//getRole()
//return employee
