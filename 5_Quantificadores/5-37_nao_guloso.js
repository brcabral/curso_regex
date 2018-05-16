const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>';

// quantificadores, por padrão, SÃO gulosos (greedy)
console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,}<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));
console.log();

// quantificadores NÃO gulosos (lazy)
console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,}?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));
