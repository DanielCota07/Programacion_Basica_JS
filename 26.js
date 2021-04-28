const prompt = require('prompt-sync')({sigint: true});

let n = prompt('Ingrese su frase: ');
n = String(n);
var center = require('center-align');
console.log(center(n, 145));
