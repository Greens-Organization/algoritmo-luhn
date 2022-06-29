# Algoritmo de Luhn

O algoritmo Luhn ou fórmula Luhn, também conhecido como o algoritmo "módulo 10" ou "mod 10", em homenagem ao seu criador, o cientista da IBM Hans Peter Luhn, é uma fórmula simples de soma de verificação usada para validar uma variedade de números de identificação, como [números de cartão de crédito](https://en.wikipedia.org/wiki/Payment_card_number), [números IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity), números de provedor nacional nos Estados Unidos, números de seguro social canadense, números de identificação israelense, números de identificação sul-africanos, números de identificação nacional suecos, números de identidade corporativa suecos (OrgNr), números de segurança nacional gregos (AMKA), números de chips de celular e códigos de pesquisa que aparecem nos recibos do McDonald's, Taco Bell e Tractor Supply Co. Está descrito na [Patente U.S No. 2.950.048](https://worldwide.espacenet.com/patent/search/family/003449488/publication/US2950048A?q=pn%3DUS2950048A), concedida em 23 de agosto de 1960.

O algoritmo é de domínio público e está em amplo uso hoje. É especificado na [ISO/IEC 7812-1](https://en.wikipedia.org/wiki/ISO/IEC_7812). Não foi destinado para ser uma [função de hash](https://en.wikipedia.org/wiki/Cryptographic_hash_function) criptograficamente segura; ele foi projetado para proteger contra erros acidentais, não contra ataques maliciosos. A maioria dos cartões de crédito e muitos números de identificação do governo usam o algoritmo como um método simples de distinguir números válidos de números digitados incorretamente ou incorretos.

## Descrição do algoritmo

O dígito verificador é calculado da seguinte forma:  
1. Se o número já contiver o dígito de verificação, retire esse dígito para formar o número útil. O dígito de verificação é na maioria das vezes o último dígito.  
2. Com o número útil, comece do dígito mais à direita. Movendo para a esquerda, multiplique por 2 os dígitos pares.
3. Some os dígitos do valor resultante de cada posição (usando o valor original onde um dígito não foi duplicado na etapa anterior).
4. Por fim, verifique se o resultado da divisão por **10** é igual a zero - **(res mod 10) = 0**.

### Exemplo de como calcular o dígito de verificação

Suponha um exemplo de um número de conta "7992739871" (apenas a "carga útil", verifique se o dígito verificador não foi incluido).
| | 7 | 9 | 9 | 2 | 7 | 3 | 9 | 8 | 7 | 1 |
|-|---|---|---|---|---|---|---|---|---|---|  
|Multiplicando|1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 |  
| | = | = | = | = | = | = | = | = | = | = |  
| | 7 | 18 | 9 | 4 | 7 | 6 | 9 | 16 | 7 | 2 |  
| Somando os dígitos | 7 | (1+8) 9 | 9 | 4 | 6 | 9 | (1+6) 7 | 7 | 2 |

O resultado das somas dos dígitos é igual a 67.  
O dígito de verificação é igual a **10 - (67 mod 10) = 3**.  
Isso faz com que o número completo da conta seja lido 79927398713.

### Exemplo para validar o dígito de verificação

1. Retire o dígito de verificação (último dígito) do número para validar. (por exemplo 79927398713 -> 7992739871)
2. Calcule o dígito verificador (veja acima).
3. Compare seu resultado com o dígito verificador original. Se ambos os números corresponderem, o resultado é válido. (por exemplo: **(digitoDeVerificacao = digitoVerificadorCalculado) <=> umDigitoValido**)

## Referências

- [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)
- [Desvendando o algoritmo de Luhn](https://youtu.be/-R7QPKb58lQ)
- [Algoritmo de Luhn](https://stringfixer.com/pt/Luhn_algorithm)
