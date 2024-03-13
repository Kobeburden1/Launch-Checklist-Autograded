// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    const div =  document.getElementById('missionTarget');
        div.innerHTML = `
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}"> 
                 `;
        }
 
 
 function validateInput(testInput) {
    if (testInput === "") {
        return("Empty");
      } else if (isNaN(testInput)) {
        return("Not a Number");
      } else {
        return("Is a Number");
      }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(fuelLevel < 10000){
        list.style = 'visibility: block;'
        document.getElementById('launchStatus').textContent = 'Shuttle Not Ready for Launch';
        document.getElementById('fuelStatus').textContent = ' Fuel level too low for launch';
        document.getElementById('pilotStatus').textContent = `Pilot ${pilot + ''} is ready for launch`;
        document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot + ''} is ready for launch`;
        document.getElementById('launchStatus').style.color = 'red';
    } else if (cargoLevel > 10000) {
        list.style = 'visibility: block;'
        document.getElementById('cargoStatus').textContent = 'Cargo mass too heavy for launch';
        document.getElementById('launchStatus').textContent = 'Shuttle Not Ready for Launch';
        document.getElementById('pilotStatus').textContent = `Pilot ${pilot + ''} is ready for launch`;
        document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot + ''} is ready for launch`;
        document.getElementById('fuelStatus').textContent = 'Fuel level high enough for launch';
        document.getElementById('launchStatus').style.color = 'red';
    } else if (fuelLevel === 10000 && cargoLevel <= 10000) {
        document.getElementById('launchStatus').textContent = 'Shuttle is Ready for Launch';
        document.getElementById('pilotStatus').textContent = `Pilot ${pilot + ''} is ready for launch`;
        document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot + ''} is ready for launch`;
        document.getElementById('fuelStatus').textContent = 'Fuel level high enough for launch';
        document.getElementById('cargoStatus').textContent = 'Cargo mass low enough for launch';
        document.getElementById('launchStatus').style.color = 'green';
    } else if(fuelLevel < 10000 && cargoLevel > 10000){
        list.style = 'visibility: block;'
        document.getElementById('cargoStatus').textContent = ' Cargo mass too heavy for launch';
        document.getElementById('launchStatus').textContent = 'Shuttle Not Ready for Launch';
        document.getElementById('pilotStatus').textContent = `Pilot ${pilot + ''} is ready for launch`;
        document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot + ''} is ready for launch`;
        document.getElementById('fuelStatus').textContent = 'Fuel level too low for launch';
        document.getElementById('launchStatus').style.color = 'red';
    }else {
      alert('Complete for before submitting!')
    }
 }
 
 async function myFetch() {
    let planetsReturned;

  const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
  if (response.ok) {

    planetsReturned = await response.json();
    console.log(JSON.stringify(planetsReturned,null,3))
  } else {
    console.error("Failed to fetch planets", response.status, response.statusText);
  }
    
  return planetsReturned;
 }
 
 function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;