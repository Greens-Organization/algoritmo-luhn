# Identificação da companhia do cartão
Um cartão é composto de uma sequência de 13 a 16 dígitos decimais. Os dígitos mais significativos (prefixos) identificam qual a companhia que opera o cartão, de acordo com a seguinte tabela:

| Operadora  |    Prefixo   |  Tamanho  | Algoritmo de Verificação |
| ---------- | ------------ | --------- | ------------------------ |
| Mastercard |    51 a 55   |     16    |          Luhn 10         |
| Visa       |       4      | 13 ou 16  |          Luhn 10         |
| Amex       |   34 ou 37   |     15    |          Luhn 10         |
| Diners     | 30, 36 ou 38 |     14    |          Luhn 10         |
| Discover   |     6011     |     16    |          Luhn 10         |
| enRoute    | 2014 ou 2149 |     15    |          Luhn 10         |
| JCB        |       3      |     16    |          Luhn 10         |
| JCB        | 2131 ou 1800 |     15    |          Luhn 10         |

## Algoritmo de Luhn
O algoritmo de Luhn foi desenvolvido por Hans Peter Luhn, da IBM, em 1954. Ele é capaz de detectar um erro simples em um dígito, assim como a maioria das transposições de um dígito com os dígitos adjacentes. Este algoritmo verifica se um número de cartão é bem formado realizando o seguinte teste:

1. Iniciando com o dígito mais à direita, multiplique por 2 todos os dígitos de posição par, e deixe inalterados os dígitos das posições ímpares. Note que o dígito mais à direita é indexado por 1 (`[1]`), ou seja, sua posição sempre é ímpar. Por exemplo, o número 49927398716 seria reescrito como 4(18)9(4)7(6)9(16)7(2)6. Os parênteses ilustram os dígitos que foram dobrados, e são usados apenas para fins didáticos. Sem os parênteses, o número resultante seria 4189476916726.
2. Some todos os dígitos, independente da sua posição. Assim, o número resultante do passo 1 produziria 4+1+8+9+4+7+6+9+1+6+7+2+6 = 70.
3. Se o número final é congruente a zero em módulo 10 (ou, em termos mais simples, se a divisão por dez produzir um resto igual a zero), então o número inicial é válido. Note que, obviamente, isso não quer dizer que o cartão seja legítimo, ou que tenha crédito, ou que não tenha expirado. Passar no teste de Luhn quer simplesmente dizer que não ocorreram erros, ou seja, o número é bem formado.

## Especificação do programa
Escrever nas posições mais a esquerda do visor (prompt) o caractere `>`, e aguardar a digitação de um número de cartão. Cada caractere digitado deve ser ecoado no visor (prompt). Além disso, deve ser apresentado (e controlado) um cursor, representado pelo caractere *Undescore* ( _ ). Também deve ser permitido o uso da tecla *Backspace* para corrigir erros de digitação (Cuidado com o tratamento do *Backspace* **antes** do primeiro caractere). Um número termina quando for digitado a tecla *Enter*, ou quando for atingido o final do visor (prompt).

Quando terminar a digitação de um número, o programa deve identificar a operadora, de acordo com a tabela fornecida anteriormente, e verificar a validade do número. Note que um número será válido se passar no teste de Luhn e tiver o tamanho (número de dígitos) correto.

As situações a serem tratadas e que devem ser indicadas por mensagens adequadas são as seguintes (a definição exata da mensagem fica a seu critério, mas não deve ultrapassar uma linha do visor):

1. Números que contiverem caracteres não numéricos (caracteres fora do intervalo [0;9] );
2. Números com tamanho incorreto;
3. Números de operadoras desconhecidas (que não precisam ser validados);
4. Números de operadoras conhecidas, mas inválidos;
5. Números de operadoras conhecidas e válidos.
Nos casos (4) e (5), a mensagem deve incluir o nome da operadora.

Após processar o número e escrever no visor a mensagem adequeada, o programa deve aguardar que seja digitado um *Enter* e então escrever no visor "Validar outro ou Terminar?". Se for digitado "t" ou "T", o programa deve finalizar, escrevendo uma eventual mensagem de encerramento. Se for digitado "v" ou "V", o programa deve tratar outro número, reiniciando a partir do ponto em que é escrito `>` no visor.

Não esqueça que os caracteres digitados pelo usuário são recebidos em ASCII e podem ser enviados para o visor neste formato. No entanto, para realizar o teste de Luhn é necessário que os dígitos 0 a 9 sejam convertidos para valores númericos.

## Casos de teste

| Número            | Caso                   |
| ----------------- | ---------------------- |
| 354683A6c         | Caracteres inválidos   |
| 347598            | Número muito curto     |
| 51783746281726178 | Número muito longo     |
| 7145819143526709  | Operadora desconhecida |
| 355601236748643   | Operadora desconhecida |
| 213078347298518   | Operadora desconhecida |
| 5105105105105100  | Mastercard, válido     |
| 5555555555554443  | Mastercard, inválido   |
| 4222222222222     | Visa, válido           |
| 4567890123456789  | Visa, inválido         |
| 378282246310005   | Amex, válido           |
| 38520000023237    | Diners, válido         |
| 3566002020360606  | JCB, inválido          |

## Referências

- [Trabalho Prático de Algoritmo de Luhn - UFRGS](https://www.inf.ufrgs.br/arq/wiki/lib/exe/fetch.php?media=wiki:trab:cesar:2008-2-numero_de_cartao_de_credito.pdf)
