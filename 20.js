function imprimir(x) {
  var total = 1;
  for(let i=1;i<=x;i++)
  {
    total=total*i;
  }
  console.log(total)
}
 const readline = require('readline');

 let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('Ingrese el numero a evaluar: ',function(aux) {mayor
   imprimir(aux);
   rl.close();
 });
