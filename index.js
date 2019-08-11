const tasse = require('./tasse');

console.log("Tasse per 1000€: ", tasse(1000, "IRPEF"));
console.log("Tasse per 15.000€: ", tasse(15000, "IRPEF"));
console.log("Tasse per 20.000€: ", tasse(20000, "IRPEF"));
console.log("Tasse per 60.000€: ", tasse(60000, "IRPEF"));
console.log("Tasse per 100.000€: ", tasse(100000, "IRPEF"));
