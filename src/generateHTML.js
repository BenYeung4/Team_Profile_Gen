// Creates the manager card
const generateManager = (manager) => {
  return `
    <div class = "card flex flex-wrap gap-4 border">
        <div class = "card">
          <div class = "card-header">
            <h1>${manager.name}</h1>
            <h2>Manager</h2> 
          </div>
          <div class = "card-body">
            <p class ="id"> ID: ${manager.id}</p>
            <p class ="email"> Email: <a href="mailto: ${manager.email}">${manager.email}</a></p>
            <p class ="office"> Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
};

// Creates the Engineer card
const generateEngineer = (engineer) => {
  return `
      <div class = "card flex flex-wrap gap-4 border">
          <div class = "card">
              <div class = "card-header">
              <h1>${engineer.name}</h1>
              <h2>Engineer</h2> 
          </div>
  
          <div class = "card-body">
            <p class ="id"> ID: ${engineer.id}</p>
            <p class ="email"> Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
            <p class ="github"> Github: <a href = "https://github.com/${engineer.github}"> ${engineer.github} </a></p>
        </div>
    </div>
    `;
};

// Creates the Intern card
const generateIntern = (intern) => {
  return `
        <div class = "card flex flex-wrap gap-4 border">
            <div class = "card">
                <div class = "card-header">
                <h1>${intern.name}</h1>
                <h2>Intern</h2> 
            </div>
    
            <div class = "card-body">
              <p class ="id"> ID: ${intern.id}</p>
              <p class ="email"> Email: <a href="mailto: ${intern.email}">${intern.email}</a></p>
              <p class ="school"> School: ${intern.school}</p>
          </div>
      </div>
      `;
};

generateHTML = (data) => {
  //card arrays
  employeeGroup = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const position = employee.getRole();

    //manager
    if (position === "Manager") {
      const managerID = generateManager(employee);

      employeeGroup.push(managerID);
    }

    //engineer
    if (position === "Engineer") {
      const engineerID = generateEngineer(employee);

      employeeGroup.push(engineerID);
    }

    //intern
    if (position === "Intern") {
      const internID = generateIntern(employee);

      employeeGroup.push(internID);
    }
  }

  //join the strings
  const employeeCards = employeeGroup.join("");

  //return the cards
  const generateTeams = generateTeamGroup(employeeCards);
  return generateTeams;
};

//html template
const generateTeamGroup = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
    <head>
      <meta charset = "UTF-8">
      <meta name = "viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header class="">
        <h1>Team Profile</h1>
      </header>

      <main>
        <div class = "container">
          <div class = "row justify-content-center" id ="team-cards">
            <!--Cards-->
            ${employeeCards}
          </div>
        </div>
      </main>

    </body>
  </html>
  `;
};

module.exports = generateHTML;
