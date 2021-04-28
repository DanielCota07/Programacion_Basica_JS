const prompt = require('prompt-sync')({sigint: true});

let n = prompt('Ingrese su frase: ');
n = String(n);
var contador = 0;

for (var i = 0; i < n.length; i++) {
    if (n.charAt(i) =='i') {
        contador++;
    }
}
console.log(contador);
