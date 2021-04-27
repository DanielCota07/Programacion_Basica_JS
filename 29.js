let dado1=0, dado2=0;
let contador=0;
for(var i=0;i<100;i++)
{
  dado1=Math.round(Math.random()*(6-1)+1);
  dado2=Math.round(Math.random()*(6-1)+1);
  if(dado1+dado2==10)
    contador++;
  console.log(dado1, " ", dado2);
}
console.log("La suma de los dados fue igual a 10 ", contador, " Veces")
