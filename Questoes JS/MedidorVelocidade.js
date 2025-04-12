// Velocidade máxima de até 70
// A cada 5km/hr acima do limite = 1 ponto na carteira
// Math.floor() - arredonda decimais
// Caso pontos > 12 = "carteira suspensa"

verificarVelocidade (71);

function verificarVelocidade (velocidade) {
    const velocidadeMaxima = 70;
    const divisor = 5;
    if (velocidade <= velocidadeMaxima)
        console.log("Velocidade Permitida");
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima)/ divisor);
        if (pontos >= 12)
            console.log("Carteira Suspensa");
        if (pontos <= 0)
            console.log("Dentro do limite de erro!");
        else {
            console.log("Pontos na carteira: ",pontos)
        }
    }
}