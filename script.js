// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function (){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json){
            const div = document.getElementById("missionTarget");
            const jsonRandom = json[Math.floor(Math.random() * json.length)];
            div.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${jsonRandom.name}</li>
                  <li>Diameter: ${jsonRandom.diameter}</li>
                  <li>Star: ${jsonRandom.star}</li>
                  <li>Distance from Earth: ${jsonRandom.distance}</li>
                  <li>Number of Moons: ${jsonRandom.moons}</li>
               </ol>
               <img src="${jsonRandom.image}">`
         });
      });
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event){
      
      event.preventDefault();

      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      let submit = document.getElementById("formSubmit");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let faultyItems = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let launchStatus = document.getElementById("launchStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      
      if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required");
      } else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) || !(isNaN(pilotInput.value)) || !(isNaN(copilotInput.value))){
         alert("Invalid Input");
      } else {
         //Rest of the code, updating the list
         pilotStatus.innerHTML = `${pilotInput.value} Ready`;
         copilotStatus.innerHTML = `${copilotInput.value} Ready`;

         if (fuelLevelInput.value < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Not enough fuel for the journey";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         } else if (cargoMassInput.value > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo too heavy for liftoff";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         } else {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
         }

      }
      
   });
});
