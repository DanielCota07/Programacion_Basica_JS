let contador2=0;
let contador3=0;
for(var i=1;i<=100;i++)
{
  if(i==1)
    i++;
  else
  {
    console.log(i);
    i=i+2;
    contador2++;
  }
}
console.log("Hay", contador2, "multiplos de 3");
for(var i=1;i<=100;i++)
{
  if(i!=1)
  {
    console.log(i);
    i++;
    contador3++;
  }
}

console.log("Hay", contador3, "multiplos de 2");
