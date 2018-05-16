const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// + -> um ou mais - A letra do lado esquerdo do sinal de mais (+) deve ter uma ou mais ocorrência para ela.
const regex = /fogo+/gi;
console.log(texto1.match(regex));
console.log(texto2.match(regex));
console.log();

const texto3 = 'Os números: 0123456789.';
console.log(texto3.match(/[0-9]/g));
console.log(texto3.match(/\d/g));
console.log(texto3.match(/[0-9]+/g));
console.log(texto3.match(/\d+/g));
