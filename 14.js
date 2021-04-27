function imprimir(x) {
  for(let i=0;i<5;i++)
  {
    console.log(i);
  }
}
 const readline = require('readline');

 let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
for(var i=0;i<5;i++)
{
  rl.question('Ingrese un valor: ',function(aux) {
    imprimir(aux);
    rl.close();
  });
}
