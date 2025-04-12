// Criar uma função para mostrar os números primos

exibirNumerosPrimos(10);

function exibirNumerosPrimos(limite) {
    for(let numero = 2; numero <= limite; numero++) {
        let ePrimo = true;
        for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
            if(numero % divisor === 0) {
                ePrimo = false;
                break;
            }
        }
        if (ePrimo) console.log(numero);
    }
}