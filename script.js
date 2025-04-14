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
        title: "Contador de Astericos",
        path: "Questoes JS/ContadorAsteriscos.js"
    },
    {
        title: "Encontra String",
        path: "Questoes JS/EncontraString.js"
    },
    {
        title: "Factory Function",
        path: "Questoes JS/FactoryFunction.js"
    },
    {
        title: "Media de nota",
        path: "Questoes JS/MediaNota.js"
    },
    {
        title: "Radar de Velocidade",
        path: "Questoes JS/MedidorVelocidade.js"
    },
    {
        title: "Par e Impar",
        path: "Questoes JS/ParImpar.js"
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
                Prism.highlightElement(codeDisplay);
            })
            .catch(err => {
                codeDisplay.textContent = "Erro ao carregar o código.";
                console.error(err);
            });
    });
    codeList.appendChild(btn);
});

// botão de cópia
const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', () => {
    const code = document.getElementById('code-display').textContent;
navigator.clipboard.writeText(code).then(() => {
    copyButton.textContent = '✅ Copiado!';
    setTimeout(() => copyButton.textContent = '📋 Copiar código', 2000);
    });
});