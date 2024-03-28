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

window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona

const h1Selecionado = document.querySelector('h1') // Seleciona o primeiro h1.
document.body; // Retorna o body.

/*
    window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.
*/