const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';
const regexNove = RegExp('9');

console.log('Métodos da RegExp...');
//Exibe o texto 9 (regexNove) dentro da variável texto.
console.log(regexNove.test(texto));
//Exibe a posição em que foi encontrado o texto 9 (regexNove)
console.log(regexNove.exec(texto));
console.log();

const regexLetras = /[a-f]/g;
console.log('Métodos da string...');
//Exibe todos os caracteres de acordo com a expressão passada em regexLetras
console.log(texto.match(regexLetras));
//Exibe a posição do primeiro elemento da expressão passada em regexLetras
console.log(texto.search(regexLetras));
//Substitui todos os elementos da expressão passada em regexLetras pelo parâmetro passado
console.log(texto.replace(regexLetras, 'Achei'));
//Cria vários arrays separando-os de acordo com os elementos da expressão passada em regexLetras
console.log(texto.split(regexLetras));
