//Em JS a quebra de linha (\n) não é resolvido pelo metacaracter ponto (.)
const texto = 'Bom\ndia';

console.log('Um ponto:', texto.match(/./gi));
console.log('Três pontos:', texto.match(/.../gi));
console.log('Quatro pontos:', texto.match(/..../gi));
