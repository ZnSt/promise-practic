var horses=["Tilda","Mad","Killian","Joseph","Moorley"];function run(n){return new Promise((function(o,e){var t=getRandomTime(2e3,3500);setTimeout((function(){o(n,t)}),t)}))}function getRandomTime(n,o){return Math.floor(Math.random()*(o-n+1)+n)}run("Mango").then((function(n){return console.log(n)})).catch((function(n){return console.log(n)}));
//# sourceMappingURL=racetrack.7817b8c1.js.map
