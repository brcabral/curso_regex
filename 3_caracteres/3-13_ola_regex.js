const texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR';
const regex = /casa/gi;

console.log('Regex casa:',texto.match(regex));
console.log('Regex a b:',texto.match(/a b/));
