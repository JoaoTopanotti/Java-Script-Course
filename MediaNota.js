// Obter nota média a partir de um array

// 0-49: F
// 50-59: E
// 60-69: D
// 69-79: C
// 79-89: B
// 90-100: A

const array = [100,90,100];
console.log (mediaAluno(array));

function mediaAluno(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    const media = soma/(notas.length);
    if (media < 50) return "F";
    if (media < 60) return "E";
    if (media < 70) return "D";
    if (media < 80) return "C";
    if (media < 90) return "B";
    return "A";
}
