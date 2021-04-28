var matriz = [];
for(var i=0; i<5; i++) {
    matriz[i] = new Array(5);
}
for(var i=0; i<5; i++) {
    for(var j=0;j<5;j++){
        matriz[i][j]= Math.round(Math.random()*100) ;
    }
}
function ordenar(x,y) {
    if (x[0]==y[0]) {
        return 0;
    }
    else {
        return (x[0]<y[0])?-1:1;
    }
}
console.log(matriz.sort(ordenar));
