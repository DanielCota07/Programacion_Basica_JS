const readline = require('readline');
let cont = 0;
let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Ingrese su frases');
console.log('Ingrese Exit para salir');
interfazCaptura.setPrompt('');
interfazCaptura.prompt();
interfazCaptura.on('line',function(aux){
    aux = aux.trim();
    if(aux==='Exit'){
        interfazCaptura.close();
        return;
    }else{
        aux = Number(aux);
        cont++;
    }
});
interfazCaptura.on('close',function(){
    console.log(`Usted ingreso ${cont} frases`);
    process.exit(0);
})
