// //Treinamento 01
 let idade = 20;
 let nome = "Joao";
 let altura = 182;
 console.log(nome);
 console.log(idade);
 console.log(altura);

//Treinamento 02
 const valorIngressoAdulto = 20; //Const não altera variavel
 let valorIngressoMirim = 10; //let pode alterar variavel
 valorIngressoMirim = 15;
 console.log(valorIngressoMirim);
 console.log(valorIngressoAdulto);

//Treinamento 03
let nome1 = 'Gabriel'; //string literal
let idade1 = 25; //number literal
let estaAprovado = true; //boolean
let sobrenome = undefined; //undefined
let corSelecionado = null; //redefinir valor

//treinamento 04
let pessoa = {  //objeto
    nome: 'Kevin',
    sobrenome: 'Henrique',
    nascimento: '09/11/2004',
    cpf: '000.000.000-00',
    matricula: 1,
}; 

//treinamento 05
let idades = [10,50,23,19];
console.log(idades[3]);

//treinamento 05
let corSite = "verde";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
};
console.log(corSite);
resetaCor("vermelho", "escuro");
console.log(corSite);

//treinamento 06 

//operadores aritiméticos (+ - / * **)
let salario = 1500;
console.log (salario + salario);
console.log (salario - 300);
console.log (salario * 1.5);
console.log (salario / 2);
console.log (salario ** 1.01);
//soma e diminui 1
console.log (salario++); //soma depois do log   
console.log (salario);
console.log (--salario); //soma antes do log

//operadores de igualdade
//igualdade estrita
console.log ( 1 === 1);
console.log ( '1' === 1);
//igualdade solta
console.log ('1' == 1 );
console.log (1 == 1 );

//operador ternário
let pontosCartao = 100;
let tipo = pontosCartao > 100 ? 'premium' : 'comum';
console.log (tipo);

//operadores lógicos (&& || !)
let maiorIdade = true;
let carteiraTrabalho = true;
let verificacao = maiorIdade && carteiraTrabalho;
console.log (verificacao);

let pj = false;
let clt = true;
let verificacao2 = pj || clt;
console.log ('Apto a trabalhar: ', verificacao2);

let podeTrabalhar = !verificacao2;
console.log ('Pode trabalhar: ', podeTrabalhar); 

//treinamento 07

const hora = new Date();
console.log(hora);
if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}

//treinamento 08
//switch case

let permissao;
permissao = "";
switch (permissao) {
    case 'comum':
        console.log('Usuário comum');
        break;
    case 'gerente':
        console.log('Usuário gerente');
        break;
    case 'diretor':
        console.log('Usuário diretor');
        break;
    default: 
    console.log('Usuário não reconhecido');
}

//treinamento 09
//loops: for, while, do..while, for..in, for..of

//for
for(let i = 1;i <= 5; i++) {
    console.log('estou aprendendo', i);
}

//while
let i = 5;
while (i >= 1) {
    if(i % 2 !== 0){
        console.log (i);
    }
    i--;
}

//do..while
let j = 0;
do {
    console.log('digitando', j);
    j++;
} while (j <= 10);

//for..in
const colaborador = {
    nome: 'Joao',
    idade: 20
};
for (let chave in colaborador) {
    console.log(chave,colaborador[chave]);
}

//for..of
const cores = ['Vermelho', 'Azul']
for(let cor of cores) {
    console.log(cor);
}

// Escreva uma função que usa 2 números e retorna o maior valor entre eles
function maiorNumero(a, b) {
    return a < b ? b : a;
}

console.log(maiorNumero(10, 5));
console.log(maiorNumero(10, 12));