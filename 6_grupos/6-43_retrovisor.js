const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>';
console.log(texto1.match(/<(\w+)>.*<\/\1>/g));
console.log();

const texto2 = 'Lentamente é mente muito lenta.';
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi));
// Quando usamos os caracteres ?: dentro do grupo,
// estamos dizendo para não guardar o valor do grupo na memória (retrovisor)
console.log(texto2.match(/(?:lenta)(mente).*\1/gi));
console.log();

console.log(texto2.match(/(lenta)(mente)/gi));
console.log(texto2.match(/(lenta)(mente)?/gi));
console.log(texto2.replace(/(lenta)(mente)/gi, 'Ele tem a $2'));  // $ = retrovisor
console.log();

const texto3 = 'abcdefghijkll';
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g));
