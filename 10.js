function imprimir(x) {
  if(x%2==0)
    console.log("Par");
  else
    console.log("Impar");
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
