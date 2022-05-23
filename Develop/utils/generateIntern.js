var internCards = [];

function generateIntern(intern){
    for (let i = 0; i < intern.length; i++) {
        var card=`<div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-content">
        <h1>Engineer: ${intern[i].name}</h1>
          <ul>
            <li>Id: ${intern[i].id}</li>
            <li>Email: ${intern[i].email}</li>
            <li>Office Number: ${intern[i].github}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`
        internCards.push(card);
    // console.log(engineerCards)
      }
    return internCards.join("");
    
}

module.exports = generateIntern