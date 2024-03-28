// Document Object Model (DOM)
// É uma interface que representa documentos HTML e XML através
// de objetos. Com ela é possivel manipular a estrutura, estilo e conteúdo destes docuemntos.

console.log(window);
// window é o objeto global do browser.
// possui diferentes métodos e propriedades.

console.log(window.innerHeight); // retorna a altura do browser.

const href = window.location.href;

console.log(href);

// Window e Document.
// São objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

// window.alert('Isso é um alerta');
// alert('Isso é um alerta'); // Funciona

const h1Selecionado = document.querySelector('h1') // Seleciona o primeiro h1.
// document.body; // Retorna o body.

/*
    window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.
*/

// NODE
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades.
// Element é um tipo de objeto NODE.

const titulo = document.querySelector('h1');

console.log(titulo.innerText); // retorna o texto;
console.log(titulo.classList); // retorna as classes;
console.log(titulo.namedItem); // retorna o id;
console.log(titulo.offsetHeight); // retorna a altura do elemento;

titulo.addEventListener('click', function(){
    console.log('Clicou em', titulo.innerText)
});
// Ativa a função callback ao clicar no titulo;


// Exercícios 

// Retorna o url da página autual utilizando o objeto window
const mostraPaginaAtual = window.location.href;
console.log(`Pagina atual ${mostraPaginaAtual}`);

// Selecione o primeiro elemento da pagina que possua a classe ativo (querySelector seleciona o primeiro elemento que ele encontra)
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo);

// Retorna a linguagem do navegador
console.log(window.navigator.language)

// Retorne a largura da janela
console.log(window.innerHeight);