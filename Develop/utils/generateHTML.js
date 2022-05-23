var generateEngineer = require('./generateEngineer')
var generateIntern = require('./generateIntern')

function generateHTML(manager, intern, engineer) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <title>My Team</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo center">My Team</a>
            </div>
          </nav>
    
        <div class="row">
            <div class="col s12 m7">
              <div class="card">
                <div class="card-content">
                <h1>Manager ${manager.name}</h1>
                  <ul>
                    <li>Id: ${manager.id}</li>
                    <li>Email: ${manager.email}</li>
                    <li>Office Number: ${manager.officeNumber}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          ${generateEngineer(engineer)}
          ${generateIntern(intern)}
    </body>
    </html>`
}

module.exports = generateHTML