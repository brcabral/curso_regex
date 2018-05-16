const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!';

// Não existe grupos dentro de conjuntos, o conjunto tem prioridade.
console.log(texto.match(/[(abc)]/gi));
// Mas existe conjuntos dentro dos grupos.
console.log(texto.match(/([abc])/gi));
//Evitar criar grupos quando não há necessidade.
console.log(texto.match(/(abc)/gi));  // evitar
console.log(texto.match(/abc/gi));    // preferir
