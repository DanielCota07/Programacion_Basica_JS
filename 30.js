
const prompt = require('prompt-sync')({sigint: true});
let x = prompt('Ingrese el primer numero: ');
x = Number(x);
let y = prompt('Ingrese el segundo numero: ');
y = Number(y);

console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. División");

let z = prompt('Ingrese la operacion qu desea realizar: ');
z = Number(z);

switch (z) {
    case 1:
        console.log(x + y)
        break;
    case 2:
        console.log(x - y)
        break;
    case 3:
        console.log(x * y)
        break;
    case 4:
        console.log(x / y)
        break;
    default:
        break;
}
