function imprimir(x){
  console.log("Tabla de multiplicar: ");
  for(let i=0;i<=10;i++)
  {
    console.log(x,"X", i, "=", i*x);
  }
  console.log("Factorial: : ")
  var total = 1;
  for(let i=1;i<=x;i++)
  {
    total=total*i;
  }
  console.log(total)
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
