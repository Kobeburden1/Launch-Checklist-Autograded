// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
    let listedPlanets = {}; 
    let listedPlanetsResponse = myFetch(); 
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        const randomPlanet = pickPlanet(listedPlanets);

        
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);

    })

    document.addEventListener("submit", function (event) {
        event.preventDefault();
        formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass)

        const faultyItems = document.querySelector('faultyItems')
        const pilotName = document.querySelector('input[name=pilot]').value
        const copilotName = document.querySelector('input[name=copilot]').value
        const fuelLevel = Number(document.querySelector('input[name=fuelLevel]').value)
        const cargoMass = Number(document.querySelector('input[name=cargoMass]').value)
    });
});
 // eventlistner and event.prevent() 