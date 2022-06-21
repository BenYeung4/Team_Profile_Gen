const Manager = require("../lib/Manager");

//creates the manager
test("creates a Manager object", () => {
  const manager = new Manager("Ben", 456, "randomemail@email.com", 33);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole()
test("employee's role", () => {
  const manager = new Manager('Ben", 456, "randomemail@email.com');
  expect(manager.getRole()).toEqual("Manager");
});
