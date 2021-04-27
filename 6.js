function imprimir(x) {
  for(let i=0;i<=x;i++)
  {
    console.log(i);
  }
}
 const readline = require('readline');

 let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('Ingrese el numero mayor: ',function(aux) {
   imprimir(aux);
   rl.close();
 });
