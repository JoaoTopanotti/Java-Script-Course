// Crie uma função que define objetos chamando a função

function criaCelular(marcaCelular, ram, processador, bateria) {
    return {
        marcaCelular,
        ram,
        processador,
        bateria
    }
}

const celular1 = criaCelular('Samsung', 12, 'Zen4', 6000);
console.log(celular1);