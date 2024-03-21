

var personnes = [
    {
    
        "prenom": "Jean",
        "nom": "Dupont",
        "genre": "homme",
        "DA": "2066729"
    },
    {
        "prenom": "Pierre",
        "nom": "Durand",
        "genre": "homme",
        "DA": "2066729"
    },
    {
        "prenom": "Steve",
        "nom": "Ménard",
        "genre": "homme",
        "DA": "2066729"
    }]

document.getElementById("table-body").innerHTML = "test"
tableBody.innerHTML = `
    <tr>
        <th scope="row">1</th>
        <td>${personnes[0].prenom}</td>
        <td>${personnes[0].nom}</td>
        <td>${personnes[0].genre}</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>${personnes[1].prenom}</td>
        <td>${personnes[1].nom}</td>
        <td>${personnes[1].genre}</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>${personnes[2].prenom}</td>
        <td>${personnes[2].nom}</td>
        <td>${personnes[2].genre}</td>
    </tr>
`;

var tableBody = document.getElementById("table");

 personnes.forEach((rowData, i) => {
    var row = tableBody.insertRow(i);

   
    row.insertCell(0).innerHTML = rowData.prenom;
    row.insertCell(1).innerHTML = rowData.nom;
    row.insertCell(2).innerHTML = rowData.genre;

}
)

