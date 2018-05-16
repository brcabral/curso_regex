const texto = 'João é calmo, mas no transito fica nervoso.';
console.log(texto.match(/[\wÀ-ú]+/gi));
console.log();

// Positive lookahead - Olhando para frente
// O exemplo abaixo está procurando as palavras precedidas por vírgula
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi));

// precedidas por ponto
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log();

// Negative lookahead - Olhando para trás
// O exemplo abaixo está procurando as palavras que NÃO SÃO precedidas por vírgula
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));
