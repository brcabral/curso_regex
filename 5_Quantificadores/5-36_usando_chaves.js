const texto = 'O João recebeu 120 milhões apostando nos números 6 9 21 23 45 46';

// para definir um quantificador usa-se {}
console.log(texto.match(/\d{1,2}/g));
console.log(texto.match(/[0-9]{2}/g));
console.log(texto.match(/\d{1,}/g));
console.log();

console.log(texto.match(/\w{7}/g));
console.log(texto.match(/[\wãõ]{7,}/g));
console.log();

// no futuro...
console.log(texto.match(/\b\d{1,2}\b/g));
console.log(texto.match(/\b[\wõ]{7}\b/g));
