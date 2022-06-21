const Employee = require("../lib/Employee");

//creates employee test
test("creates a employee object", () => {
  const employee = new Employee("Ben", 456, "randomemail@email.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

//getName()
test("retrieve employee name", () => {
  const employee = new Employee("Ben", 456, "randomemail@email.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

//getId()
test("retrieve employee ID", () => {
  const employee = new Employee("Ben", 456, "randomemail@email.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

//getEmail
test("retrieve employee Email", () => {
  const employee = new Employee("Ben", 456, "randomemail@email.com");

  expect(employee.getEmail()).toEqual(expect.any(String));
});

//getRole
test("retrieve employee role", () => {
  const employee = new Employee("Ben", 456, "randomemail@email.com");

  expect(employee.getRole()).toEqual("Employee");
});
