function imprimir(x) {
  if(x>0)
    console.log("Positivo");
  else
    console.log("Negativo");
}
 const readline = require('readline');

 let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('Ingrese el numero a evaluar: ',function(aux) {
   imprimir(aux);
   rl.close();
 });
