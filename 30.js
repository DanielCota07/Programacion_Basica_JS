function imprimir(x,y,z) {

  switch (z) {
      case "1":
          console.log(x + y)
          break;
      case "2":
          console.log(x - y)
          break;
      case "3":
          console.log(x * y)
          break;
      case "4":
          console.log(x / y)
          break;
      default:
          break;
  }
}
 const readline = require('readline');

 let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 console.log("1. Suma");
 console.log("2. Resta");
 console.log("3. Multiplicacion");
 console.log("4. División");

 rl.question('Ingrese el numero mayor: ',function(aux,aux2, aux3) {
   imprimir(aux,aux2,aux3);
   rl.close();
 });
