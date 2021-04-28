function imprimir(x) {
  if(x=='S'||x=='N')
    console.log("Entrada valida")
  else {
    return -1;
  }
}
 const readline = require('readline');

 let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('Ingrese S o N: ',function(aux) {
   imprimir(aux);
   rl.close();
 });
