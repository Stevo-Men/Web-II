

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



var tableBody = document.getElementById("table");

 personnes.forEach((rowData, i) => {
    var row = tableBody.insertRow();

   
    row.insertCell(0).innerHTML = rowData.prenom;
    row.insertCell(1).innerHTML = rowData.nom;
    row.insertCell(2).innerHTML = rowData.genre;


    console.log(i);
}
)




