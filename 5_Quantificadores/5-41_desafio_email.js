const texto = ` Os e-mails dos convidados são:
  - joao@email.com
  - maria@email.com.br
  - fulano@cod3r.com.br
  - xico@gmail.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - rafa.sampaio@yahoo.com
`;

const regex = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g;
console.log(texto.match(regex));

// no futuro
// console.log('no futuro...',texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g));
