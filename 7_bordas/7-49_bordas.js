const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador';

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi));  // ^ indica início da linha ou string
console.log(texto.match(/r$/gi));  // ^ indica fim da linha ou string

console.log(texto.match(/^r.*r$/gi));  // problema do dotall (ponto não resolve o \n)
