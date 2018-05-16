/*
Metacaracteres - Representantes
.     ponto             Um caractere qualquer
[]    Conjunto          Conjunto de caracteres permitidos
[^]   Conjunto Negado   Conjunto de caracteres proibidos

Metacaracteres - Quantificadores
?        Opcional    Zero ou um
*        Asterisco   Zero ou mais
+        Mais        Um ou mais
{n, m}   Chaves      De n até m

Metacaracteres - Âncoras
^    Circunflexo   Início de linha
$    Cifrão        Fim da linha
\b   Borda         Início ou fim da palavra

Outros metacaracteres
\        Escape       Uso de metacaracteres como literal
|        ou           Operação ou
()       Grupo        Define um grupo
\1..\9   Retrovisor   Resgata grupos já definidos

*/

const texto = '1,2,3,4,5,6,a.b c!d?e';
const regexPonto = /\./g;
console.log(texto.split(regexPonto));
console.log();

const regexSimbolos = /,|\.|\?|!| /g;
console.log(texto.split(regexSimbolos));
