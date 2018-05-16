const texto = '.$+*?-';
// Dentro de um conjunto não é preciso colocar um escape (\) para representar que alguns metacaracteres são elementos literais
console.log(texto.match(/[+.?*$]/g));

// Neste caso o hífen está representando um metacaracter de intervalo (range)
console.log(texto.match(/[$-?]/g));
console.log();

// NÃO é um intervalo (range)
console.log(texto.match(/[$\-?]/g));  // usando um escape
console.log(texto.match(/[-$?]/g));  // hífen estando no início ou no fim do conjunto
console.log(texto.match(/[-?]/g));  // tendo no máximo 2 caracteres no conjunto

// pode precisar de escape dentro do conjunto: - [ ] ^
