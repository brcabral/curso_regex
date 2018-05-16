const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// ? -> zero ou mais - A letra do lado esquerdo do asterisco pode pode não ter ocorrência ou pode ter várias ocorrências.
const regex = /fogo*/gi;
console.log(texto1.match(regex));
console.log(texto2.match(regex));
