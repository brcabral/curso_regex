const texto = ` Lista telefônica:
  - (16) 3883-6957
  - (16) 99462-9661
  - 3500-4318
  - (19) 99637-7757
`;

const regex = /\(?\d{0,2}\)?\s\d{4,5}-\d{4}/g;
console.log(texto.match(regex));
console.log();


// no futuro
// console.log(texto.match(/(\(\d{2}\))?\s?\d{4,5}\-\d{4}/g));
