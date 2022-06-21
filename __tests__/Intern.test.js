const Intern = require("../lib/Intern");

//creates the intern test
test("creates a Intern object", () => {
  const intern = new Intern("Ben", 456, "randomemail@email.com", "Columbia");

  expect(intern.school).toEqual(expect.any(String));
});

//test getSchool()
test("intern's school", () => {
  const intern = new Intern("Ben", 456, "randomemail@email.com", "Columbia");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// getRole()
test("employee's role", () => {
  const intern = new Intern('Ben", 456, "randomemail@email.com');
  expect(intern.getRole()).toEqual("Intern");
});
