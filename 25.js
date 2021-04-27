function imprimir(x) {
  const romanos={
    M: 1000, CM: 900, D: 500,
    CD: 400, C: 100, XC: 90, L: 50,
    XL: 40, X: 10, IX: 9,
    V: 5, IV: 4, I: 1
  }
  let resultado = "";
  for(let r in romanos) {
    resultado += r.repeat( Math.floor( x / romanos[r]) );
    x = x % romanos[r];
  }
  console.log(resultado);
}
 const readline = require('readline');

 let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('Ingrese el numero a transformar: ',function(aux) {
   imprimir(aux);
   rl.close();
 });
