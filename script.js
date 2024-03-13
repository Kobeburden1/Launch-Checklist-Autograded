// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    let listedPlanets; 
    let listedPlanetsResponse = myFetch(); 
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        const randomPlanet = pickPlanet(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter,randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.imageUrl);
        formSubmission();
    })
    event.preventDefault()
 });
 // eventlistner and event.prevent() 