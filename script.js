let planetsButton = document.getElementById("planetsBtn");
let planetsTable = document.getElementById("planets")
let pageCounter = 1;
planetsButton.addEventListener('click', function () {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://swapi.dev/api/planets/?page=" + pageCounter);
    xhr.onload = function () {
        console.log("Request is sent!");
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Request successful!");
            let globalResponse = JSON.parse(xhr.response);
            creatTabel(globalResponse);
        } else {
            console.log(xhr.responseText);
            alert("We connected to the server, but it returned an error.")
        }
    };
    xhr.send();
    pageCounter++;
    if (pageCounter === 2) {
        planetsButton.innerText = "NEXT 10"
    }
    else if (pageCounter > 2) {
        planetsButton.innerText = "PREVIOUS 10";
        pageCounter = 1;
    }

});
function creatTabel(data) {
    planetsTable.innerHTML = "";
    let planetsHeader = document.createElement('thead');
    let planetsName = document.createElement('th');
    planetsName.innerText = "Planets Names";

    let population = document.createElement('th');
    population.innerText = "Population";

    let climate = document.createElement('th');
    climate.innerText = "Climate"

    let gravity = document.createElement('th');
    gravity.innerText = "Gravity";

    planetsTable.appendChild(planetsHeader);
    planetsHeader.appendChild(planetsName);
    planetsHeader.appendChild(population);
    planetsHeader.appendChild(climate);
    planetsHeader.appendChild(gravity);
    let tableBody = document.createElement("tbody");
    planetsTable.appendChild(tableBody);

    for (i = 0; i < 10; i++) {
        console.info(data.results[i].name);
        tableBody.innerHTML += `<tr><td> ${data.results[i].name} </td> 
        <td> ${data.results[i].population} </td>
        <td> ${data.results[i].climate} </td> 
        <td> ${data.results[i].gravity} </td><tr> `;
    }

};

