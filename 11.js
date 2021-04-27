function imprimir(x) {
  for(var i=1;i<=x;i++)
  {
    if(i==1)
      i++;
    else
    {
      console.log(i);
      i=i+2;
    }
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
