// Criar uma função para mostrar os números primos

exibirNumerosPerfeitos(100000000);

function exibirNumerosPerfeitos(limite) {
    for(let numero = 2; numero <= limite; numero++) {
        let soma = 0;
        for (let divisor = 1; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                soma += divisor;
            }
        }
        if (soma === numero){
            console.log(numero);
        }
    }
}