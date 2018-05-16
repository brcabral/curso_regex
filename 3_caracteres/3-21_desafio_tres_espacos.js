const texto = 'a   b';
console.log('/a\s\s\sb/:',texto.match(/a\s\s\sb/));
console.log('/a   b/:',texto.match(/a   b/));
console.log('/a...b/:',texto.match(/a...b/));


// no futuro...
console.log('no futuro...',texto.match(/a\s+b/));
console.log('no futuro...',texto.match(/a {3}b/));
console.log('no futuro...',texto.match(/a\s{3}b/));
