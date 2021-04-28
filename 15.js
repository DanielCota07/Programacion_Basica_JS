const prompt = require('prompt-sync')({sigint: true});
let n = prompt('Ingrese un numero: ');
n = Number(n);
let n1 = prompt('Ingrese otro numero: ');
n1 = Number(n1);

var contador=0;
var pares=0;
var totalImpartes=0;

if(n1<n){
  var max=n;
  var min=n1;
}
else {
  var max=n1;
  var min=n;
}

for(var i=min;i<=max;i++)
{
  console.log(i);
  contador++;
  if(i%2!=0)
    totalImpartes=totalImpartes+i;
  else {
    pares++;
  }
}

console.log("Hay "+contador+" numeros");
console.log("Hay "+pares+" numeros pares");
console.log("La suma de los numeros impartes es: "+totalImpartes);
