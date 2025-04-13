// Objeto para armazenar os códigos

const codes = [
    {
        title: "FizzBuzz",
        path: "Questoes JS/FizzBuzz.js"
    },
    {
        title: "Números Primos",
        path: "Questoes JS/NumerosPrimos.js"
    },
    {
        title: "Números Perfeitos",
        path: "Questoes JS/NumerosPerfeitos.js"
    }
];

// constantes para os códigos a serem exibidos
const codeList = document.getElementById('code-list');
const codeDisplay = document.getElementById('code-display');

// forEach para os códigos e botão para exibir
codes.forEach((item) => {
    const btn = document.createElement('button');
    btn.textContent = item.title;
    btn.addEventListener('click' ,() => {
        fetch(item.path)
            .then(response => response.text())
            .then(text => {
                codeDisplay.textContent = text;
            })
            .catch(err => {
                codeDisplay.textContent = "Erro ao carregar o código.";
                console.error(err);
            });
    });
    codeList.appendChild(btn);
});