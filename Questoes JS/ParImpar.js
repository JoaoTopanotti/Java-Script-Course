// Receber uma quantidade de valores para avaliar
// Função exive se cada valor é par ou impar

let imparPar = exibirTipo(0);
console.log(imparPar);

function exibirTipo (numero){
    if (numero % 2 === 0)
        return "Par";
    if (numero % 2 !== 0)
        return "Impar"
}