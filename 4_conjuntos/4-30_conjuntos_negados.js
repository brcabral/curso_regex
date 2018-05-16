const texto = '1,2,3,a.b c!d?e[f';

console.log(texto.match(/\D/g));
console.log(texto.match(/[^0-9]/g));
console.log(texto.match(/[^\d]/g));
console.log(texto.match(/[^\d!\?\[\s,\.]/g));
console.log();

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';
// No exemplo abaixo temos a negação de dois intervalos
// de ! à / e de : à @, além dos espaços (\s)
console.log(texto2.match(/[^!-/:-@\s]/g));
