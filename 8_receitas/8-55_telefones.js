const texto = ` Lista telefônica:
  - (16) 3883-6957
  - (16) 99462-9661
  - 3500-4318
  - (19)99637-7757
  - (1) 4321-1234
`;

console.log(texto.match(/(\(\d{2}\))?\s?\d{4,5}\-\d{4}/g));
