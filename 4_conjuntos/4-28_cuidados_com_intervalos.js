const texto = 'ABC [abc] a-c 1234';

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g));

// Os intervalos utilizam a ordem da tabela UNICODE e como entre o A maiúsculo
// e o z minúsculo há alguns símbolos, eles serão exibidos no resultado
console.log(texto.match(/[A-z]/g));

// É preciso respeitar a ordem da tabela UNICODE,
// caso contrário será exibida uma mensagem de intervalo inválidos
// console.log(texto.match(/[a-Z]/g));
// console.log(texto.match(/[4-1]/g));
