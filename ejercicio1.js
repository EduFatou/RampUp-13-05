function cuentaLetras(frase, letra){
    let total = 0;
    for (let i = 0; i < frase.length; i++){
        if ( frase[i] === letra){
            total++;
        }
    }
    return total;
}
cuentaLetras('hola', 'o');