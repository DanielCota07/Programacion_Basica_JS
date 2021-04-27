function imprimir(x){
  var aux=0;
  console.log("Es primo?: ")
  for( let i = 2; i<x;i++)
    if (x%i==0)
      aux++;
  if(aux==0)
    console.log("Si")
  else {
    console.log("No")
  }
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
