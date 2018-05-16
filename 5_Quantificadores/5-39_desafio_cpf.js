const texto = ` CPF dos aprovados:
  - 643.414.633-73
  - 758.484.676-92
  - 026.680.235-48
`;

const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
console.log(texto.match(regex));
