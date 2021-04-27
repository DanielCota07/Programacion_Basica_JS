function imprimir(x) {
 for(var i=1;i<=10;i++)
 {
   console.log(x,"X", i, "=", i*x);
 }
}
 const readline = require('readline');

 let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('Ingrese la tabla de multiplicar que desea visualizar: ',function(aux) {
   imprimir(aux);
   rl.close();
 });
