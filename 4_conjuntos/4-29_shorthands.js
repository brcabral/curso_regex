const texto = `1,2,3,4,5,6,a.b c!d?e	-\r\f
f_g`;

console.log(texto.match(/\d/g));  // d - números [0-9]
console.log(texto.match(/\D/g));  // D - não números [^0-9]

console.log(texto.match(/\w/g));  // w - caracteres [A-Za-z0-9_]
console.log(texto.match(/\W/g));  // W - não caracteres [^A-Za-z0-9_]

console.log(texto.match(/\d/g));  // d - números [0-9]
console.log(texto.match(/\D/g));  // D - não números [^0-9]

console.log(texto.match(/\s/g));  // s - espaço [\t\n\r\f]
console.log(texto.match(/\S/g));  // S - não espaço [^ \t\n\r\f]
