const Engineer = require("../lib/Engineer");

//creates the Engineer test
test("creates a Engineer object", () => {
  const engineer = new Engineer(
    "Ben",
    456,
    "randomemail@email.com",
    "githubrepository"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

//test getGithub()
test("employee's github", () => {
  const engineer = new Engineer(
    "Ben",
    456,
    "randomemail@email.com",
    "githjube"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// getRole()
test("employee's role", () => {
  const engineer = new Engineer('Ben", 456, "randomemail@email.com');
  expect(engineer.getRole()).toEqual("Engineer");
});
