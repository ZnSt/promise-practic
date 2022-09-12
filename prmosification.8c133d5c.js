var makePromise=function(){return new Promise((function(n,o){Math.random()>.5&&n("this is resolve"),o("error!!!")}))};makePromise().then((function(n){return console.log(n)})).catch((function(n){return console.log(n)}));
//# sourceMappingURL=prmosification.8c133d5c.js.map
