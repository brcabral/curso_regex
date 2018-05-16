// para definir uma classe (ou conjunto) de caracteres usa []

const texto = '1,2,3,4,5,6,a.b c!d?e[f';
const regexPares = /[02468]/g;
console.log(texto.match(regexPares));
console.log();

const texto2 = 'João não vai andar na moto';
const regexComESemAcento = /n[aã]/g;
console.log(texto2.match(regexComESemAcento));
