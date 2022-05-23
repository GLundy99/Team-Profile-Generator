var engineerCards = [];

function generateEngineer(engineer){
    for (let i = 0; i < engineer.length; i++) {
        var card=`<div class="row">
    <div class="col s12 m7">
        <div class="card">
            <div class="card-content">
                <h1>Engineer: ${engineer[i].name}</h1>
                <ul>
                    <li>Id: ${engineer[i].id}</li>
                    <li>Email: ${engineer[i].email}</li>
                    <li>Office Number: ${engineer[i].github}</li>
                </ul>
            </div>
        </div>
    </div>
   </div>`
        engineerCards.push(card);
    console.log(engineerCards)
    }
    return engineerCards.join("");
}

module.exports = generateEngineer