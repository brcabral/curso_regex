import re

texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
pattern9 = re.complile('9')
match1 = re.search(pattern9, texto)
#Exibe a primeira e a última posição e o elemento que foi encontrado de acordo com a expressão passada
print "Posicoes %s, %s; Valor: %s." % (match1.start(), match1.end(), match1.group(0))

valores = re.findall('[a-f]', texto)
#Exibe todos os elementos encontrados no texto de acordo com a expressão regular passada no findall
print "Valores: %s" % valores
