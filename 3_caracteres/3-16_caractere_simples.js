const texto = '1,2,3,4,5,6,a.b c!d?e';
const regexVirgula = /,/;

console.log('split:',texto.split(regexVirgula));
console.log('match:',texto.match(regexVirgula));
console.log();

console.log('vírgula:',texto.match(/,/g));
console.log('A maiúsculo:',texto.match(/A/g));
console.log('A ignore case:',texto.match(/A/gi));
console.log();

console.log(texto.match(/2/g));
console.log(texto.match(/b c!d/));
