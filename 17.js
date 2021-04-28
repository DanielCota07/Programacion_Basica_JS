let myArray=[1,6,18,30,42,42,43,44,45,46,50];
let contador=0;
let total=0;
for (var i=0;i<=myArray.length;i++)
{
  if(myArray[i]%2==0)
    {
      console.log(myArray[i]);
      contador++;
      total=total+myArray[i];
    }
}
console.log("Hay "+contador+" multiplos de 2");
console.log("La suma de los multiplos es "+total);
