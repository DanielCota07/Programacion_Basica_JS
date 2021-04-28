const prompt = require('prompt-sync')({sigint: true});
let max= -9999;
let min =9999
for(var i = 0;i<5;i++){
  let n = prompt('Ingrese un numero: ');
  n = Number(n);
  if(n>max){
    max=n;
  }
  if(num<min){
    min=n;
  }
}
console.log(`numero maximo: ${max}`);
console.log(`numero minimo: ${min}`);
