// Criar uma função que exibe a quantidade de * de uma linha

exibirAsteriscos(20);

function exibirAsteriscos(linhas) {
    for(let linha = 1; linha <= linhas; linha++){
        let padrao ='';
        for(let i=0; i<linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}