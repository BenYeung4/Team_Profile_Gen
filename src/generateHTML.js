// Creates the manager card
const generateManager = (manager) => {
  return `
    <div class = "col-4">
        <div class = "card h-100">
            <div class = "card-header">
            <h1>${manager.name}</h1>
            <h2>Manager</h2> 
        </div>

        <div class = "card-body">
            <p class ="id"> ID: ${manager.id}</p>
            <p class ="email"> Email: <a href="mailto: ${manager.email}"</p>
            <p class ="office"> Office Number: ${manager.officNumber}</p>
        </div>
    </div>
    `;
};

// Creates the Engineer card
const generateEngineer = (engineer) => {
  return `
      <div class = "col-4">
          <div class = "card h-100">
              <div class = "card-header">
              <h1>${engineer.name}</h1>
              <h2>Engineer</h2> 
          </div>
  
          <div class = "card-body">
            <p class ="id"> ID: ${engineer.id}</p>
            <p class ="email"> Email: <a href="mailto: ${engineer.email}>"</p>
            <p class ="github"> Github: <a href = "https://github.com/${engineer.github}></p>
        </div>
    </div>
    `;
};

// Creates the Intern card
const generateIntern = (intern) => {
  return `
        <div class = "col-4">
            <div class = "card h-100">
                <div class = "card-header">
                <h1>${intern.name}</h1>
                <h2>Intern</h2> 
            </div>
    
            <div class = "card-body">
              <p class ="id"> ID: ${intern.id}</p>
              <p class ="email"> Email: <a href="mailto: ${intern.email}>"</p>
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
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>

        <body>
        <header>
          <div class="container flex-row justify-space-between align-center py-3">
          </div>
        </header>
        <main class="container my-5">
              ${employeeCards}
        </main>
        <footer class="container text-center py-3">
        </footer>
      </body>
      </html>
      `;
};

module.exports = generateHTML;
